import React from 'react';
import styled from 'styled-components';
import {Label} from '../../utils/fonts';
import PropsTypes from 'prop-types';

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

  @media (min-width: ${({theme}) => theme.overMobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
  }
`;

const ButtonLink = (props) => {
    return (
        <ButtonLinkStyle as={props.as} onClick={props.onClick}>
            {props.children}
        </ButtonLinkStyle>
    );
};

ButtonLink.propTypes = {
    as: PropsTypes.string,
    onClick: PropsTypes.func,
    children: PropsTypes.node,
};

ButtonLink.defaultProps = {
    children: '',
    as: 'div',
    onClick: null,
};

export default ButtonLink;