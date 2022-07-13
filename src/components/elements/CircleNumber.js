import React from "react";
import {Container} from "../../utils/containers";
import styled from "styled-components";

const CircleNumberStyle = styled(Container)`
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.green};
  color: ${({theme}) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  font-weight: 500;
  width: 24px;
  height: 24px;

  @media (min-width: ${({theme}) => theme.overMobile}) {
    width: 36px;
    height: 36px;
    font-size: 22px;
  }
`

const CircleNumber = (props) => {
    return (
        <CircleNumberStyle>
            {props.number}
        </CircleNumberStyle>
    );
}

export default CircleNumber;