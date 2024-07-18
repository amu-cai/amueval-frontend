import React from 'react';
import theme from '../../utils/theme';
import {FlexColumn, FlexRow} from '../../utils/containers';
import Button from '../../components/generic/Button';
import MainContainerStyle from './styles/MainContainerStyle';
import {Link} from 'react-router-dom';
import {LOGIN_PAGE} from '../../utils/globals';
import createUser from '../../api/createUser';
import {useDispatch} from 'react-redux';
import {TextField} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import {LockOutlined, PersonOutlined, VisibilityOff, Visibility, EmailOutlined} from "@mui/icons-material";
import {popUpMessageHandler} from '../../redux/popUpMessegeSlice';
import {useNavigate} from 'react-router-dom';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [usernameError, setUsernameError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [registerResult, setRegisterResult] = React.useState(null);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const validateRegister = () => {
        const validateUsername = () => {
            if (!username) {
                setUsernameError('Username is required');
                return false;
            }
            setUsernameError(false);
            return true;
        };

        const validateEmail = () => {
            if (!email) {
                setEmailError('Email is required');
                return false;
            } else if (!emailRegex.test(email)) {
                setEmailError('Invalid email format');
                return false;
            }
            setEmailError(false);
            return true;
        };

        const validatePassword = () => {
            if (!password) {
                setPasswordError('Password is required');
                return false;
            } else if (password.length < 10) {
                setPasswordError('Password must be at least 10 characters long');
                return false;
            }
            setPasswordError(false);
            return true;
        };

        const validateConfirmPassword = () => {
            if (!password) {
                setConfirmPasswordError('Confirm Password is required');
                return false;
            } else if (password !== confirmPassword) {
                setConfirmPasswordError('Passwords are not the same');
                return false;
            }
            setConfirmPassword(false);
            return true;
        };

        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isEmailValid = validateEmail();

        return isUsernameValid && isPasswordValid && isConfirmPasswordValid && isEmailValid;
    };

    const registerSubmit = async () => {
        const registerValidated = validateRegister();
        if (!registerValidated) {
            return;
        }
        await createUser(
            {
                username: username,
                password: password,
                email: email,
            },
            setRegisterResult
        );
    };

    React.useEffect(() => {
        if (registerResult) {
            if (registerResult?.detail) {
                dispatch(
                    popUpMessageHandler({
                        header: 'Register error',
                        message: `Error: ${registerResult.detail}`,
                        borderColor: theme.colors.red,
                    })
                );
            } else {
                dispatch(
                    popUpMessageHandler({
                        header: 'Register success',
                        message: `Success: ${registerResult.message}`,
                    })
                );
                navigate(LOGIN_PAGE);
            }
        }
    }, [registerResult, dispatch, navigate]);

    return (
        <MainContainerStyle register={true}>
            <FlexRow className="wrapper">
                <FlexColumn className="sideSection">
                    <h1>Welcome Back!</h1>
                    <p>Log in with your personal
                        info and enjoy using AmuEval
                    </p>
                    <FlexColumn as={Link} to={LOGIN_PAGE}>
                        <Button
                            width="140px"
                            height="40px"
                        >
                            Sign in
                        </Button>
                    </FlexColumn>
                </FlexColumn>
                <FlexColumn height="100%" className="mainSection" alignmentX="center" alignmentY="start">
                    <h1>Create Account</h1>
                    <FlexColumn width="100%" gap="20px">
                        <TextField
                            size="small"
                            placeholder="Email"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailOutlined/>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    backgroundColor: theme.colors.white,
                                },
                            }}
                            error={!!emailError}
                            onChange={handleEmailChange}
                            helperText={emailError ? emailError : ''}
                        />
                        <TextField
                            size="small"
                            placeholder="Username"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonOutlined/>
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
                            helperText={usernameError ? usernameError : ''}
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
                                        <LockOutlined/>
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end"
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
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
                            helperText={passwordError ? passwordError : ''}
                        />
                        <TextField
                            type={showConfirmPassword ? 'text' : 'password'}
                            size="small"
                            placeholder="Confirm Password"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlined/>
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end"
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowConfirmPassword}
                                                    edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff/> : <Visibility/>}
                                    </InputAdornment>
                                )
                            }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    backgroundColor: theme.colors.white,
                                },
                            }}
                            error={!!confirmPasswordError}
                            onChange={handleConfirmPasswordChange}
                            helperText={confirmPasswordError ? confirmPasswordError : ''}
                        />
                    </FlexColumn>
                    <Button
                        className="registerButton"
                        as="button"
                        width="140px"
                        height="40px"
                        color={theme.colors.black700}
                        backgroundColor="transparent"
                        handler={() => registerSubmit()}
                    >
                        Sign up
                    </Button>
                </FlexColumn>
            </FlexRow>
        </MainContainerStyle>
    );
};

export default RegisterPage;
