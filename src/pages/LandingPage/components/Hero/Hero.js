import React from 'react';
import theme from '../../../../utils/theme';
import Media from 'react-media';
import HeroStyle from './HeroStyle';
import {FlexColumn, FlexRow, Svg} from "../../../../utils/containers";
import {H1, Medium} from "../../../../utils/fonts";
import brain from "../../../../assets/brain.png";
import amuEval from "../../../../assets/amu_eval.png";
import wave from "../../../../assets/wave.png";
import arrowDown from "../../../../assets/arrow_down.svg";
import colors from "../../../../utils/colors";


const Hero = (props) => {
  const mobileRender = () => {
    return (
        <HeroStyle>
           <FlexColumn gap="64px" className="HeroStyle__wrapper">
                <img src={amuEval} width="250px" alt="amu eval"/>
                <Medium as="p" className="HeroStyle__text">
                    A data challenge platform for machine learning research, competition, cooperation and reproducibility.
                </Medium>
                <img src={brain} alt="brain" width="282px"/>
            </FlexColumn>
            <FlexColumn className="HeroStyle__see_more_btn">
                <p className="HeroStyle__see_more">See more</p>
                <Svg width="16px" height="16px" src={arrowDown} backgroundColor={colors.green700} className="HeroStyle__down_arrow" />
            </FlexColumn>
        </HeroStyle>
    );
  };

  const tabletRender = () => {
    return (
        <HeroStyle>
            <FlexRow alignmentY="start" gap="120px" className="HeroStyle__wrapper">
                <FlexColumn alignmentX="start" gap="16px" className="HeroStyle__text">
                    <FlexRow gap="16px">
                        <H1 as="h1">Welcome to</H1>
                        <img src={amuEval} width="200px" alt="ame eval"/>
                    </FlexRow>
                    <Medium as="p">
                        A data challenge platform for machine learning research, competition, cooperation and reproducibility.
                    </Medium>
                </FlexColumn>
                <FlexColumn>
                    <img src={brain} alt="brain" width="354px"/>
                </FlexColumn>
            </FlexRow>
            <img className="HeroStyle__wave" src={wave} alt="wave"/>
        </HeroStyle>
    );
  };

  const desktopRender = () => {
    return (
      <HeroStyle>
          <FlexRow alignmentY="start" gap="180px" className="HeroStyle__wrapper">
              <FlexColumn alignmentX="start" gap="16px">
                <FlexRow gap="16px">
                  <H1 as="h1">Welcome to</H1>
                  <img src={amuEval} width="250px" alt="ame eval"/>
                </FlexRow>
                <Medium as="p">
                    A data challenge platform for machine learning research, competition, cooperation and reproducibility.
                </Medium>
              </FlexColumn>
              <FlexColumn>
                  <img src={brain} alt="brain" width="518px"/>
              </FlexColumn>
          </FlexRow>
          <img className="HeroStyle__wave" src={wave} alt="wave"/>
      </HeroStyle>
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

export default Hero;
