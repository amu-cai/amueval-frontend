import React from 'react';
import Media from "react-media";
import theme from "../../../../utils/theme";
import MotivationStyle from "./MotivationStyle";
import {FlexColumn, FlexRow} from "../../../../utils/containers";
import {Body, H2} from "../../../../utils/fonts";
import virus from "../../../../assets/virus.png";
import wave_2 from "../../../../assets/wave_2.png";


const Motivation = () => {
    const mobileRender = () => {
        return (
         <MotivationStyle>
             <FlexColumn as="section">
                 <H2 as="h2">Motivation</H2>
                 <img src={virus} width="358px" alt="arrows"/>
                 <br />
                 <FlexColumn alignmentX="start">
                     <Body as="p">
                         Explore interesting solutions to problems using AI
                     </Body>
                     <br/>
                     <Body as="p">
                         Train by solving our challenges
                     </Body>
                     <br/>
                     <Body as="p">
                         Participate in competitions with commercial challenges
                     </Body>
                 </FlexColumn>
             </FlexColumn>
         </MotivationStyle>
        );
    };

    const tabletRender = () => {
        return (
            <MotivationStyle>
                <img className="MotivationStyle__wave" src={wave_2} alt="wave"/>
                <FlexRow gap="128px" alignmentY="start" className="MotivationStyle__wrapper">
                    <FlexColumn>
                        <img src={virus} width="442px" alt="arrows"/>
                    </FlexColumn>
                    <FlexColumn as="section">
                        <H2 textLeft={true} as="h2">
                            Motivation
                        </H2>
                        <FlexColumn alignmentX="start">
                            <Body as="p">
                                Explore interesting solutions to problems using AI
                            </Body>
                            <br/>
                            <Body as="p">
                                Train by solving our challenges
                            </Body>
                            <br/>
                            <Body as="p">
                                Participate in competitions with commercial challenges
                            </Body>
                        </FlexColumn>
                    </FlexColumn>
                </FlexRow>
            </MotivationStyle>
        );
    };

    const desktopRender = () => {
        return (
            <MotivationStyle>
                <img className="MotivationStyle__wave" src={wave_2} alt="wave"/>
                <FlexRow gap="128px" alignmentY="start" className="MotivationStyle__wrapper">
                    <FlexColumn>
                        <img src={virus} width="460px" alt="arrows"/>
                    </FlexColumn>
                    <FlexColumn as="section">
                        <H2 textLeft={true} as="h2">
                            Motivation
                        </H2>
                        <FlexColumn alignmentX="start">
                            <Body as="p">
                                Explore interesting solutions to problems using AI
                            </Body>
                            <br/>
                            <Body as="p">
                                Train by solving our challenges
                            </Body>
                            <br/>
                            <Body as="p">
                                Participate in competitions with commercial challenges
                            </Body>
                        </FlexColumn>
                    </FlexColumn>
                </FlexRow>
            </MotivationStyle>
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

export default Motivation;
