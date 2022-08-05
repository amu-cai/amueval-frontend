import React from 'react';
import {FlexRow, Svg} from '../../utils/containers';
import theme from '../../utils/theme';
import PropsTypes from 'prop-types';
import {Body} from '../../utils/fonts';
import styled from 'styled-components';

const AuthOptionStyle = styled(FlexRow)`
  gap: 16px;
  padding: 10px 12px;
  min-width: 180px;
  justify-content: flex-start;
  border: 1px solid ${({theme}) => theme.colors.dark03};
  box-shadow: ${({theme}) => theme.shadow};
  cursor: pointer;

  * {
    cursor: pointer;
  }
`;

const AuthOption = (props) => {
    return (
        <AuthOptionStyle as='button'>
            <Svg width='20px' height='20px' src={props.icon} backgroundColor={theme.colors.dark}/>
            <Body>
                {props.children}
            </Body>
        </AuthOptionStyle>
    );
};

AuthOption.propTypes = {
    children: PropsTypes.node,
    icon: PropsTypes.string,
};

AuthOption.defaultProps = {
    children: '',
    icon: '',
};

export default AuthOption;