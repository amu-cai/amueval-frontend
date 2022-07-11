import React from "react";
import styled from "styled-components";
import {Medium} from "../../utils/fonts";

const ButtonStyle = styled(Medium)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({width}) => width ? width : '64px'};
  height: ${({height}) => height ? height : '28px'};
  border-radius: 12px;
  background-color: ${({theme, backgroundColor}) => backgroundColor ? backgroundColor : theme.colors.green};
  color: ${({theme, color}) => color ? color : theme.colors.white};
  box-shadow: ${({theme}) => theme.buttonShadow};
  cursor: pointer;
`;

const Button = (props) => {
    return (
        <ButtonStyle onClick={props.handler} width={props.width} height={props.height}
                     color={props.color} backgroundColor={props.backgroundColor}>
            {props.children}
        </ButtonStyle>
    );
}

export default Button;