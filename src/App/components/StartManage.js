import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ROOT_PAGE,
  POLICY_PRIVACY_LOGIN_PAGE,
  POLICY_PRIVACY_REGISTER_PAGE,
} from '../../utils/globals';
import SESSION_STORAGE from '../../utils/sessionStorage';
import LOCAL_STORAGE from '../../utils/localStorage';
import EntireScreenLoading from '../../components/generic/EntireScreenLoading/EntrieScreenLoading';

const StartManage = () => {
  const timeoutValue = 1500;
  const navigate = useNavigate();
  const [entireScreenLoading, setEntireScreenLoading] = React.useState(true);

  const redirectToRootPage = React.useCallback(() => {
    const pageName = window.location.pathname.split(ROOT_PAGE).at(-1);
    if (pageName) {
      navigate(ROOT_PAGE);
    }
  }, [navigate]);

  const redirectAfterLogout = React.useCallback(() => {
    if (
      sessionStorage.getItem(SESSION_STORAGE.LOGGED) ===
      SESSION_STORAGE.STATIC_VALUE.NO
    ) {
      redirectToRootPage();
      sessionStorage.clear();
    }
  }, [redirectToRootPage]);

  const redirectAfterAcceptPolicyPrivacy = React.useCallback(() => {
    if (
      localStorage.getItem(LOCAL_STORAGE.PRIVACY_POLICY_ACCEPT) ===
        LOCAL_STORAGE.STATIC_VALUE.YES &&
      (window.location.pathname === POLICY_PRIVACY_LOGIN_PAGE ||
        window.location.pathname === POLICY_PRIVACY_REGISTER_PAGE)
    ) {
      redirectToRootPage();
    }
  }, [redirectToRootPage]);

  React.useEffect(() => {
    redirectAfterLogout();
    setTimeout(() => {
      redirectAfterAcceptPolicyPrivacy();
      setEntireScreenLoading(false);
    }, timeoutValue);
  }, [redirectAfterLogout, redirectAfterAcceptPolicyPrivacy]);

  if (entireScreenLoading) {
    return <EntireScreenLoading />;
  }
  return <></>;
};

export default StartManage;
