import React from "react";
import {FlexColumn, FlexRow, Svg} from "../../utils/containers";
import {Body, H2} from "../../utils/fonts";
import cubeIcon from '../../assets/cube_ico.svg';
import theme from "../../utils/theme";

const Motivation = () => {
    return (
        <FlexColumn as='section' alignmentX='flex-start' gap='24px' width='80%' maxWidth='352px'>
            <H2 as='h2'>
                Motivation
            </H2>
            <FlexColumn as='ul' gap='16px' alignmentX='flex-start'>
                <FlexRow as='li' gap='12px' alignmentY='flex-start'>
                    <Svg src={cubeIcon} width='14px' height='14px' margin='4px 0 0 0'
                         backgroundColor={theme.colors.green}/>
                    <Body as='p' maxWidth='224px'>
                        Explore interesting solutions to problems using AI
                    </Body>
                </FlexRow>
                <FlexRow as='li' gap='12px' alignmentY='flex-start'>
                    <Svg src={cubeIcon} width='14px' height='14px' margin='4px 0 0 0'
                         backgroundColor={theme.colors.green}/>
                    <Body as='p' maxWidth='224px'>
                        Train by solving our challenges
                    </Body>
                </FlexRow>
                <FlexRow as='li' gap='12px' alignmentY='flex-start'>
                    <Svg src={cubeIcon} width='14px' height='14px' margin='4px 0 0 0'
                         backgroundColor={theme.colors.green}/>
                    <Body as='p' maxWidth='224px'>
                        Participate in competitions with commercial challenges
                    </Body>
                </FlexRow>
            </FlexColumn>
        </FlexColumn>
    );
}

export default Motivation;