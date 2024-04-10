import React from 'react';
import Media from 'react-media';
import theme from '../../../../utils/theme';
import ProcessStyle from './ProcessStyle.js';
import processLg from "../../../../assets/process-lg.png";
import processMd from "../../../../assets/process-md.png";
import processSm from "../../../../assets/process-sm.png";
import {H2} from "../../../../utils/fonts";


const Process = () => {
    const mobileRender = () => {
        return (
            <ProcessStyle>
                <H2 as="h2">Notification process</H2>
                <img src={processSm} alt="process"/>
            </ProcessStyle>
        );
    };

    const tabletRender = () => {
        return (
            <ProcessStyle>
                <H2 as="h2">Notification process</H2>
                <img src={processMd} alt="process"/>
            </ProcessStyle>
        );
    };

      const desktopRender = () => {
        return (
            <ProcessStyle>
                <H2 as="h2">Notification process</H2>
                <img src={processLg} alt="process"/>
            </ProcessStyle>
        );
      };

  return (
    <>
      <Media query={theme.mobile}>{mobileRender()}</Media>
      <Media query={theme.tablet}>{tabletRender()}</Media>
      <Media query={theme.desktop}>{desktopRender()}</Media>
    </>
  );
};

export default Process;
