import React from 'react';
import AuthHeader from './AuthHeader';
import OptionsContainerStyle from './styles/OptionsContainerStyle';
import AuthInput from './AuthInput';
import Media from 'react-media';
import theme from '../../utils/theme';
import { FlexRow } from '../../utils/containers';
import Button from '../../components/generic/Button';
import MainContainerStyle from './styles/MainContainerStyle';
import { Body } from '../../utils/fonts';
import LinkStyle from './styles/LinkStyle';
import { Link } from 'react-router-dom';
import { LOGIN_PAGE } from '../../utils/globals';

const RegisterPage = () => {
  return (
    <FlexRow width="100%" height="100vh">
      <MainContainerStyle as="main">
        <AuthHeader register={true} />
        <OptionsContainerStyle>
          <AuthInput label="Email address" />
          <AuthInput label="Username" />
          <AuthInput label="Type password" />
          <AuthInput label="Repeat password" />
          <Media query={theme.mobile}>
            <FlexRow width="100%" alignmentX="flex-end">
              <Button>Register</Button>
            </FlexRow>
          </Media>
          <Media query={theme.desktop}>
            <Button width="112px" height="36px">
              Register
            </Button>
          </Media>
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
