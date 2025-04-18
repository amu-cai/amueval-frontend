import React from 'react';
import Media from 'react-media';
import theme from '../../../../utils/theme';
import ProcessStyle from './ProcessStyle.js';
import processLg from "../../../../assets/process-lg.svg";
import processMd from "../../../../assets/process-md.svg";
import processSm from "../../../../assets/process-sm.svg";
import {H2New} from "../../../../utils/fonts";


const Process = () => {
    const mobileRender = () => {
        return (
            <ProcessStyle>
                <H2New as="h2">Looking for AI solution?</H2New>
                <img src={processSm} alt="process"/>
            </ProcessStyle>
        );
    };

    const tabletRender = () => {
        return (
            <ProcessStyle>
                <H2New as="h2">Looking for AI solution?</H2New>
                <img src={processMd} alt="process"/>
            </ProcessStyle>
        );
    };

      const desktopRender = () => {
        return (
            <ProcessStyle>
                <H2New as="h2">Looking for AI solution?</H2New>
                <img src={processLg} alt="process"/>
            </ProcessStyle>
        );
      };

  return (
    <>
      <Media query={theme.mobile}>{mobileRender()}</Media>
      <Media query={theme.tablet}>{tabletRender()}</Media>
      <Media query={theme.desktop2}>{desktopRender()}</Media>
    </>
  );
};

export default Process;
