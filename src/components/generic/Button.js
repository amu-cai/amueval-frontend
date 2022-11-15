import React from 'react';
import styled from 'styled-components';
import {Medium} from '../../utils/fonts';
import PropsTypes from 'prop-types';

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
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.15);
  }
`;

const Button = (props) => {
    return (
        <ButtonStyle as='button' onClick={props.handler} width={props.width} height={props.height}
                     color={props.color} backgroundColor={props.backgroundColor}>
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
    children: PropsTypes.node
};

Button.defaultProps = {
    handler: null,
    width: '64px',
    height: '28px',
    color: '',
    backgroundColor: '',
    children: ''
};

export default Button;