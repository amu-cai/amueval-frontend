import React from 'react';
import AuthHeader from '../../components/auth/AuthHeader';
import OptionsContainerStyle from './styles/OptionsContainerStyle';
import AuthInput from '../../components/auth/AuthInput';
import Media from 'react-media';
import theme from '../../utils/theme';
import {FlexRow} from '../../utils/containers';
import Button from '../../components/generic/Button';
import MainContainerStyle from './styles/MainContainerStyle';

const RegisterWithEmail = () => {
    return (
        <MainContainerStyle as='main'>
            <AuthHeader register={true}/>
            <OptionsContainerStyle>
                <AuthInput label='Email address'/>
                <AuthInput label='Username'/>
                <AuthInput label='Type password'/>
                <AuthInput label='Repeat password'/>
                <Media query={theme.mobile}>
                    <FlexRow width='100%' alignmentX='flex-end'>
                        <Button>
                            Register
                        </Button>
                    </FlexRow>
                </Media>
                <Media query={theme.desktop}>
                    <Button width='112px' height='36px'>
                        Register
                    </Button>
                </Media>
            </OptionsContainerStyle>
        </MainContainerStyle>
    );
};

export default RegisterWithEmail;