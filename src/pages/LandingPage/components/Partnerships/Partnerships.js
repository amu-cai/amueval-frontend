import React from 'react';
import PartnershipsStyle from './PartnershipsStyle';
import Media from "react-media";
import theme from "../../../../utils/theme";
import logoCsi from "../../../../assets/logo-csi.png";
import logoZil from "../../../../assets/zil.png";
import logoSages from "../../../../assets/sages.png";
import allegro from "../../../../assets/allegro.png";
import samsung from "../../../../assets/samsung.png";
import domdata from "../../../../assets/domdata.png";
import carArena from "../../../../assets/car-arena.png";
import pons from "../../../../assets/pons.png";
import {FlexRow} from "../../../../utils/containers";
import {FlexColumn} from "../../../../utils/containers";
import {H2New} from "../../../../utils/fonts";



const Partnerships = () => {
    const mobileRender = () => {
        return (
            <PartnershipsStyle>
                <FlexColumn>
                    <H2New as="h2">Our partnerships</H2New>
                </FlexColumn>
                <FlexColumn gap="50px">
                    <a href="https://zil.ipipan.waw.pl/"><img src={logoZil} alt="ZIL"/></a>
                    <a href="https://csi.amu.edu.pl/en"><img src={logoCsi} alt="CSI"/></a>
                    <a href="https://www.sages.pl"><img src={logoSages} alt="Sages"/></a>
                </FlexColumn>
            </PartnershipsStyle>
        );
    };

    const tabletRender = () => {
        return (
            <PartnershipsStyle>
                <FlexColumn gap="32px">
                    <H2New as="h2">Our partnerships</H2New>
                    <FlexRow
                        gap="200px"
                        alignmentX="space-between"
                        className="test"
                    >
                        <a href="https://zil.ipipan.waw.pl/"><img src={logoZil} alt="ZIL"/></a>
                        <a href="https://csi.amu.edu.pl/en"><img src={logoCsi} alt="CSI"/></a>
                        <a href="https://www.sages.pl"><img src={logoSages} alt="Sages"/></a>
                    </FlexRow>
                    <FlexRow
                        gap="200px"
                        alignmentX="space-around"
                    >
                        <p>&nbsp;</p>
                    </FlexRow>
                </FlexColumn>
            </PartnershipsStyle>
        );
    };

    const desktopRender = () => {
        return (
            <PartnershipsStyle>
                <FlexColumn>
                    <H2New as="h2">Our partnerships</H2New>
                    <FlexRow
                        gap="80px"
                        alignmentX="space-between"
                    >
                        <a href="https://zil.ipipan.waw.pl/"><img src={logoZil} alt="ZIL"/></a>
                        <a href="https://csi.amu.edu.pl/en"><img src={logoCsi} alt="CSI"/></a>
                        <a href="https://www.sages.pl"><img src={logoSages} alt="Sages"/></a>
                    </FlexRow>
                </FlexColumn>
            </PartnershipsStyle>
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

export default Partnerships;
