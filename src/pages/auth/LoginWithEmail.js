import React from 'react';
import AuthHeader from '../../components/elements/AuthHeader';
import OptionsContainerStyle from './styles/OptionsContainerStyle';
import MainContainerStyle from './styles/MainContainerStyle';
import AuthInput from '../../components/elements/AuthInput';
import Button from '../../components/elements/Button';
import {FlexRow} from '../../utils/containers';
import LinkStyle from './styles/LinkStyle';
import {Link} from 'react-router-dom';
import {Body} from '../../utils/fonts';
import theme from '../../utils/theme';
import Media from 'react-media';

const LoginWithEmail = () => {
    return (
        <MainContainerStyle as='main'>
            <AuthHeader register={false}/>
            <OptionsContainerStyle>
                <AuthInput label='Email / Username'/>
                <AuthInput label='Password'/>
                <Media query={theme.mobile}>
                    <FlexRow width='100%' alignmentX='flex-end'>
                        <Button>
                            Sign in
                        </Button>
                    </FlexRow>
                </Media>
                <Media query={theme.desktop}>
                    <Button width='112px' height='36px'>
                        Sign in
                    </Button>
                </Media>
            </OptionsContainerStyle>
            <Body margin='32px 0 0 0'>
                Forgot&nbsp;
                <LinkStyle as={Link} to='#' color={theme.colors.dark}>
                    Username
                </LinkStyle>&nbsp;/&nbsp;
                <LinkStyle as={Link} to='#' color={theme.colors.dark}>
                    Password
                </LinkStyle>?
            </Body>
        </MainContainerStyle>
    );
};

export default LoginWithEmail;