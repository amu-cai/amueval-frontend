import React from "react";
import styled from "styled-components";
import {Label} from "../utils/fonts";

const ButtonLinkStyle = styled(Label)`
  background-color: ${({theme}) => theme.colors.green};
  color: ${({theme}) => theme.colors.white};
  border-radius: 12px;
  text-align: center;
  width: 122px;
  padding: 4px 0;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.15);
  }
`;

const ButtonLink = (props) => {
    return (
        <ButtonLinkStyle>
            {props.children}
        </ButtonLinkStyle>
    );
}

export default ButtonLink;