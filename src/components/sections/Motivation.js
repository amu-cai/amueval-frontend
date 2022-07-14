import React from "react";
import {FlexColumn, FlexRow, ImageBackground, Svg} from "../../utils/containers";
import {Body, H2} from "../../utils/fonts";
import cubeIcon from '../../assets/cube_ico.svg';
import theme from "../../utils/theme";
import Media from "react-media";
import ellipse from '../../assets/ellipse.svg'

const Motivation = () => {

    const content = [
        'Explore interesting solutions to problems using AI',
        'Train by solving our challenges',
        'Participate in competitions with commercial challenges'
    ];

    const mobileRender = () => {
        return (
            <FlexColumn as='section' alignmentX='flex-start' gap='24px' width='100%'>
                <H2 as='h2'>
                    Motivation
                </H2>

                <FlexColumn as='ul' gap='16px' alignmentX='flex-start'>
                    {
                        content.map((paragraph, index) => {
                            return (
                                <FlexRow key={`motivation-${index}`} as='li' gap='12px' alignmentX='flex-start'
                                         alignmentY='flex-start'>
                                    <Svg src={cubeIcon} width='14px' height='14px' margin='4px 0 0 0'
                                         backgroundColor={theme.colors.green}/>
                                    <Body as='p' width='90%'>
                                        {paragraph}
                                    </Body>
                                </FlexRow>
                            );
                        })
                    }
                </FlexColumn>
            </FlexColumn>
        );
    }

    const desktopRender = () => {
        return (
            <ImageBackground as='section' image={ellipse}
                             gap='48px' width='612px' height='458px'>
                <H2 as='h2'>
                    Motivation
                </H2>

                <FlexColumn as='ul' gap='22px' alignmentX='flex-start'>
                    {
                        content.map((paragraph, index) => {
                            return (
                                <FlexRow key={`motivation-${index}`} as='li' gap='16px' alignmentY='flex-start'>
                                    <Svg src={cubeIcon} width='20px' height='20px' size='cover' margin='2px 0 0 0'
                                         backgroundColor={theme.colors.green}/>
                                    <Body as='p' maxWidth='380px'>
                                        {paragraph}
                                    </Body>
                                </FlexRow>
                            );
                        })
                    }
                </FlexColumn>
            </ImageBackground>
        );
    }

    return (
        <>
            <Media query={theme.mobile}>
                {mobileRender()}
            </Media>
            <Media query={theme.desktop}>
                {desktopRender()}
            </Media>
        </>
    );
}

export default Motivation;