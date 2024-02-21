import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import PopUpMessageManager from './components/PopUpMessageManager';
import RoutingManager from './components/RoutingManager';
import NavigationManager from './components/NavigationManager';
import { BrowserRouter } from 'react-router-dom';
import { RESET_TOKEN_TIME } from '../utils/globals';
import LOCAL_STORAGE from '../utils/localStorage';
import { useDispatch } from 'react-redux';
import { logIn, logOut } from '../redux/authSlice';
import auth from '../api/auth';

const App = () => {
  const dispatch = useDispatch();
  const [authResult, setAuthResult] = React.useState(null);

  React.useEffect(() => {
    const logInTime = localStorage.getItem(LOCAL_STORAGE.LOG_IN_TIME);
    if (logInTime) {
      const timeNow = Date.now();
      const sessionTime = timeNow - logInTime;
      if (sessionTime > RESET_TOKEN_TIME) {
        dispatch(logOut());
      }
    }
  }, [dispatch]);

  React.useEffect(() => {
    const authToken = localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN);
    if (authToken) {
      auth(authToken, setAuthResult);
    }
  }, [dispatch]);

  React.useEffect(() => {
    const auth = authResult?.User;
    const authToken = localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN);
    if (auth?.username && authToken) {
      dispatch(
        logIn({ user: auth.username, token: authToken, sessionReload: true })
      );
    }
  }, [authResult, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PopUpMessageManager>
          <NavigationManager>
            <RoutingManager />
          </NavigationManager>
        </PopUpMessageManager>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
