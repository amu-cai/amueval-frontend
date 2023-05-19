import React from 'react';
import { FlexColumn } from '../../utils/containers';
import Motivation from '../../components/content_sections/Motivation';
import Csi from '../../components/content_sections/Csi';
import Commercial from '../../components/content_sections/Commercial';
import Hero from '../../components/content_sections/Hero';
import Partnerships from '../../components/content_sections/Partnerships';
import LandingPageStyle from './LandingPageStyle';

const LandingPage = (props) => {
  return (
    <LandingPageStyle as="main">
      <FlexColumn className="LandingPageStyle__main-container">
        <Hero popUpMessageHandler={props.popUpMessageHandler} />
        <Motivation />
        <Csi />
        <Commercial />
        <Partnerships />
      </FlexColumn>
    </LandingPageStyle>
  );
};

export default LandingPage;
