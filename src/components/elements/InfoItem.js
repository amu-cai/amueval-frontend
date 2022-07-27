import React from "react";
import {FlexRow, Svg} from "../../utils/containers";
import theme from "../../utils/theme";
import {Medium} from "../../utils/fonts";
import PropsTypes from "prop-types";

const InfoItem = (props) => {
    return (
        <FlexRow as='li' gap={props.gap}>
            <Svg src={props.icon} width={props.size} height={props.size}
                 backgroundColor={theme.colors.dark} size='contain'/>
            <Medium as='p'>
                {props.children ? props.children : 'xxx'}
            </Medium>
        </FlexRow>
    );
};

InfoItem.propTypes = {
    gap: PropsTypes.string,
    icon: PropsTypes.object,
    size: PropsTypes.string,
    children: PropsTypes.node,
};

InfoItem.defaultProps = {
    gap: '0',
    icon: null,
    size: '24px',
    children: '',
};

export default InfoItem;
