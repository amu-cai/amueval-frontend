import React from 'react';
import {FlexColumn, FlexRow} from '../../../../utils/containers';
import { BodyNew, H2New } from '../../../../utils/fonts';
import Media from 'react-media';
import theme from '../../../../utils/theme';
import arrows from "../../../../assets/arrows.png";
import arrowsSm from "../../../../assets/arrows-sm.png";
import CommercialStyle from "./CommercialStyle";

const Commercial = () => {
  const mobileRender = () => {
    return (
        <CommercialStyle>
          <FlexColumn gap="40px" alignmentX="end">
            <FlexColumn as="section" className="CommercialStyle__wrapper">
              <H2New as="h2">
                For Challenge Organizers
              </H2New>
              <BodyNew as="p">
                &#8226; Find the best AI solution to your business need
              </BodyNew>
              <BodyNew as="p">
                &#8226; Scout AI talents for your organization
              </BodyNew>
              <BodyNew as="p">
                &#8226; Promote your brand in AI community
              </BodyNew>
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
          <FlexRow gap="40px" alignmentY="start" className="CommercialStyle__wrapper">
            <FlexColumn as="section" alignmentX="start" className="CommercialStyle__text">
              <H2New textLeft={true} as="h2">
                For Challenge Organizers
              </H2New>
              <BodyNew as="p">
                &#8226; Find the best AI solution to your business need
              </BodyNew>
              <BodyNew as="p">
                &#8226; Scout AI talents for your organization
              </BodyNew>
              <BodyNew as="p">
                &#8226; Promote your brand in AI community
              </BodyNew>
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
          <FlexRow gap="128px" alignmentY="start" className="CommercialStyle__wrapper">
            <FlexColumn as="section" alignmentX="start" className="CommercialStyle__text">
              <H2New as="h2">
                For Challenge Organizers
              </H2New>
              <BodyNew as="p">
                &#8226; Find the best AI solution to your business need
              </BodyNew>
              <BodyNew as="p">
                &#8226; Scout AI talents for your organization
              </BodyNew>
              <BodyNew as="p">
                &#8226; Promote your brand in AI community
              </BodyNew>
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
      <Media query={theme.desktop2}>{desktopRender()}</Media>
    </>
  );
};

export default Commercial;
