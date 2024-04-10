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
import {H2} from "../../../../utils/fonts";



const Partnerships = () => {
    const mobileRender = () => {
        return (
            <PartnershipsStyle>
                <FlexColumn>
                    <H2 as="h2">Our partnerships</H2>
                </FlexColumn>
                <FlexColumn gap="50px">
                    <img src={samsung} alt="samsung"/>
                    <img src={pons} alt="pons"/>
                    <img src={carArena} alt="car arena"/>
                    <img src={allegro} alt="allegro"/>
                    <img src={domdata} alt="domdata"/>
                </FlexColumn>
            </PartnershipsStyle>
        );
    };

    const tabletRender = () => {
        return (
            <PartnershipsStyle>
                <FlexColumn gap="32px">
                    <H2 as="h2">Our partnerships</H2>
                    <FlexRow
                        gap="200px"
                        alignmentX="space-between"
                        className="test"
                    >
                        <img src={allegro} alt="allegro"/>
                        <img src={samsung} alt="samsung"/>
                        <img src={pons} alt="pons"/>
                    </FlexRow>
                    <FlexRow
                        gap="200px"
                        alignmentX="space-around"
                    >
                        <img src={carArena} alt="car arena"/>
                        <img src={domdata} alt="domdata"/>
                    </FlexRow>
                </FlexColumn>
            </PartnershipsStyle>
        );
    };

    const desktopRender = () => {
        return (
            <PartnershipsStyle>
                <FlexColumn>
                    <H2 as="h2">Our partnerships</H2>
                    <FlexRow
                        gap="80px"
                        alignmentX="space-between"
                    >
                        <img src={pons} alt="pons"/>
                        <img src={allegro} alt="allegro"/>
                        <img src={carArena} alt="car arena"/>
                        <img src={domdata} alt="domdata"/>
                        <img src={samsung} alt="samsung"/>
                    </FlexRow>
                </FlexColumn>
            </PartnershipsStyle>
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

export default Partnerships;
