import React from 'react';
import NavBar from '../../components/navigation/NavBar/NavBar';
import LoggedBar from '../../components/navigation/LoggedBar';
import KeyCloakService from '../../services/KeyCloakService';
import { CHILDREN_WITH_PROPS, IS_MOBILE } from '../../utils/globals';
import LandingPageNavBar from '../../components/navigation/LandingPageNavBar';

const NavigationManager = ({ children, popUpMessageHandler }) => {
  const [loggedBarVisible, setLoggedBarVisible] = React.useState('100vw');
  const [loggedBarHover, setLoggedBarHover] = React.useState(false);
  const [navOptions, setNavOptions] = React.useState(true);

  const loggedBarVisibleHandler = React.useCallback(() => {
    if (loggedBarVisible === '0' && !loggedBarHover)
      setLoggedBarVisible('100vw');
    else setLoggedBarVisible('0');
  }, [loggedBarHover, loggedBarVisible]);

  const hideNavOptions = React.useCallback(() => {
    setNavOptions(false);
  }, []);

  const showNavOptions = React.useCallback(() => {
    setNavOptions(true);
  }, []);

  console.log(window.location.href);
  console.log(window.location.pathname);

  const navBarRender = () => {
    if (!KeyCloakService.isLoggedIn() && window.location.pathname === '/') {
      return <LandingPageNavBar />;
    }
    return (
      <NavBar
        loggedBarVisibleHandler={loggedBarVisibleHandler}
        popUpMessageHandler={popUpMessageHandler}
        navOptions={navOptions}
      />
    );
  };

  return (
    <>
      {navBarRender()}
      {!IS_MOBILE() && (
        <LoggedBar
          visible={loggedBarVisible}
          loggedBarVisibleHandler={loggedBarVisibleHandler}
          loggedBarHoverTrue={() => setLoggedBarHover(true)}
          loggedBarHoverFalse={() => setLoggedBarHover(false)}
          username={KeyCloakService.getUsername()}
        />
      )}
      {CHILDREN_WITH_PROPS(children, {
        hideNavOptions,
        showNavOptions,
        popUpMessageHandler,
      })}
    </>
  );
};

export default NavigationManager;
