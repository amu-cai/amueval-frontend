import React from 'react';
import AuthHeader from './AuthHeader';
import OptionsContainerStyle from './styles/OptionsContainerStyle';
import AuthInput from './AuthInput';
import theme from '../../utils/theme';
import { FlexColumn, FlexRow } from '../../utils/containers';
import Button from '../../components/generic/Button';
import MainContainerStyle from './styles/MainContainerStyle';
import { Body, Medium } from '../../utils/fonts';
import LinkStyle from './styles/LinkStyle';
import { Link } from 'react-router-dom';
import { LOGIN_PAGE } from '../../utils/globals';
import createUser from '../../api/createUser';
import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [registerResult, setRegisterResult] = React.useState(null);

  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordRepeat, setPasswordRepeat] = React.useState('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  React.useEffect(() => {
    if (registerResult) {
      if (registerResult?.detail) {
        dispatch(popUpMessageHandler({header: "Register error", message: `Error: ${registerResult.detail}`}));
      } else {
        dispatch(popUpMessageHandler({header: "Register success", message: `Success: ${registerResult.message}`}));
      }
    }
  }, [registerResult, dispatch]);

  const repeatPasswordError = password !== passwordRepeat;
  const emailFormatError = !validateEmail(email);
  const usernameError = username.length < 1;
  const validationErrors = [repeatPasswordError, emailFormatError];
  const passwordError = password.length < 10;

  return (
    <FlexRow width="100%" height="100vh">
      <MainContainerStyle as="main">
        <AuthHeader register={true} />
        <OptionsContainerStyle>
          <FlexColumn gap="4px">
            <AuthInput
              label="Email address"
              value={email}
              handler={(e) => setEmail(e.target.value)}
            />
            {emailFormatError && (
              <Medium fontSize="14px" width="100%" color={theme.colors.red}>
                Invalid email format
              </Medium>
            )}
          </FlexColumn>
          <FlexColumn gap="4px">
            <AuthInput
              label="Username"
              value={username}
              handler={(e) => setUsername(e.target.value)}
            />
            {usernameError && (
              <Medium fontSize="14px" width="100%" color={theme.colors.red}>
                Username is required
              </Medium>
            )}
          </FlexColumn>
          <FlexColumn gap="4px">
            <AuthInput
              label="Type password"
              value={password}
              handler={(e) => setPassword(e.target.value)}
              type="password"
            />
            {passwordError && (
              <Medium fontSize="14px" width="100%" color={theme.colors.red}>
                Password must have at least 10 characters
              </Medium>
            )}
          </FlexColumn>
          <FlexColumn gap="4px">
            <AuthInput
              label="Repeat password"
              value={passwordRepeat}
              handler={(e) => setPasswordRepeat(e.target.value)}
              type="password"
            />
            {repeatPasswordError && (
              <Medium fontSize="14px" width="100%" color={theme.colors.red}>
                Passwords are different
              </Medium>
            )}
          </FlexColumn>
          <Button
            disabled={validationErrors.includes(true)}
            handler={async () => {
              await createUser(
                {
                  username: username,
                  password: password,
                  email: email,
                },
                setRegisterResult
              );
            }}
            width="112px"
            height="36px"
          >
            Register
          </Button>
        </OptionsContainerStyle>
        <Body margin="32px 0 0 0">
          Already have account?&nbsp;-&nbsp;
          <LinkStyle as={Link} to={LOGIN_PAGE} color={theme.colors.dark}>
            Sign in
          </LinkStyle>
        </Body>
      </MainContainerStyle>
    </FlexRow>
  );
};

export default RegisterPage;
