import React from "react";
import {FlexRow, Svg} from "../../utils/containers";
import CircleNumber from "./CircleNumber";
import polygon from '../../assets/polygon.svg';
import styled from "styled-components";

const RotatedSvg = styled(Svg)`
  transform: rotate(180deg);
  cursor: pointer;
`;

const Pager = (props) => {
    return (
        <FlexRow gap='14px'>
            <Svg as='button' src={polygon} cursor='pointer'/>
            <CircleNumber number={props.number}/>
            <RotatedSvg as='button' src={polygon}/>
        </FlexRow>
    );
}

export default Pager;