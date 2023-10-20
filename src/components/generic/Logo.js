import React from 'react';
import theme from '../../utils/theme';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { FlexColumn } from '../../utils/containers';

const Logo = (props) => {
  return (
    <FlexColumn
      as={props.navOptions ? Link : 'span'}
      cursor="pointer"
      to="/"
      color={theme.colors.green}
    >
      <img width="140px" height="32px" src={logo} alt="logo" />
    </FlexColumn>
  );
};

export default Logo;
