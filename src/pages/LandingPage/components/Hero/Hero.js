import { default as React } from "react";
import Media from "react-media";
import arrowDown from "../../../../assets/arrow_down.svg";
import polevalLogo from "../../../../assets/poleval_logo.png";
import wave from "../../../../assets/wave.png";
import colors from "../../../../utils/colors";
import { FlexColumn, FlexRow, Svg } from "../../../../utils/containers";
import { MediumNew } from "../../../../utils/fonts";
import theme from "../../../../utils/theme";
import HeroStyle from "./HeroStyle";

const Hero = (props) => {
  const mobileRender = () => {
    return (
      <HeroStyle>
        <FlexColumn gap="20px" className="HeroStyle__wrapper">
          <MediumNew
            as="p"
            className="HeroStyle__text"
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <span>
              {" "}
              <a href="https://poleval.pl/">
                PolEval
              </a> is a SemEval-inspired evaluation campaign for natural language processing tools for Polish.
            </span>
            <span>
              Submitted tools compete against one another within certain tasks selected by organizers, using available data and are evaluated according to pre-established procedures.
            </span>
          </MediumNew>
        </FlexColumn>
        <FlexColumn className="HeroStyle__see_more_btn">
          <p className="HeroStyle__see_more">See more</p>
          <Svg
            width="16px"
            height="16px"
            src={arrowDown}
            backgroundColor={colors.green700}
            className="HeroStyle__down_arrow"
          />
        </FlexColumn>
      </HeroStyle>
    );
  };

  const tabletRender = () => {
    return (
      <HeroStyle>
        <FlexRow alignmentY="center" gap="120px" className="HeroStyle__wrapper">
          <FlexColumn
            class="col1"
            alignmentX="start"
            gap="16px"
            className="HeroStyle__text"
          >
            <MediumNew
              as="p"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <span>
              {" "}
              <a href="https://poleval.pl/">
                PolEval
              </a> is a SemEval-inspired evaluation campaign for natural language processing tools for Polish.
            </span>
            <span>
              Submitted tools compete against one another within certain tasks selected by organizers, using available data and are evaluated according to pre-established procedures.
            </span>
            </MediumNew>
          </FlexColumn>
          <FlexColumn>
            <img className="col2" src={polevalLogo} alt="PolEval Logo" width="354px" />
          </FlexColumn>
        </FlexRow>
        <img className="HeroStyle__wave" src={wave} alt="wave" />
      </HeroStyle>
    );
  };

  const desktopRender = () => {
    return (
      <HeroStyle>
        <FlexRow alignmentY="center" gap="100px" className="HeroStyle__wrapper">
          <FlexColumn alignmentX="start" gap="16px">
            <MediumNew
              as="p"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <span>
              {" "}
              <a href="https://poleval.pl/">
                PolEval
              </a> is a SemEval-inspired evaluation campaign for natural language processing tools for Polish.
            </span>
            <span>
              Submitted tools compete against one another within certain tasks selected by organizers, using available data and are evaluated according to pre-established procedures.
            </span>
            </MediumNew>
          </FlexColumn>
          <img
            className="HeroStyle__brain"
            src={polevalLogo}
            alt="PolEval Logo"
            width="518px"
          />
        </FlexRow>
        <img className="HeroStyle__wave" src={wave} alt="wave" />
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
