import React from "react";
import {FlexRow, Svg} from "../../utils/containers";
import {Body, Medium} from "../../utils/fonts";
import metricIco from '../../assets/metric_ico.svg';
import coinsIco from '../../assets/coins_ico.svg';
import baselineIco from '../../assets/baseline_ico.svg';
import clockIco from '../../assets/clock_ico.svg';
import cupIco from '../../assets/cup_ico.svg';
import styled from "styled-components";
import textIco from '../../assets/text_ico.svg';
import tabularIco from '../../assets/tabular_ico.svg';
import imageIco from '../../assets/image_ico.svg';

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
    const hoverLabel = (label) =>
        <HoverLabel className='HoverLabel'>
            {label}
        </HoverLabel>;

    switch (type) {
        case 'metric':
            return hoverLabel('metric');
        case 'prize':
            return hoverLabel('prize');
        case 'baseline':
            return hoverLabel('baseline');
        case 'timeLeft':
            return hoverLabel('time left');
        case 'bestScore':
            return hoverLabel('best score');
        case 'text':
            return hoverLabel('text data');
        case 'image':
            return hoverLabel('image data');
        case 'tabular':
            return hoverLabel('tabular data');
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
        case 'text':
            return textIco;
        case 'image':
            return imageIco;
        case 'tabular':
            return tabularIco;
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
            {props.children ?
                <Medium as='p'>
                    {props.children}
                </Medium> : ''}
            {renderHoverLabel(props.type)}
        </IconLabelStyle>
    );
}

export default IconLabel;