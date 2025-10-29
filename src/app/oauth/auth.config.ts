import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // 1. La URL de tu Authorization Server (del punto 7)
  issuer: 'http://localhost:9000',

  // 2. La URL de Angular donde volver (del punto 4)
  redirectUri: window.location.origin + '/auth/auth-callback',

  // URL a la que se redirige después de cerrar sesión
  postLogoutRedirectUri: window.location.origin + '/',

  // 3. El Client ID (del punto 1)
  clientId: 'angular-spa',

  // 4. Los scopes que pides (del punto 5)
  scope: 'profile',

  // 5. El flujo que usas (del punto 3)
  responseType: 'code',

  // Opcional: para que no pregunte el consentimiento siempre
  showDebugInformation: true,

  requireHttps: false,

  oidc: true,

  disablePKCE: false,
};