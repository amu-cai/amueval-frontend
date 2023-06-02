import {
  POLICY_PRIVACY_PAGE,
  LOGIN_REQUIRED_PAGES,
  ROOT_URL,
} from '../../utils/globals';
import addUser from '../../api/addUser';
import SESSION_STORAGE from '../../utils/sessionStorage';
import KeyCloakService from '../../services/KeyCloakService';

const startManage = () => {
  if (
    sessionStorage.getItem(SESSION_STORAGE.LOGOUT) ===
    SESSION_STORAGE.STATIC_VALUE.YES
  ) {
    const pageName = window.location.pathname.split('/').at(-1);
    if (LOGIN_REQUIRED_PAGES.includes(pageName)) {
      window.location.replace(`${ROOT_URL}/challenges`);
    }
  }

  if (
    sessionStorage.getItem(SESSION_STORAGE.LOGGED) !==
    SESSION_STORAGE.STATIC_VALUE.YES
  ) {
    if (KeyCloakService.isLoggedIn()) {
      sessionStorage.setItem(
        SESSION_STORAGE.LOGGED,
        SESSION_STORAGE.STATIC_VALUE.YES
      );
      addUser();
    }
  }

  if (
    sessionStorage.getItem(SESSION_STORAGE.LOGGED) ===
      SESSION_STORAGE.STATIC_VALUE.YES &&
    (window.location.pathname === `${POLICY_PRIVACY_PAGE}/login` ||
      window.location.pathname === `${POLICY_PRIVACY_PAGE}/register`)
  ) {
    window.location.replace(`${ROOT_URL}/challenges`);
  }

  setTimeout(() => {
    if (
      sessionStorage.getItem(SESSION_STORAGE.LOGGED) ===
      SESSION_STORAGE.STATIC_VALUE.YES
    ) {
      if (!KeyCloakService.isLoggedIn()) {
        KeyCloakService.doLogin();
      }
    }
  }, 1500);
};

export default startManage;
