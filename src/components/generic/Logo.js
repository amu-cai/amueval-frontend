import React from 'react';
import { H1 } from '../../utils/fonts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import amuEval from '../../assets/amu_eval.png';

const LogoStyle = styled(H1)`
  img {
    width: 150px;
  }
`;

const Logo = (props) => {
  return (
    <LogoStyle
      as={props.navOptions ? Link : 'span'}
      cursor="pointer"
      to="/"
    >
      <img src={amuEval} alt="amu eval"/>
    </LogoStyle>
  );
};

export default Logo;
