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

const LoginPage = () => {
  return (
    <FlexRow width="100%" height="100vh">
      <MainContainerStyle as="main">
        <AuthHeader register={false} />
        <OptionsContainerStyle>
          <AuthInput label="Username" />
          <AuthInput label="Password" />
          <FlexRow width="100%" alignmentX="flex-end">
            <Button width="80px" height="36px">
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
