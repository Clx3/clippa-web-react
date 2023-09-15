export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KEYCLOAK_ISSUER: string;
      KEYCLOAK_CLIENT_ID: string;
    }
  }
}