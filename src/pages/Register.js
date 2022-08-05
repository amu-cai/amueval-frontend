import React from 'react';
import {FlexColumn} from '../utils/containers';
import AuthHeader from '../components/elements/AuthHeader';
import {Body, Medium} from '../utils/fonts';
import {Link} from 'react-router-dom';
import theme from '../utils/theme';
import styled from 'styled-components';
import AuthOption from '../components/elements/AuthOption';
import githubIco from '../assets/github_ico.svg';
import emailIco from '../assets/email_ico.svg';
import googleIco from '../assets/google_ico.svg';

const MainContainerStyle = styled(FlexColumn)`
  width: 100%;
  height: calc(100vh - 48px);

  @media (min-width: ${({theme}) => theme.overMobile}) {
    height: calc(100vh - 72px);
  }
`;

const OptionsContainerStyle = styled(FlexColumn)`
  width: 260px;
  border: 1px solid ${({theme}) => theme.colors.dark03};
  gap: 32px;
  padding: 32px;
  box-shadow: ${({theme}) => theme.shadow};
`;

const Register = () => {
    return (
        <MainContainerStyle as='main'>
            <AuthHeader register={true}/>
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
                    Have an account?&nbsp;
                    <Medium as={Link} color={theme.colors.green} cursor='pointer'
                            display='inline-block' to='/login'>
                        Sign in.
                    </Medium>
                </Body>
            </OptionsContainerStyle>
        </MainContainerStyle>
    );
};

export default Register;