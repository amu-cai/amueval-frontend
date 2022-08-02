import React from 'react';
import {FlexColumn} from '../utils/containers';
import AuthHeader from '../components/elements/AuthHeader';

const Register = () => {
    return (
        <FlexColumn width='100%' height='100vh'>
            <AuthHeader register={true}/>
        </FlexColumn>
    );
};

export default Register;