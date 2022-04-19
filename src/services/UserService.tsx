import Keycloak from "keycloak-js";

// @ts-ignore
export const keycloak = new Keycloak('/keycloak.json');

const doLogin = keycloak.login;

const doLogout = keycloak.logout;

const getToken = () => keycloak.token;

const isLoggedIn = () => !!keycloak.token;

const isAuthenticated = () => keycloak.authenticated;

const updateToken = (successCallback: any) =>
    keycloak.updateToken(5)
        .then(successCallback)
        .catch(doLogin);

const getUsername = () => keycloak.tokenParsed?.preferred_username;

const hasRole = (roles: any[]) => roles.some(role => keycloak.hasRealmRole(role));

const UserService = {
    doLogin,
    doLogout,
    isLoggedIn,
    getToken,
    updateToken,
    getUsername,
    hasRole,
    isAuthenticated,
};

export default UserService;
