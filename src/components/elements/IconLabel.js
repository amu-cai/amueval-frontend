import React from "react";
import {FlexRow, Svg} from "../../utils/containers";
import {Body, Medium} from "../../utils/fonts";
import metricIco from '../../assets/metric_ico.svg';
import coinsIco from '../../assets/coins_ico.svg';
import baselineIco from '../../assets/baseline_ico.svg';
import clockIco from '../../assets/clock_ico.svg';
import cupIco from '../../assets/cup_ico.svg';
import styled from "styled-components";

const HoverLabel = styled(Body)`
  position: absolute;
  top: -32px;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 4px 12px;
  background-color: ${({theme}) => theme.colors.green};
  color: ${({theme}) => theme.colors.white};
`;

const renderHoverLabel = (type) => {
    switch (type) {
        case 'metric':
            return <HoverLabel className='HoverLabel'>
                metric
            </HoverLabel>;
        case 'prize':
            return <HoverLabel className='HoverLabel'>
                prize
            </HoverLabel>;
        case 'baseline':
            return <HoverLabel className='HoverLabel'>
                baseline
            </HoverLabel>;
        case 'timeLeft':
            return <HoverLabel className='HoverLabel'>
                time left
            </HoverLabel>;
        case 'bestScore':
            return <HoverLabel className='HoverLabel'>
                best score
            </HoverLabel>;
    }
}

const renderIco = (type) => {
    switch (type) {
        case 'metric':
            return metricIco;
        case 'prize':
            return coinsIco;
        case 'baseline':
            return baselineIco;
        case 'timeLeft':
            return clockIco;
        case 'bestScore':
            return cupIco;
    }
}

const IconLabelStyle = styled(FlexRow)`
  position: relative;

  &:hover {
    .HoverLabel {
      display: flex;
    }
  }
`

const IconLabel = (props) => {
    return (
        <IconLabelStyle gap={props.gap}>
            <Svg width={props.size} height={props.size}
                 src={renderIco(props.type)}/>
            <Medium as='p'>
                {props.children}
            </Medium>
            {renderHoverLabel(props.type)}
        </IconLabelStyle>
    );
}

export default IconLabel;