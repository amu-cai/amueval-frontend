import React from 'react';
import {FlexColumn} from '../../utils/containers';
import AuthHeader from '../../components/elements/AuthHeader';
import {Body, Medium} from '../../utils/fonts';
import {Link} from 'react-router-dom';
import AuthOption from '../../components/elements/AuthOption';
import githubIco from '../../assets/github_ico.svg';
import emailIco from '../../assets/email_ico.svg';
import googleIco from '../../assets/google_ico.svg';
import MainContainerStyle from './styles/MainContainerStyle';
import OptionsContainerStyle from './styles/OptionsContainerStyle';
import LinkStyle from './styles/LinkStyle';

const Login = () => {
    return (
        <MainContainerStyle as='main'>
            <AuthHeader register={false}/>
            <OptionsContainerStyle>
                <FlexColumn gap='24px'>
                    <AuthOption icon={googleIco}>
                        Sign in with&nbsp;
                        <Medium>
                            Google
                        </Medium>
                    </AuthOption>
                    <AuthOption icon={githubIco}>
                        Sign in with&nbsp;
                        <Medium>
                            Github
                        </Medium>
                    </AuthOption>
                    <AuthOption icon={emailIco}>
                        Sign in with&nbsp;
                        <Medium>
                            Email
                        </Medium>
                    </AuthOption>
                </FlexColumn>
                <Body>
                    No account?&nbsp;
                    <LinkStyle as={Link} to='/register'>
                        Create one.
                    </LinkStyle>
                </Body>
            </OptionsContainerStyle>
        </MainContainerStyle>
    );
};

export default Login;