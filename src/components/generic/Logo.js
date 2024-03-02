import React from 'react';
import { H1 } from '../../utils/fonts';
import theme from '../../utils/theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoStyle = styled(H1)`
  font-size: 24px;

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    font-size: 32px;
    line-height: 32px;
  }
`;

const Logo = (props) => {
  return (
    <LogoStyle
      as={props.navOptions ? Link : 'span'}
      cursor="pointer"
      to="/"
      color={theme.colors.green}
    >
      AMU-Eval
    </LogoStyle>
  );
};

export default Logo;
