import React from "react";
import {Container, FlexColumn, FlexRow, Grid, Svg} from "../../utils/containers";
import {Body, H3} from "../../utils/fonts";
import styled from "styled-components";
import IconLabel from "./IconLabel";

const ChallengeStyle = styled(FlexColumn)`
  padding: 12px;
  border: 1px solid ${({theme}) => theme.colors.dark05};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  p {
    width: 80%;
  }

  * {
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Line = styled(Container)`
  height: 1px;
  width: 85%;
  background-color: ${({theme}) => theme.colors.dark05};
  margin-bottom: 14px;
`;

const IconsGrid = styled(Grid)`
  width: 100%;
  grid-gap: 14px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const MiniChallenge = (props) => {
    return (
        <ChallengeStyle as='article' alignmentX='flex-start'>
            <FlexRow margin='0 0 14px 0' gap='12px' width='100%' alignmentX='space-between'>
                <H3 as='h3' width='85%'>
                    {props.title}
                </H3>
                <Svg src={props.ico} width='30px' height='30px'/>
            </FlexRow>
            <Line/>
            <Body as='p' margin='0 0 14px 0'>
                {props.describe}
            </Body>
            <IconsGrid>
                <IconLabel size='24px' gap='8px' type={'metric'}>
                    Haversine
                </IconLabel>
                <IconLabel size='24px' gap='8px' type={'bestScore'}>
                    79%
                </IconLabel>
                <IconLabel size='24px' gap='8px' type={'timeLeft'}>
                    6 days
                </IconLabel>
                <IconLabel size='24px' gap='8px' type={'baseline'}>
                    55%
                </IconLabel>
                <IconLabel size='24px' gap='8px' type={'prize'}>
                    150000 PLN
                </IconLabel>
            </IconsGrid>
        </ChallengeStyle>
    );
}

export default MiniChallenge;