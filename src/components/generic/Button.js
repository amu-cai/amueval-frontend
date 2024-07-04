import React from 'react';
import styled from 'styled-components';
import { Medium } from '../../utils/fonts';
import PropsTypes from 'prop-types';
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
  width: ${({ width }) => (width ? width : '64px')};
  height: ${({ height }) => (height ? height : '28px')};
  border-radius: 8px;
  background-color: ${({ theme, backgroundColor, disabled }) =>
    getBackgroundColor(theme, backgroundColor, disabled)};
  color: ${({ theme, color }) => (color ? color : theme.colors.white)};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  transition: transform 0.3s ease-in-out;
  border: ${({ borderColor }) => (borderColor ? `2px solid ${borderColor}`  : 'none')};
  font-family: 'coolvetica-condensed-regular';
  font-size: 24px;
  text-decoration: ${({ underlined }) => (underlined ? 'underline'  : 'none')};

  * {
    cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  }

  &:hover {
    border: ${({ borderColor }) => (borderColor ? '2px solid #5E5E5E' : '')};
  }
`;

const Button = (props) => {
  return (
    <ButtonStyle
      as={props.as ? props.as : 'button'}
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
    >
      {props.children}
    </ButtonStyle>
  );
};

Button.propTypes = {
  handler: PropsTypes.func,
  width: PropsTypes.string,
  height: PropsTypes.string,
  color: PropsTypes.string,
  backgroundColor: PropsTypes.string,
  children: PropsTypes.node,
  borderColor: PropsTypes.string,
  underlined: PropsTypes.bool,
};

Button.defaultProps = {
  handler: () => {},
  width: '64px',
  height: '28px',
  color: '',
  backgroundColor: '',
  children: '',
};

export default Button;
