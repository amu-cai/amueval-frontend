import React from 'react';
import Media from "react-media";
import theme from "../../../utils/theme";
import {FlexColumn, FlexRow} from "../../../utils/containers";
import amuEval from "../../../assets/amu_eval.png";
import csiLogo from "../../../assets/logo-csi.png";
import {BodyNew, H2New, H3} from "../../../utils/fonts";
import FooterStyle from "./FooterStyle";

const Footer = () => {
  const mobileRender = () => {
    return (
        <FooterStyle>
            <FlexColumn as="section" alignmentY="start" className="FooterStyle__csi_logo">
                <H2New as="h2">Made by</H2New>
                <img src={csiLogo} alt="csi" width="200px"/>
            </FlexColumn>
        </FooterStyle>
    );
  };

  const tabletRender = () => {
    return (
        <FooterStyle>
            <FlexRow className="FooterStyle__wrapper">
                <FlexColumn as="section" alignmentY="start">
                    <img src={amuEval} alt="amu eval" width="250px"/>
                </FlexColumn>
                <FlexColumn as="section" alignmentY="start" alignmentX="start">
                    <H3 as="h3" fontSize="18px">Shortcuts</H3>
                    <BodyNew as="p" fontSize="16px" underlineText={true}>Register</BodyNew>
                    <BodyNew as="p" fontSize="16px" underlineText={true}>Challenges</BodyNew>
                    <BodyNew as="p" fontSize="16px" underlineText={true}>Privacy policy</BodyNew>
                </FlexColumn>
                <FlexColumn as="section" alignmentY="start" alignmentX="start">
                    <H3 as="h3" fontSize="18px">Contact</H3>
                    <BodyNew as="p" fontSize="16px" underlineText={true}>csi@amu.edu.pl</BodyNew>
                    <BodyNew as="p" fontSize="16px" underlineText={true}>618 295 308</BodyNew>
                </FlexColumn>
                <FlexColumn as="section" alignmentY="start" className="FooterStyle__csi_logo">
                    <H2New as="h2">Made by</H2New>
                    <img src={csiLogo} alt="csi" width="257px"/>
                </FlexColumn>
            </FlexRow>
        </FooterStyle>
    );
  };

  const desktopRender = () => {
    return (
        <FooterStyle>
            <FlexRow className="FooterStyle__wrapper">
                <FlexColumn as="section" alignmentY="start">
                    <img src={amuEval} alt="amu eval" width="316px"/>
                </FlexColumn>
                <FlexColumn as="section" alignmentY="start" alignmentX="start">
                    <H3 as="h3" fontSize="18px">Shortcuts</H3>
                    <a href="/register">Register</a>
                    <a href="/challenges">Challenges</a>
                    <a href="/policy-privacy">Privacy policy</a>
                </FlexColumn>
                <FlexColumn as="section" alignmentY="start" alignmentX="start">
                    <H3 as="h3" fontSize="18px">Contact</H3>
                    <a href="mailto:csi@amu.edu.pl">csi@amu.edu.pl</a>
                    <a href="tel:618 295 308">618 295 308</a>
                </FlexColumn>
                <FlexColumn as="section" alignmentY="start" className="FooterStyle__csi_logo">
                    <H2New as="h2">Made by</H2New>
                    <img src={csiLogo} alt="csi" width="350px"/>
                </FlexColumn>
            </FlexRow>
        </FooterStyle>
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



export default Footer;
