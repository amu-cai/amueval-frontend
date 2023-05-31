import React from 'react';
import { FlexColumn } from '../../utils/containers';
import Motivation from './components/Motivation/Motivation';
import Csi from './components/Csi/Csi';
import Commercial from './components/Commercial/Commercial';
import Hero from './components/Hero/Hero';
import Partnerships from './components/Partnerships/Partnerships';
import LandingPageStyle from './LandingPageStyle';
// import MadeByCsi from './components/MadeByCsi/MadeByCsi';

const LandingPage = (props) => {
  return (
    <LandingPageStyle as="main">
      <Hero popUpMessageHandler={props.popUpMessageHandler} />
      <FlexColumn className="LandingPageStyle__main-container">
        <Motivation />
        <Csi />
        <Commercial />
        <Partnerships />
      </FlexColumn>
    </LandingPageStyle>
  );
};

export default LandingPage;
