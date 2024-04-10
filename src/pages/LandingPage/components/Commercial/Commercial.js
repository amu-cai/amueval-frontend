import React from 'react';
import {FlexColumn, FlexRow} from '../../../../utils/containers';
import { Body, H2 } from '../../../../utils/fonts';
import Media from 'react-media';
import theme from '../../../../utils/theme';
import arrows from "../../../../assets/arrows.png";
import arrowsSm from "../../../../assets/arrows-sm.png";
import CommercialStyle from "./CommercialStyle";

const Commercial = () => {
  const mobileRender = () => {
    return (
        <CommercialStyle>
          <FlexColumn gap="40px" alignmentX="end" class="test">
            <FlexColumn as="section">
              <H2 as="h2">
                Commercial challenges
              </H2>
              <Body as="p">
                The artificial intelligence center works with companies by
                accepting machine learning challenges from them that are available
                to solve on AMU-Eval. Each commercial challenge is properly scored
                which translates into an award for solving it according to the
                client's requirements.
              </Body>
              <Body as="p">
                Open challenges can allow you to find the right people to work
                with. Find a challenge for your team and take it on!
              </Body>
            </FlexColumn>
            <FlexRow>
              <img src={arrowsSm} alt="arrows"/>
            </FlexRow>
          </FlexColumn>
        </CommercialStyle>
    );
  };

  const tabletRender = () => {
    return (
        <CommercialStyle>
          <FlexRow gap="40px" alignmentY="start">
            <FlexColumn as="section" className="CommercialStyle__text">
              <H2 textLeft={true} as="h2">
                Commercial challenges
              </H2>
              <Body as="p">
                The artificial intelligence center works with companies by
                accepting machine learning challenges from them that are available
                to solve on AMU-Eval. Each commercial challenge is properly scored
                which translates into an award for solving it according to the
                client's requirements.
              </Body>
              <Body as="p">
                Open challenges can allow you to find the right people to work
                with. Find a challenge for your team and take it on!
              </Body>
            </FlexColumn>
            <FlexColumn>
              <img src={arrows} width="413px" alt="arrows"/>
            </FlexColumn>
          </FlexRow>
        </CommercialStyle>
    );
  };


  const desktopRender = () => {
    return (
        <CommercialStyle>
          <FlexRow gap="128px" alignmentY="start">
            <FlexColumn as="section">
              <H2 textLeft={true} as="h2">
                Commercial challenges
              </H2>
              <Body as="p">
                The artificial intelligence center works with companies by
                accepting machine learning challenges from them that are available
                to solve on AMU-Eval. Each commercial challenge is properly scored
                which translates into an award for solving it according to the
                client's requirements.
              </Body>
              <Body as="p">
                Open challenges can allow you to find the right people to work
                with. Find a challenge for your team and take it on!
              </Body>
            </FlexColumn>
            <FlexColumn>
              <img src={arrows} alt="arrows"/>
            </FlexColumn>
          </FlexRow>
        </CommercialStyle>
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

export default Commercial;
