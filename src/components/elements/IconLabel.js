import React from "react";
import {FlexRow, Svg} from "../../utils/containers";
import {Body, Medium} from "../../utils/fonts";
import styled from "styled-components";
import {RENDER_DEADLINE_TIME, RENDER_ICO} from "../../utils/globals";
import PropsTypes from "prop-types";

const HoverLabel = styled(Body)`
  position: absolute;
  top: -32px;
  left: ${({type}) => (type === 'text' || type === 'image' || type === 'tabular') ? '-32px' : 0};
  width: 100px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 4px 12px;
  background-color: ${({theme}) => theme.colors.green};
  color: ${({theme}) => theme.colors.white};
`;

const renderHoverLabel = (type, time) => {
    const hoverLabel = (label) =>
        <HoverLabel className='HoverLabel' type={type}>
            {label}
        </HoverLabel>;

    switch (type) {
        case 'metric':
            return hoverLabel('metric');
        case 'prize':
            return hoverLabel('prize');
        case 'baseline':
            return hoverLabel('baseline');
        case 'deadline':
            return hoverLabel(`deadline ${RENDER_DEADLINE_TIME(time)}`);
        case 'bestScore':
            return hoverLabel('best score');
        case 'text':
            return hoverLabel('text data');
        case 'image':
            return hoverLabel('image data');
        case 'tabular':
            return hoverLabel('tabular data');
        default:
            return '';
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
                 src={RENDER_ICO(props.type)}/>
            {props.children ?
                <Medium as='p'>
                    {props.children}
                </Medium> : ''}
            {renderHoverLabel(props.type, props.time)}
        </IconLabelStyle>
    );
};

IconLabel.propTypes = {
    gap: PropsTypes.string,
    size: PropsTypes.string,
    type: PropsTypes.string,
    time: PropsTypes.string,
    children: PropsTypes.node,
};

IconLabel.defaultProps = {
    gap: '0',
    size: '24px',
    type: '',
    time: '',
    children: '',
};

export default IconLabel;