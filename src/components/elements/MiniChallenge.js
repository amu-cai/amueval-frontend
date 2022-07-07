import React from "react";
import {Container, FlexColumn, FlexRow, Grid, Svg} from "../../utils/containers";
import {Body, H3} from "../../utils/fonts";
import styled from "styled-components";
import IconLabel from "./IconLabel";
import metricIco from '../../assets/metric_ico.svg';
import coinsIco from '../../assets/coins_ico.svg';
import baselineIco from '../../assets/baseline_ico.svg';
import clockIco from '../../assets/clock_ico.svg';
import cupIco from '../../assets/cup_ico.svg';

const ChallengeStyle = styled(FlexColumn)`
  padding: 12px;
  border: 1px solid ${({theme}) => theme.colors.dark05};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  p {
    width: 80%;
  }

  h3, p {
    transition: color 0.3s ease-in-out;
  }

  * {
    cursor: pointer;
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.green};
    border-color: ${({theme}) => theme.colors.white};

    h3, p {
      color: ${({theme}) => theme.colors.white};
    }

    .icon {
      background-color: ${({theme}) => theme.colors.white};
    }
  }
`;

const Line = styled(Container)`
  height: 1px;
  width: 80%;
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
            <FlexRow margin='0 0 14px 0' gap='12px'>
                <H3 as='h3' width='80%'>
                    {props.title}
                </H3>
                <Svg className='icon' src={props.ico} width='30px' height='30px'/>
            </FlexRow>
            <Line className='icon'/>
            <Body as='p' margin='0 0 14px 0'>
                {props.describe}
            </Body>
            <IconsGrid>
                <IconLabel size='24px' gap='8px' ico={metricIco}>
                    Haversine
                </IconLabel>
                <IconLabel size='24px' gap='8px' ico={cupIco}>
                    79%
                </IconLabel>
                <IconLabel size='24px' gap='8px' ico={clockIco}>
                    6 days
                </IconLabel>
                <IconLabel size='24px' gap='8px' ico={baselineIco}>
                    55%
                </IconLabel>
                <IconLabel size='24px' gap='8px' ico={coinsIco}>
                    150000 PLN
                </IconLabel>
            </IconsGrid>
        </ChallengeStyle>
    );
}

export default MiniChallenge;