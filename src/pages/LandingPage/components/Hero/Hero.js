import React from 'react';
import theme from '../../../../utils/theme';
import Media from 'react-media';
import HeroStyle from './HeroStyle';
import {FlexColumn, FlexRow, Svg} from "../../../../utils/containers";
import {MediumNew} from "../../../../utils/fonts";
import brain from "../../../../assets/brain.svg";
import amuEval from "../../../../assets/logo_amueval.svg";
import wave from "../../../../assets/wave.png";
import arrowDown from "../../../../assets/arrow_down.svg";
import colors from "../../../../utils/colors";


const Hero = (props) => {
  const mobileRender = () => {
    return (
        <HeroStyle>
           <FlexColumn gap="64px" className="HeroStyle__wrapper">
                <img src={amuEval} width="250px" alt="amu eval" className="HeroStyle_logo"/>
                <MediumNew as="p" className="HeroStyle__text">
                    A data challenge platform for machine learning research, competition, cooperation and reproducibility.
                </MediumNew>
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
                <FlexColumn class="col1" alignmentX="start" gap="16px" className="HeroStyle__text">
                    <FlexRow gap="16px">
                        <img src={amuEval} width="431px" alt="ame eval" className="HeroStyle_logo"/>
                    </FlexRow>
                    <MediumNew as="p">
                        A data challenge platform for machine learning research, competition, cooperation and reproducibility.
                    </MediumNew>
                </FlexColumn>
                <FlexColumn>
                    <img className="col2" src={brain} alt="brain" width="354px"/>
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
                  <img src={amuEval} width="541px" alt="amu eval" className="HeroStyle_logo"/>
                </FlexRow>
                <MediumNew as="p">
                    A data challenge platform for machine learning research, competition, cooperation and reproducibility.
                </MediumNew>
              </FlexColumn>
                  <img src={brain} alt="brain" width="518px"/>
          </FlexRow>
          <img className="HeroStyle__wave" src={wave} alt="wave"/>
      </HeroStyle>
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

export default Hero;
