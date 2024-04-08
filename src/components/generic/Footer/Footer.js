import React from 'react';
import Media from "react-media";
import theme from "../../../utils/theme";
import {FlexColumn, FlexRow} from "../../../utils/containers";
import amuEval from "../../../assets/amu_eval.png";
import csiLogo from "../../../assets/logo-csi.png";
import {Body, H2, H3} from "../../../utils/fonts";
import FooterStyle from "./FooterStyle";

const Footer = () => {
  const mobileRender = () => {
    return (
        <FooterStyle>
            <FlexColumn as="section" alignmentY="start" className="FooterStyle__csi_logo">
                <H2 as="h2">Made by</H2>
                <img src={csiLogo} alt="csi" width="350px"/>
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
                    <Body as="p" fontSize="16px" underlineText={true}>Register</Body>
                    <Body as="p" fontSize="16px" underlineText={true}>Challenges</Body>
                    <Body as="p" fontSize="16px" underlineText={true}>Privacy policy</Body>
                </FlexColumn>
                <FlexColumn as="section" alignmentY="start" alignmentX="start">
                    <H3 as="h3" fontSize="18px">Contact</H3>
                    <Body as="p" fontSize="16px" underlineText={true}>csi@amu.edu.pl</Body>
                    <Body as="p" fontSize="16px" underlineText={true}>618 295 308</Body>
                </FlexColumn>
                <FlexColumn as="section" alignmentY="start" className="FooterStyle__csi_logo">
                    <H2 as="h2">Made by</H2>
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
                    <Body as="p" fontSize="16px" underlineText={true}>Register</Body>
                    <Body as="p" fontSize="16px" underlineText={true}>Challenges</Body>
                    <Body as="p" fontSize="16px" underlineText={true}>Privacy policy</Body>
                </FlexColumn>
                <FlexColumn as="section" alignmentY="start" alignmentX="start">
                    <H3 as="h3" fontSize="18px">Contact</H3>
                    <Body as="p" fontSize="16px" underlineText={true}>csi@amu.edu.pl</Body>
                    <Body as="p" fontSize="16px" underlineText={true}>618 295 308</Body>
                </FlexColumn>
                <FlexColumn as="section" alignmentY="start" className="FooterStyle__csi_logo">
                    <H2 as="h2">Made by</H2>
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
        <Media query={theme.desktop}>{desktopRender()}</Media>
      </>
  );
};



export default Footer;
