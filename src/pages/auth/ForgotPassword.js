import React from 'react';
import theme from '../../utils/theme';
import {FlexColumn, FlexRow} from '../../utils/containers';
import Button from '../../components/generic/Button';
import MainContainerStyle from './styles/MainContainerStyle';
import {Link} from 'react-router-dom';
import {LOGIN_PAGE} from '../../utils/globals';
import {TextField} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import {EmailOutlined} from "@mui/icons-material";

const RegisterPage = () => {
        const [email, setEmail] = React.useState('');
        const [emailError, setEmailError] = React.useState(false);
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        const handleEmailChange = (event) => {
                setEmail(event.target.value);
        };

        const validateForgotPassword = () => {
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

                const isEmailValid = validateEmail();

                return isEmailValid;
        };

        const forgotPasswordSubmit = async () => {
                return validateForgotPassword();
        };

        return (
            <MainContainerStyle register={true}>
                    <FlexRow className="wrapper forgotPasswordBg">
                            <FlexColumn className="sideSection">
                                    <h1>Hello, Friends!</h1>
                                    <p>Enter your personal details
                                        and start journey with us
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
                            <FlexColumn height="100%" className="mainSection forgotPassword" alignmentX="center" alignmentY="start">
                                    <h1>Forgot your password?</h1>
                                    <p className="description">Enter the email address you used to create your account to retrieve the password.</p>
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
                                    <Button
                                        className="registerButton"
                                        as="button"
                                        width="140px"
                                        height="40px"
                                        color={theme.colors.black700}
                                        backgroundColor="transparent"
                                        handler={() => forgotPasswordSubmit()}
                                    >
                                        Send
                                    </Button>
                            </FlexColumn>
                    </FlexRow>
            </MainContainerStyle>
        );
};

export default RegisterPage;
