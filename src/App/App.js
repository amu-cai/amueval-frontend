import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import PopUpMessageManager from './components/PopUpMessageManager';
import RoutingManager from './components/RoutingManager';
import NavigationManager from './components/NavigationManager';
import { BrowserRouter } from 'react-router-dom';
import StartManage from './components/StartManage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PopUpMessageManager>
          <NavigationManager>
            <StartManage />
            <RoutingManager />
          </NavigationManager>
        </PopUpMessageManager>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
