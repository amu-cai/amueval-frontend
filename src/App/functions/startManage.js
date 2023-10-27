import { POLICY_PRIVACY_PAGE, ROOT_URL } from '../../utils/globals';
import addUser from '../../api/addUser';
import SESSION_STORAGE from '../../utils/sessionStorage';
import LOCAL_STORAGE from '../../utils/localStorage';
import KeyCloakService from '../../services/KeyCloakService';
// import KeyCloakService from '../../services/KeyCloakService';

const timeoutValue = 1500;

const redirectAfterLogout = () => {
  if (
    sessionStorage.getItem(SESSION_STORAGE.LOGGED) ===
    SESSION_STORAGE.STATIC_VALUE.NO
  ) {
    const pageName = window.location.pathname.split('/').at(-1);
    if (pageName) {
      window.location.replace(ROOT_URL);
    }
  }
};

const addUserToServer = () => {
  if (
    localStorage.getItem(LOCAL_STORAGE.USER_ADDED_TO_SERVER) !==
    SESSION_STORAGE.STATIC_VALUE.YES
  ) {
    if (
      sessionStorage.getItem(SESSION_STORAGE.LOGGED) ===
        SESSION_STORAGE.STATIC_VALUE.YES ||
      KeyCloakService.isLoggedIn()
    ) {
      addUser();
    }
  }
};

const redirectAfterAcceptPolicyPrivacy = () => {
  if (
    (sessionStorage.getItem(SESSION_STORAGE.LOGGED) ===
      SESSION_STORAGE.STATIC_VALUE.YES ||
      KeyCloakService.isLoggedIn()) &&
    (window.location.pathname === `${POLICY_PRIVACY_PAGE}/login` ||
      window.location.pathname === `${POLICY_PRIVACY_PAGE}/register`)
  ) {
    window.location.replace(`${ROOT_URL}/challenges`);
  }
};

// const reloadSession = () => {
//   setTimeout(() => {
//     if (
//       sessionStorage.getItem(SESSION_STORAGE.LOGGED) ===
//       SESSION_STORAGE.STATIC_VALUE.YES
//     ) {
//       if (!KeyCloakService.isLoggedIn()) {
//         KeyCloakService.doLogin();
//       }
//     }
//   }, 1500);
// };

const startManage = () => {
  redirectAfterLogout();
  setTimeout(() => {
    addUserToServer();
  }, timeoutValue);
  setTimeout(() => {
    redirectAfterAcceptPolicyPrivacy();
  }, timeoutValue);
  // reloadSession();
};

export default startManage;
