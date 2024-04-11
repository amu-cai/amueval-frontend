import React from 'react';
import PartnershipsStyle from './PartnershipsStyle';
import Media from "react-media";
import theme from "../../../../utils/theme";
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
                    <a href="https://www.samsung.com/"><img src={samsung} alt="samsung"/></a>
                    <a href="https://pons.pl/"><img src={pons} alt="pons"/></a>
                    <a href="https://cararena.pl/"><img src={carArena} alt="car arena"/></a>
                    <a href="https://allegro.pl/"><img src={allegro} alt="allegro"/></a>
                    <a href="https://domdata.pl/"><img src={domdata} alt="domdata"/></a>
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
                        <a href="https://allegro.pl/"><img src={allegro} alt="allegro"/></a>
                        <a href="https://www.samsung.com/"><img src={samsung} alt="samsung"/></a>
                        <a href="https://pons.pl/"><img src={pons} alt="pons"/></a>
                    </FlexRow>
                    <FlexRow
                        gap="200px"
                        alignmentX="space-around"
                    >
                        <a href="https://cararena.pl/"><img src={carArena} alt="car arena"/></a>
                        <a href="https://domdata.pl/"><img src={domdata} alt="domdata"/></a>
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
                        <a href="https://pons.pl/"><img src={pons} alt="pons"/></a>
                        <a href="https://allegro.pl/"><img src={allegro} alt="allegro"/></a>
                        <a href="https://cararena.pl/"><img src={carArena} alt="car arena"/></a>
                        <a href="https://domdata.pl/"><img src={domdata} alt="domdata"/></a>
                        <a href="https://www.samsung.com/"><img src={samsung} alt="samsung"/></a>
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
