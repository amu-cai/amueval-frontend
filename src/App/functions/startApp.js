import Loading from '../../components/generic/Loading';
import { FlexColumn } from '../../utils/containers';
import SESSION_STORAGE from '../../utils/sessionStorage';
import KeyCloakService from '../../services/KeyCloakService';
import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';

const startApp = (renderApp) => {
  if (
    sessionStorage.getItem(SESSION_STORAGE.LOGGED) ===
    SESSION_STORAGE.STATIC_VALUE.YES
  ) {
    if (KeyCloakService.isLoggedIn()) {
      return renderApp();
    } else {
      return (
        <ThemeProvider theme={theme}>
          <FlexColumn width="100vw" height="100vh">
            <Loading />
          </FlexColumn>
        </ThemeProvider>
      );
    }
  } else {
    return renderApp();
  }
};

export default startApp;
