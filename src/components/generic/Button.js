import React from 'react';
import styled from 'styled-components';
import { Medium } from '../../utils/fonts';
import PropsTypes from 'prop-types';

const getBackgroundColor = (theme, backgroundColor, disabled) => {
  if (disabled) {
    return theme.colors.dark08;
  } else if (backgroundColor) {
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
  border-radius: 12px;
  background-color: ${({ theme, backgroundColor, disabled }) =>
    getBackgroundColor(theme, backgroundColor, disabled)};
  color: ${({ theme, color }) => (color ? color : theme.colors.white)};
  box-shadow: ${({ theme }) => theme.buttonShadow};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  transition: transform 0.3s ease-in-out;

  * {
    cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  }

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.15)')};
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
};

Button.defaultProps = {
  handler: null,
  width: '64px',
  height: '28px',
  color: '',
  backgroundColor: '',
  children: '',
};

export default Button;
