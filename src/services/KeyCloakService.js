import Keycloak from 'keycloak-js';

const _kc = new Keycloak({
    url: 'https://auth-dev.csi.wmi.amu.edu.pl/',
    realm: 'gonito-dev',
    clientId: 'gonito-dev-heroku'
});

const initKeycloak = (onAuthenticatedCallback) => {
    _kc.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256',
        checkLoginIframe: false
    })
        .then((authenticated) => {
            if (!authenticated) {
                console.log('user is NOT authenticated..!');
            }
            onAuthenticatedCallback();
        })
        .catch(console.error);
};

const doLogin = _kc.login;

const doLogout = () => {
    sessionStorage.clear();
    _kc.logout();
};

const getToken = () => _kc.token;

const doRegister = _kc.register;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
    _kc.updateToken(5)
        .then(successCallback)
        .catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const KeyCloakService = {
    initKeycloak,
    doLogin,
    doLogout,
    isLoggedIn,
    getToken,
    updateToken,
    getUsername,
    hasRole,
    doRegister
};

export default KeyCloakService;