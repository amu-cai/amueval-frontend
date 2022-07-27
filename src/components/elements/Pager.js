import React from "react";
import {FlexRow, Svg} from "../../utils/containers";
import CircleNumber from "./CircleNumber";
import polygon from '../../assets/polygon.svg';
import styled from "styled-components";
import theme from "../../utils/theme";

const PagerStyle = styled(FlexRow)`
  gap: 14px;

  @media (min-width: ${({theme}) => theme.overMobile}) {
    gap: 20px;
  }
`;

const LeftArrow = styled(Svg)`
  background-color: ${({backgroundColor}) => backgroundColor};
  cursor: ${({backgroundColor}) => (backgroundColor === 'transparent') ? 'auto' : 'pointer'};
  width: 10px;
  height: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: ${({theme}) => theme.overMobile}) {
    width: 12px;
    height: 12px;
  }
`;

const RightArrow = styled(Svg)`
  background-color: ${({backgroundColor}) => backgroundColor};
  transform: rotate(180deg);
  cursor: ${({backgroundColor}) => (backgroundColor === 'transparent') ? 'auto' : 'pointer'};
  width: 10px;
  height: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(180deg) scale(1.1);
  }

  @media (min-width: ${({theme}) => theme.overMobile}) {
    width: 12px;
    height: 12px;
  }
`;

const Pager = (props) => {
    if (props.visible) {
        return (
            <PagerStyle>
                <LeftArrow as='button' src={polygon} onClick={props.previousPage} size='cover'
                           backgroundColor={(props.pageNr === 1) ? 'transparent' : theme.colors.dark}/>
                <CircleNumber number={props.pageNr}/>
                <RightArrow as='button' src={polygon} onClick={props.nextPage} size='cover'
                            backgroundColor={(props.pageNr === props.pages) ? 'transparent' : theme.colors.dark}/>
            </PagerStyle>
        );
    }
    return '';
}

export default Pager;