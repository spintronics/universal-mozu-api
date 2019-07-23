import constants from './constants'
import R from './ramda'
import { testIsServer, isObj } from './util'

export default api => {
  let auth = {}
  let assignKey = R.curry((key, ref, val) => {
    ref[key] = val
    return ref
  })
  let isServer = testIsServer()

  const userclaims = 'USERCLAIMS'
  const appclaims = 'APPCLAIMS'
  let headerType = R.flip(R.prop)(constants.headers)

  let addClaimToRequest = R.curry((type, requestOptions, claim) =>
    R.assocPath(
      ['headers', constants.headerPrefix + headerType(type)],
      claim.accessToken,
      requestOptions
    )
  )

  let addUserClaimToRequest = addClaimToRequest(userclaims)
  let addAppClaimToRequest = addClaimToRequest(appclaims)

  let constructDate = date => new Date(date)

  let setClaim = R.curry((type, auth) =>
    R.compose(
      assignKey(type, auth),
      R.evolve({
        accessTokenExpiration: constructDate,
        refreshTokenExpiration: constructDate
      })
    )
  )
  let setUserClaim = setClaim(userclaims)
  let setAppClaim = setClaim(appclaims)

  let getClaim = R.curry((type, auth) => R.pathOr({}, [type], auth))

  let getUserClaim = getClaim(userclaims)
  let getAppClaim = getClaim(appclaims)

  let validClaim = claim => claim && new Date() < claim.accessTokenExpiration
  let staleClaim = claim => claim && new Date() < claim.refreshTokenExpiration
  const internalAuthRequest = {
    internal: 1,
    headers: { Host: 'home.mozu.com' }
  }

  let getAppAccessToken = R.compose(
    body =>
      api.platform.applications.authTicket.authenticateApp(
        body,
        internalAuthRequest
      ),
    R.pick(['applicationId', 'sharedSecret'])
  )

  let refreshAppAccessToken = R.compose(
    body =>
      api.platform.applications.authTicket.refreshAppAuthTicket(
        body,
        internalAuthRequest
      ),
    R.pick(['refreshToken'])
  )

  let getUserAccessToken = R.compose(
    body =>
      api.platform.developer.developerAdminUserAuthTicket.createDeveloperUserAuthTicket(
        body,
        internalAuthRequest
      ),
    R.pick(['emailAddress', 'password']),
    R.prop('developerAccount')
  )

  let refreshUserAccessToken = R.compose(
    body =>
      api.platform.developer.developerAdminUserAuthTicket.refreshDeveloperAuthTicket(
        body,
        internalAuthRequest
      ),
    R.pick(['refreshToken'])
  )

  // let password
  // let passwordPrompt = (() => {
  //   let readline = () => import('readline')
  //   // let readline = new Function("return import('readline')")
  //   let userLoginAttempts = 0
  //   return requestOptions => {
  //     return (isObj(readline)
  //       ? Promise.resolve(readline)
  //       : readline().then(r => {
  //           readline = r.createInterface({
  //             input: process.stdin,
  //             output: process.stdout,
  //             terminal: true
  //           })
  //           readline.on('SIGINT', function() {
  //             readline.clearLine()
  //             return process.exit()
  //           })
  //           readline._writeToOutput = function(str) {
  //             // log(arguments)
  //             if (str.includes(this._prompt)) {
  //               readline.history.pop()
  //               readline.output.write(
  //                 this._prompt +
  //                   str
  //                     .replace(this._prompt, '')
  //                     .replace(/[\r\n]/g, '')
  //                     .replace(/./g, '*')
  //               )
  //               return
  //             }
  //             if (str === '\r\n') return
  //             if (readline.mask) readline.output.write('*')
  //             else readline.output.write(str)
  //           }
  //           let question = readline.question.bind(readline)
  //           readline.question = (q, cb) => {
  //             readline.mask = false
  //             question(q, answer => {
  //               readline.mask = false
  //               cb(answer)
  //             })
  //             readline.mask = true
  //           }
  //           return readline
  //         })
  //     )
  //       .then(readline => {
  //         return api.newTask((reject, resolve) => {
  //           readline.question('developer password: ', answer => {
  //             if (!answer) {
  //               readline.output.write(
  //                 "\ni don't think your password is an empty string\n"
  //               )
  //               return reject('invalid password')
  //             }
  //             readline.write('\n')
  //             resolve(password)
  //           })
  //         })
  //       })
  //       .then(password =>
  //         getUserAccessToken(
  //           R.assocPath(['developerAccount', 'password'], password, api.context)
  //         )
  //       )
  //       .then(
  //         R.compose(
  //           setUserClaim(auth),
  //           R.prop('data')
  //         )
  //       )
  //       .then(
  //         R.compose(
  //           addUserClaimToRequest(requestOptions),
  //           getUserClaim
  //         )
  //       )
  //       .catch(e => {
  //         if (e && e.response.status === 401 && userLoginAttempts < 3) {
  //           userLoginAttempts += 1
  //           readline.output.write('\ninvalid password. try again?\n')
  //           return passwordPrompt(requestOptions)
  //         }
  //         readline.close()
  //         return Promise.reject(e)
  //       })
  //   }
  // })()

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
      if (appClaim.accessToken || requestOptions.context.sharedSecret) {
        appClaim.valid = validClaim(appClaim)
        appClaim.stale = !appClaim.valid && staleClaim(appClaim)
        if (appClaim.valid)
          return Promise.resolve(addAppClaimToRequest(requestOptions, appClaim))
        return appClaim.stale
          ? refreshAppAccessToken(appClaim)
          : getAppAccessToken(api.context)
              .then(
                R.compose(
                  setAppClaim(auth),
                  R.prop('data')
                )
              )
              .then(
                R.compose(
                  addAppClaimToRequest(requestOptions),
                  getAppClaim
                )
              )
      }
      // if (userClaim.accessToken || requestOptions.context.developerAccount) {
      //   userClaim.valid = validClaim(userClaim)
      //   userClaim.stale = !userClaim.valid && staleClaim(userClaim)
      //   if (!password && requestOptions.context.developerAccount.password)
      //     password = requestOptions.context.developerAccount.password
      //   if (userClaim.valid)
      //     return Promise.resolve(
      //       addUserClaimToRequest(requestOptions, userClaim)
      //     )
      //   return userClaim.stale
      //     ? refreshUserAccessToken(userClaim)
      //     : password
      //     ? Promise.resolve(password)
      //     : !isServer
      //     ? Promise.reject('no password for user auth in context')
      //     : passwordPrompt(requestOptions)
      // }
    } else return Promise.resolve(requestOptions)
    return Promise.reject('unable to authenticate')
  }

  authenticate.setAppClaim = setAppClaim
  authenticate.getAppClaim = getAppClaim
  authenticate.setUserClaim = setUserClaim
  authenticate.getUserClaim = getUserClaim

  return authenticate
}
