import React from 'react';
import AuthHeader from '../components/elements/AuthHeader';
import {FlexColumn} from '../utils/containers';

const Login = () => {
    return (
        <FlexColumn width='100%' height='100vh'>
            <AuthHeader register={false}/>
        </FlexColumn>
    );
};

export default Login;