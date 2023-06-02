import React from 'react';
import NavBar from '../../components/navigation/NavBar/NavBar';
import LoggedBar from '../../components/navigation/LoggedBar';
import KeyCloakService from '../../services/KeyCloakService';
import { CHILDREN_WITH_PROPS, IS_MOBILE } from '../../utils/globals';

const NavigationManager = (props) => {
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

  return (
    <>
      <NavBar
        loggedBarVisibleHandler={loggedBarVisibleHandler}
        popUpMessageHandler={props.popUpMessageHandler}
        navOptions={navOptions}
      />
      {!IS_MOBILE() && (
        <LoggedBar
          visible={loggedBarVisible}
          loggedBarVisibleHandler={loggedBarVisibleHandler}
          loggedBarHoverTrue={() => setLoggedBarHover(true)}
          loggedBarHoverFalse={() => setLoggedBarHover(false)}
          username={KeyCloakService.getUsername()}
        />
      )}
      {CHILDREN_WITH_PROPS(props.children, { hideNavOptions, showNavOptions })}
    </>
  );
};

export default NavigationManager;
