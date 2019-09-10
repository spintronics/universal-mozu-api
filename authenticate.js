import constants from './constants'
import {
  curry,
  flip,
  assocPath,
  compose,
  evolve,
  pathOr,
  pick,
  prop
} from 'ramda/es'
import { testIsServer, isObj } from './util'
import inquirer from 'inquirer'

export default api => {
  let auth = {}
  let assignKey = curry((key, ref, val) => {
    ref[key] = val
    return ref
  })
  let isServer = testIsServer()

  const userclaims = 'USERCLAIMS'
  const appclaims = 'APPCLAIMS'
  let headerType = flip(prop)(constants.headers)

  let addClaimToRequest = curry((type, requestOptions, claim) =>
    assocPath(
      ['headers', constants.headerPrefix + headerType(type)],
      claim.accessToken,
      requestOptions
    )
  )

  let addUserClaimToRequest = addClaimToRequest(userclaims)
  let addAppClaimToRequest = addClaimToRequest(appclaims)

  let constructDate = date => new Date(date)

  let setClaim = curry((type, auth) =>
    compose(
      assignKey(type, auth),
      evolve({
        accessTokenExpiration: constructDate,
        refreshTokenExpiration: constructDate
      })
    )
  )
  let setUserClaim = setClaim(userclaims)
  let setAppClaim = setClaim(appclaims)

  let getClaim = curry((type, auth) => pathOr({}, [type], auth))

  let getUserClaim = getClaim(userclaims)
  let getAppClaim = getClaim(appclaims)

  let validClaim = claim => claim && new Date() < claim.accessTokenExpiration
  let staleClaim = claim => claim && new Date() < claim.refreshTokenExpiration
  const internalAuthRequest = {
    internal: 1,
    headers: { Host: 'home.mozu.com' }
  }

  let getAppAccessToken = compose(
    body =>
      api.platform.applications.authTicket.authenticateApp(
        body,
        internalAuthRequest
      ),
    pick(['applicationId', 'sharedSecret'])
  )

  let refreshAppAccessToken = compose(
    body =>
      api.platform.applications.authTicket.refreshAppAuthTicket(
        body,
        internalAuthRequest
      ),
    pick(['refreshToken'])
  )

  let getUserAccessToken = compose(
    body =>
      api.platform.developer.developerAdminUserAuthTicket.createDeveloperUserAuthTicket(
        Object.assign(body, {
          developerAccountId: api.context.developerAccountId
        }),
        internalAuthRequest
      ),
    pick(['emailAddress', 'password']),
    prop('developerAccount')
  )

  let refreshUserAccessToken = compose(
    body =>
      api.platform.developer.developerAdminUserAuthTicket.refreshDeveloperAuthTicket(
        Object.assign(body, {
          developerAccountId: api.context.developerAccountId
        }),
        internalAuthRequest
      ),
    pick(['refreshToken'])
  )

  let password
  let passwordPrompt = (() => {
    let userLoginAttempts = 0
    return function prompt(requestOptions) {
      return inquirer
        .prompt([
          {
            type: 'password',
            message: 'developer password: ',
            validate: function(password) {
              if (!password) return 'i dont think your password is empty'
            },
            name: 'password'
          }
        ])
        .then(({ password }) => {
          return getUserAccessToken(
            assocPath(['developerAccount', 'password'], password, api.context)
          )
        })
        .then(
          compose(
            setUserClaim(auth),
            prop('data')
          )
        )
        .then(
          compose(
            addUserClaimToRequest(requestOptions),
            getUserClaim
          )
        )
        .catch(e => {
          if (e && e.response.status === 401 && userLoginAttempts < 3) {
            userLoginAttempts += 1
            readline.output.write('\ninvalid password. try again?\n')
            return prompt(requestOptions)
          }
          return Promise.reject(e)
        })
    }
  })()

  let authenticate = requestOptions => {
    let appClaim = getAppClaim(auth)
    let userClaim = getUserClaim(auth)
    /**
     * if this is not being run in node don't do anything. otherwise use the appclaim from state if it is
     * valid and not stale. refresh the token if it is stale. request a token if one does not yet exist
     * using either application credentials (checked first) or user credentials
     *
     */
    // console.log('auth', appClaim)
    if (isServer) {
      if (
        requestOptions.scope !== constants.dev &&
        (appClaim.accessToken || requestOptions.context.sharedSecret)
      ) {
        appClaim.valid = validClaim(appClaim)
        appClaim.stale = !appClaim.valid && staleClaim(appClaim)
        if (appClaim.valid)
          return Promise.resolve(addAppClaimToRequest(requestOptions, appClaim))
        return appClaim.stale
          ? refreshAppAccessToken(appClaim)
          : getAppAccessToken(api.context)
              .then(
                compose(
                  setAppClaim(auth),
                  prop('data')
                )
              )
              .then(
                compose(
                  addAppClaimToRequest(requestOptions),
                  getAppClaim
                )
              )
      }
      if (userClaim.accessToken || requestOptions.context.developerAccount) {
        userClaim.valid = validClaim(userClaim)
        userClaim.stale = !userClaim.valid && staleClaim(userClaim)
        if (!password && requestOptions.context.developerAccount.password)
          password = requestOptions.context.developerAccount.password
        if (userClaim.valid)
          return Promise.resolve(
            addUserClaimToRequest(requestOptions, userClaim)
          )
        return userClaim.stale
          ? refreshUserAccessToken(userClaim)
          : password
          ? Promise.resolve(password)
          : !isServer
          ? Promise.reject('no password for user auth in context')
          : passwordPrompt(requestOptions)
      }
    } else return Promise.resolve(requestOptions)
    return Promise.reject('unable to authenticate')
  }

  authenticate.setAppClaim = setAppClaim
  authenticate.getAppClaim = getAppClaim
  authenticate.setUserClaim = setUserClaim
  authenticate.getUserClaim = getUserClaim

  return authenticate
}
