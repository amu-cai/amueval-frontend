import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import PopUpMessageManager from './components/PopUpMessageManager';
import RoutingManager from './components/RoutingManager';
import NavigationManager from './components/NavigationManager';
import { BrowserRouter } from 'react-router-dom';
import startManage from './functions/startManage';
import startApp from './functions/startApp';

const App = () => {
  React.useMemo(() => {
    startManage();
  }, []);

  const renderApp = React.useCallback(() => {
    return (
      <ThemeProvider theme={theme}>
        <PopUpMessageManager>
          <BrowserRouter>
            <NavigationManager>
              <RoutingManager />
            </NavigationManager>
          </BrowserRouter>
        </PopUpMessageManager>
      </ThemeProvider>
    );
  }, []);

  return startApp(renderApp);
};

export default App;
