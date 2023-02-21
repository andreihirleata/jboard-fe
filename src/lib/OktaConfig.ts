export const OktaConfig = {
    clientId: process.env.REACT_APP_oktaClientId,
    issuer: `https://${process.env.REACT_APP_oktaDevId}/oauth2/default`,
    redirectUri: process.env.REACT_APP_oktaRedirectURI,
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsChecks: true
}