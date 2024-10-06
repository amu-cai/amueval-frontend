import Keycloak from 'keycloak-js';
// import { POLICY_PRIVACY_PAGE, ROOT_URL } from '../utils/globals';
import SESSION_STORAGE from '../utils/sessionStorage';
import {logIn, logOut} from "../redux/authSlice";
// import LOCAL_STORAGE from '../utils/localStorage';
import store from "../redux/store";

const _kc = new Keycloak({
  url: process.env.REACT_APP_KC_URL,
  realm: process.env.REACT_APP_KC_REALM,
  clientId: process.env.REACT_APP_KC_CLIENT_ID,
});

const initKeycloak = (onAuthenticatedCallback, dispatch) => {
    _kc
        .init({
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri:
                window.location.origin + '/silent-check2-sso.html',
            pkceMethod: 'S256',
            checkLoginIframe: false,
        })
        .then((authenticated) => {
            if (!authenticated) {
                console.log('user is NOT authenticated..!');
            }
            dispatch(
                logIn({
                    user: getUsername(),
                    token: getToken(),
                    reloadSession: false,
                })
            );
            onAuthenticatedCallback();
        })
        .catch(console.error);
};

const doLogin = () => {
    sessionStorage.setItem(
        SESSION_STORAGE.LOGGED,
        SESSION_STORAGE.STATIC_VALUE.YES
    );
    _kc.login();
};

const doLogout = (event, reset) => {
  event.preventDefault();
  sessionStorage.clear();
  if (reset) {
    localStorage.clear();
  }
  sessionStorage.setItem(
      SESSION_STORAGE.LOGGED,
      SESSION_STORAGE.STATIC_VALUE.NO
  );
    store.dispatch(
        logOut({
            redirectToRootPage: () => window.location.reload(),
        })
    );
  _kc.logout({
      redirectUri: window.location.origin,
  });
};

const getToken = () => _kc.token;

const doRegister = () => {
    _kc.login({action: "register"});
};


const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
    _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const goToProfile = () => {
  // _kc.accountManagement();
};

const getProfileInfo = async (setProfileInfo) => {
  _kc.loadUserInfo().then((response) => setProfileInfo(response));
};

const KeyCloakService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
  doRegister,
  goToProfile,
  getProfileInfo,
};

export default KeyCloakService;