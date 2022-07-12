import React from "react";
import {FlexColumn, FlexRow, Svg} from "../../utils/containers";
import {Body, H2} from "../../utils/fonts";
import cubeIcon from '../../assets/cube_ico.svg';
import theme from "../../utils/theme";

const Motivation = () => {

    const content = [
        'Explore interesting solutions to problems using AI',
        'Train by solving our challenges',
        'Participate in competitions with commercial challenges'
    ];

    return (
        <FlexColumn as='section' alignmentX='flex-start' gap='24px' width='100%'>
            <H2 as='h2'>
                Motivation
            </H2>

            <FlexColumn as='ul' gap='16px' alignmentX='flex-start'>
                {
                    content.map((paragraph, index) => {
                        return (
                            <FlexRow key={`motivation-${index}`} as='li' gap='12px' alignmentY='flex-start'>
                                <Svg src={cubeIcon} width='14px' height='14px' margin='4px 0 0 0'
                                     backgroundColor={theme.colors.green}/>
                                <Body as='p'>
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

export default Motivation;