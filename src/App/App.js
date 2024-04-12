import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import PopUpMessageManager from './components/PopUpMessageManager';
import RoutingManager from './components/RoutingManager';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/navigation/NavBar';
import LoggedBar from '../components/navigation/LoggedBar';
import { IS_MOBILE } from '../utils/globals';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PopUpMessageManager>
          <NavBar />
          {!IS_MOBILE() && <LoggedBar />}
          <RoutingManager />
        </PopUpMessageManager>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
