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

const Register = () => {
    return (
        <MainContainerStyle as='main'>
            <AuthHeader register={true}/>
            <OptionsContainerStyle>
                <FlexColumn gap='24px'>
                    <AuthOption icon={googleIco}>
                        Register with&nbsp;
                        <Medium>
                            Google
                        </Medium>
                    </AuthOption>
                    <AuthOption icon={githubIco}>
                        Register with&nbsp;
                        <Medium>
                            Github
                        </Medium>
                    </AuthOption>
                    <AuthOption to='/register-email' icon={emailIco}>
                        Register with&nbsp;
                        <Medium>
                            Email
                        </Medium>
                    </AuthOption>
                </FlexColumn>
                <Body>
                    Have an account?&nbsp;
                    <LinkStyle as={Link} to='/login'>
                        Sign in.
                    </LinkStyle>
                </Body>
            </OptionsContainerStyle>
        </MainContainerStyle>
    );
};

export default Register;