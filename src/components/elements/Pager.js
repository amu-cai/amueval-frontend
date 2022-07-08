import React from "react";
import {FlexRow, Svg} from "../../utils/containers";
import CircleNumber from "./CircleNumber";
import polygon from '../../assets/polygon.svg';
import styled from "styled-components";
import theme from "../../utils/theme";

const LeftArrow = styled(Svg)`
  background-color: ${({backgroundColor}) => backgroundColor};
  cursor: ${({backgroundColor}) => (backgroundColor === 'transparent') ? 'auto' : 'pointer'};
`;

const RightArrow = styled(Svg)`
  display: ${({display}) => display};
  transform: rotate(180deg);
  cursor: ${({backgroundColor}) => (backgroundColor === 'transparent') ? 'auto' : 'pointer'};
`;

const Pager = (props) => {
    return (
        <FlexRow gap='14px'>
            <LeftArrow as='button' src={polygon} onClick={props.previousPage}
                       backgroundColor={(props.pageNr === 1) ? 'transparent' : theme.colors.dark}/>
            <CircleNumber number={props.pageNr}/>
            <RightArrow as='button' src={polygon} onClick={props.nextPage}
                        backgroundColor={(props.pageNr === props.pages) ? 'transparent' : theme.colors.dark}/>
        </FlexRow>
    );
}

export default Pager;