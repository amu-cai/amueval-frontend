import PropsTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Medium } from "../../utils/fonts";
// import theme from "../../utils/theme";

const getBackgroundColor = (theme, backgroundColor, disabled) => {
  if (backgroundColor) {
    return backgroundColor;
  }
  return theme.colors.green;
};

const ButtonStyle = styled(Medium)`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 28.8px;
  letter-spacing: 0.96px;
  font-weight: 400;
  width: ${({ width }) => (width ? width : "64px")};
  height: ${({ height }) => (height ? height : "28px")};
  border-radius: 8px;
  background-color: ${({ theme, backgroundColor, disabled }) =>
    getBackgroundColor(theme, backgroundColor, disabled)};
  color: ${({ theme, color }) => (color ? color : theme.colors.white)};
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  transition: transform 0.3s ease-in-out;
  border: ${({ borderColor }) =>
    borderColor ? `2px solid ${borderColor}` : "none"};
  font-family: "coolvetica-condensed-regular", sans-serif;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : ""};
  font-size: 24px;
  text-decoration: ${({ underlined }) => (underlined ? "underline" : "none")};

  * {
    cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  }

  &:hover {
    background-color: ${({ theme, borderColor, disabled }) =>
      getBackgroundColor(theme, borderColor, disabled)};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default function ButtonEdit(props) {
  return (
    <ButtonStyle
      as={props.as ? props.as : "button"}
      onClick={() => props.handler()}
      width={props.width}
      height={props.height}
      margin={props.margin}
      color={props.color}
      backgroundColor={props.backgroundColor}
      to={props.to}
      disabled={props.disabled}
      target={props.target}
      borderColor={props.borderColor}
      underlined={props.underlined}
      fontFamily={props.fa}
      fontWeight={props.fontWeight}
      lineHeight={props.lineHeight}
      letterSpacing={props.letterSpacing}
    >
      {props.children}
    </ButtonStyle>
  );
}

ButtonEdit.propTypes = {
  handler: PropsTypes.func,
  width: PropsTypes.string,
  height: PropsTypes.string,
  color: PropsTypes.string,
  backgroundColor: PropsTypes.string,
  children: PropsTypes.node,
  borderColor: PropsTypes.string,
  underlined: PropsTypes.bool,
};

ButtonEdit.defaultProps = {
  handler: () => {},
  width: "64px",
  height: "28px",
  color: "",
  backgroundColor: "",
  children: "",
};
