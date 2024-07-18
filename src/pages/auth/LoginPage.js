import React from 'react';
import login from '../../api/login';
import auth from '../../api/auth';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import {FlexRow, FlexColumn} from "../../utils/containers";
import MainContainerStyle from "./styles/MainContainerStyle";
import Button from "../../components/generic/Button";
import theme from "../../utils/theme";
import {TextField} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import {PersonOutlined, LockOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {REGISTER_PAGE, CHALLENGES_PAGE} from "../../utils/globals";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [usernameError, setUsernameError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [loginResult, setLoginResult] = React.useState(null);
  const [authResult, setAuthResult] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const loginSubmit = async () => {
        const loginValidated = validateLogin();
        if (!loginValidated) {
            return;
        }
        await login(
            { username: username, password: password },
            setLoginResult
        );
    };

    const validateLogin = () => {
        const validateUsername = () => {
            if (!username) {
                setUsernameError('Username is required');
                return false;
            }
            setUsernameError(false);
            return true;
        };

        const validatePassword = () => {
            if (!password) {
                setPasswordError('Password is required');
                return false;
            }
            setPasswordError(false);
            return true;
        };

        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();

        return isUsernameValid && isPasswordValid;
    };

  React.useEffect(() => {
    if (loginResult) {
      if (loginResult?.detail) {
          setUsernameError(true);
          setPasswordError(loginResult.detail);
      }
      else {
        auth(loginResult.access_token, setAuthResult);
      }
    }
  }, [loginResult]);

  React.useEffect(() => {
    const auth = authResult?.User;
    if (auth?.username && loginResult?.access_token) {
      dispatch(
        logIn({
          user: auth.username,
          token: loginResult.access_token,
          reloadSession: false,
        })
      );
      navigate(CHALLENGES_PAGE);
    }
  }, [authResult, dispatch, loginResult?.access_token, navigate]);

  return (
      <MainContainerStyle>
        <FlexRow className="wrapper">
            <FlexColumn height="100%" className="mainSection" alignmentX="center" alignmentY="start">
                <h1>Sign in to AmuEval</h1>
                <FlexColumn width="100%" gap="20px">
                    <TextField
                        size="small"
                        placeholder="Username"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutlined />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiInputBase-root': {
                                backgroundColor: theme.colors.white,
                            },
                        }}
                        error={!!usernameError}
                        onChange={handleUsernameChange}
                        helperText={usernameError ? usernameError: ''}
                    />
                    <TextField
                        type={showPassword ? 'text' : 'password'}
                        size="small"
                        placeholder="Password"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlined />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end"
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </InputAdornment>
                            )
                        }}
                        sx={{
                            '& .MuiInputBase-root': {
                                backgroundColor: theme.colors.white,
                            },
                        }}
                        error={!!passwordError}
                        onChange={handlePasswordChange}
                        helperText={passwordError ? passwordError: ''}
                    />
                </FlexColumn>
                <p className="forgotPasswordLink">Forgot your password?</p>
                <Button
                    as="button"
                    width="140px"
                    height="40px"
                    color={theme.colors.black700}
                    backgroundColor="transparent"
                    handler={() => loginSubmit()}
                >
                    Sign in
                </Button>
            </FlexColumn>
            <FlexColumn className="sideSection">
                <h1>Hello, Friends!</h1>
                <p>Enter your personal details
                    and start journey with us
                </p>
                <FlexColumn as={Link} to={REGISTER_PAGE}>
                    <Button
                        width="140px"
                        height="40px"
                    >
                        Sign up
                    </Button>
                </FlexColumn>
            </FlexColumn>
        </FlexRow>
      </MainContainerStyle>
  );
};

export default LoginPage;
