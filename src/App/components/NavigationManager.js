import React from 'react';
import NavBar from '../../components/navigation/NavBar/NavBar';
import LoggedBar from '../../components/navigation/LoggedBar/LoggedBar';
import { CHILDREN_WITH_PROPS, IS_MOBILE } from '../../utils/globals';

const NavigationManager = ({ children }) => {
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
        navOptions={navOptions}
      />
      {!IS_MOBILE() && (
        <LoggedBar
          visible={loggedBarVisible}
          loggedBarVisibleHandler={loggedBarVisibleHandler}
          loggedBarHoverTrue={() => setLoggedBarHover(true)}
          loggedBarHoverFalse={() => setLoggedBarHover(false)}
        />
      )}
      {CHILDREN_WITH_PROPS(children, { hideNavOptions, showNavOptions })}
    </>
  );
};

export default NavigationManager;
