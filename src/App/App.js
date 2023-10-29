import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import PopUpMessageManager from './components/PopUpMessageManager';
import RoutingManager from './components/RoutingManager';
import NavigationManager from './components/NavigationManager';
import { BrowserRouter } from 'react-router-dom';
import startManage from './functions/startManage';

const App = () => {
  React.useMemo(() => {
    startManage();
  }, []);

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
