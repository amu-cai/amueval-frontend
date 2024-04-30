import React from 'react';
import Media from "react-media";
import theme from "../../../../utils/theme";
import MotivationStyle from "./MotivationStyle";
import {FlexColumn, FlexRow} from "../../../../utils/containers";
import {BodyNew, H2New} from "../../../../utils/fonts";
import virus from "../../../../assets/virus.png";
import wave_2 from "../../../../assets/wave_2.png";


const Motivation = () => {
    const mobileRender = () => {
        return (
         <MotivationStyle>
             <FlexColumn as="section" className="MotivationStyle__wrapper">
                 <H2New as="h2">Motivation</H2New>
                 <img src={virus} width="358px" alt="arrows" className="MotivationStyle__img_sm"/>
                 <br />
                 <FlexColumn alignmentX="start">
                     <BodyNew as="p">
                         &#8226; Develop your ML skills
                     </BodyNew>
                     <BodyNew as="p">
                         &#8226; Demonstrate your ML skills to employers
                     </BodyNew>
                     <BodyNew as="p">
                         &#8226; Become the member of ML community
                     </BodyNew>
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
                    <FlexColumn as="section" className="MotivationStyle__text">
                        <H2New as="h2">
                            Motivation
                        </H2New>
                        <FlexColumn alignmentX="start">
                            <BodyNew as="p">
                                &#8226; Develop your ML skills
                            </BodyNew>
                            <BodyNew as="p">
                                &#8226; Demonstrate your ML skills to employers
                            </BodyNew>
                            <BodyNew as="p">
                                &#8226; Become the member of ML community
                            </BodyNew>
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
                    <FlexColumn as="section" className="MotivationStyle__text">
                        <H2New as="h2">
                            Motivation
                        </H2New>
                        <FlexColumn alignmentX="start">
                            <BodyNew as="p">
                                &#8226; Develop your ML skills
                            </BodyNew>
                            <BodyNew as="p">
                                &#8226; Demonstrate your ML skills to employers
                            </BodyNew>
                            <BodyNew as="p">
                                &#8226; Become the member of ML community
                            </BodyNew>
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
            <Media query={theme.desktop2}>{desktopRender()}</Media>
        </>
    );
};

export default Motivation;
