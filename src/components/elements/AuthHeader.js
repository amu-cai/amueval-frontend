import React from 'react';
import {FlexRow} from '../../utils/containers';
import styled from 'styled-components';
import {H3} from '../../utils/fonts';
import {Link} from 'react-router-dom';
import PropsTypes from 'prop-types';

const AuthHeaderStyle = styled(FlexRow)`
  border-width: 1px 1px 0 1px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.dark05};
  width: 260px;
  height: 48px;
  justify-content: space-around;

  h1 {
    color: ${({theme}) => theme.colors.green};
  }
`;

const AuthHeader = (props) => {
    if (props.register) {
        return (
            <AuthHeaderStyle>
                <H3 as='h1' order='2'>
                    Register
                </H3>
                <Link to='/login'>
                    Sign in
                </Link>
            </AuthHeaderStyle>
        );
    } else {
        return (
            <AuthHeaderStyle>
                <H3 as='h1'>
                    Sign in
                </H3>
                <Link to='/register'>
                    Register
                </Link>
            </AuthHeaderStyle>
        );
    }
};

AuthHeader.propTypes = {
    register: PropsTypes.bool.isRequired,
};

export default AuthHeader;