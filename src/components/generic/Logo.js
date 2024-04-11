import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import amuEval from '../../assets/amu_eval.png';
import {FlexColumn} from "../../utils/containers";

const LogoStyle = styled(FlexColumn)`
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
