import React from 'react';
import AuthHeader from './AuthHeader';
import AuthInput from './AuthInput';
import OptionsContainerStyle from './styles/OptionsContainerStyle';
import MainContainerStyle from './styles/MainContainerStyle';
import Button from '../../components/generic/Button';
import { FlexRow } from '../../utils/containers';
import LinkStyle from './styles/LinkStyle';
import { Link } from 'react-router-dom';
import { Body } from '../../utils/fonts';
import theme from '../../utils/theme';
import { REGISTER_PAGE } from '../../utils/globals';
import login from '../../api/login';
import auth from '../../api/auth';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authSlice';
import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [loginResult, setLoginResult] = React.useState(null);
  const [authResult, setAuthResult] = React.useState(null);

  React.useEffect(() => {
    if (loginResult) {
      if (loginResult?.detail) {
        dispatch(popUpMessageHandler({header: "Log in error", message: `Error: ${loginResult.detail}`, borderColor: theme.colors.red}));
      } else {
        auth(loginResult.access_token, setAuthResult);
      }
    }
  }, [loginResult, dispatch]);

  React.useEffect(() => {
    const auth = authResult?.User;
    if (auth?.username && loginResult?.access_token) {
      dispatch(logIn({ user: auth.username, token: loginResult.access_token }));
      dispatch(popUpMessageHandler({header: "Log in success", message: `Success: log in as ${auth.username}`, borderColor: theme.colors.green}));
    }
  }, [authResult, dispatch, loginResult?.access_token]);

  return (
    <FlexRow width="100%" height="100vh">
      <MainContainerStyle as="main">
        <AuthHeader register={false} />
        <OptionsContainerStyle>
          <AuthInput
            label="Username"
            handler={(e) => setUsername(e.target.value)}
            value={username}
          />
          <AuthInput
            label="Password"
            type="password"
            handler={(e) => setPassword(e.target.value)}
            value={password}
          />
          <FlexRow width="100%" alignmentX="flex-end">
            <Button
              handler={async () => {
                await login(
                  { username: username, password: password },
                  setLoginResult
                );
              }}
              width="80px"
              height="36px"
            >
              Sign in
            </Button>
          </FlexRow>
        </OptionsContainerStyle>
        <Body margin="32px 0 0 0">
          Have not account yet?&nbsp;-&nbsp;
          <LinkStyle as={Link} to={REGISTER_PAGE} color={theme.colors.dark}>
            Register
          </LinkStyle>
        </Body>
      </MainContainerStyle>
    </FlexRow>
  );
};

export default LoginPage;
