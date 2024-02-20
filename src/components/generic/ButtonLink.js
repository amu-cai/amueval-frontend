import React from 'react';
import styled from 'styled-components';
import { Label } from '../../utils/fonts';

const ButtonLinkStyle = styled(Label)`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  text-align: center;
  width: 144px;
  padding: 4px 0;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.15);
  }

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
  }
`;

const ButtonLink = (props) => {
  return (
    <ButtonLinkStyle as={props.as} onClick={props.onClick} to={props.to}>
      {props.children}
    </ButtonLinkStyle>
  );
};

export default ButtonLink;
