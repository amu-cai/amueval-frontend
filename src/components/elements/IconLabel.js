import React from "react";
import {FlexRow, Svg} from "../../utils/containers";
import {Medium} from "../../utils/fonts";

const IconLabel = (props) => {
    return (
        <FlexRow gap={props.gap}>
            <Svg className='icon'
                 width={props.size} height={props.size}
                 src={props.ico}/>
            <Medium as='p'>
                {props.children}
            </Medium>
        </FlexRow>
    );
}

export default IconLabel;