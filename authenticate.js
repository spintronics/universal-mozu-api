import constants from './constants'
import {
  assocPath,
  flip,
  prop,
  path,
  concat,
  compose,
  evolve,
  curry
} from 'ramda'
import Future from 'fluture'
export default api => {
  let auth = {}
  let assign = (ref, val) => (ref = val)

  const userclaims = 'USERCLAIMS'
  const appclaims = 'APPCLAIMS'
  let headerType = flip(prop(constants.headers))

  let addClaimToRequest = type => assocPath(['headers', headerType(type)])
  let addUserClaimToRequest = addClaimToRequest(userclaims)
  let addAppClaimToRequest = addClaimToRequest(appclaims)

  let constructDate = date => new Date(date)
  let storeDate = type =>
    evolve({
      [type]: {
        accessTokenExpiration: constructDate,
        refreshTokenExpiration: constructDate
      }
    })

  let setClaim = curry((type, auth) =>
    compose(
      assign(auth),
      storeDate(type),
      flip(assocPath(auth)),
      concat([type])
    )
  )
  let setUserClaim = setClaim(userclaims)
  let setAppClaim = setClaim(appclaims)

  let getClaim = curry((type, auth) =>
    compose(
      flip(path(auth)),
      concat([type])
    )
  )
  let getUserClaim = getClaim(userclaims)
  let getAppClaim = getClaim(appclaims)

  let validClaim = claim => new Date() < claim.accessTokenExpiration
  let staleClaim = claim => new Date() < claim.refreshTokenExpiration

  let getAppAccessToken = context =>
    api.applications.authTicket.authenticateApp({}, context)
  let refreshAppAccessToken = ({ refreshToken }) =>
    api.applications.authTicket.refreshAppAuthTicket({ refreshToken })
  let getUserAccessToken = context =>
    api.developer.developerAdminUserAuthTicket.createDeveloperUserAuthTicket(
      ({ developerAccountId } = context),
      context
    )
  let refreshUserAccessToken = (context, { refreshToken }) =>
    api.developer.developerAdminUserAuthTicket.refreshDeveloperAuthTicket(
      context,
      { refreshToken }
    )

  return request => {
    let appClaim = getAppClaim()
    let userClaim = getUserClaim()
    if (appClaim || request.context.sharedSecret) {
      appClaim.valid = validClaim(appClaim)
      appClaim.stale = !appClaim.valid && staleClaim(appClaim)
      if (appClaim.valid) return Future.of(addAppClaimToRequest(request))
      return (appClaim.stale
        ? refreshAppAccessToken(appClaim)
        : getAppAccessToken(request.context)
      )
        .map(setAppClaim(auth))
        .map(
          compose(
            addAppClaimToRequest(request),
            getAppClaim(auth)
          )
        )
    }
    if (userClaim || request.context.developerAccount) {
      userClaim.valid = validClaim(userClaim)
      userClaim.stale = !userClaim.valid && staleClaim(userClaim)
      return (userClaim.stale
        ? refreshUserAccessToken(userClaim)
        : getUserAccessToken(request.context)
      )
        .map(setUserClaim(auth))
        .map(
          compose(
            addUserClaimToRequest(request),
            getUserClaim(auth)
          )
        )
    }
    return Future.reject('unable to authenticate')
  }
}
