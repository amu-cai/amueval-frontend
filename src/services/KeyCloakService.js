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
    })
        .then((authenticated) => {
            console.log('user is authenticated!');
            console.log(isLoggedIn());
            if (!authenticated) {
                console.log('user is NOT authenticated..!');
            }
            onAuthenticatedCallback();
        })
        .catch(console.error);
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const doRegister = _kc.register;

const isLoggedIn = () => {
    return _kc.authenticated;
};

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