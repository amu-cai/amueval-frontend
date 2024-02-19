import React from 'react';
import { FlexColumn, FlexRow } from '../../utils/containers';
import styled from 'styled-components';
import { Medium } from '../../utils/fonts';

const AuthInputStyle = styled(Medium)`
  width: 188px;
  height: 36px;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.colors.dark05};

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    width: 310px;
    height: 52px;
    padding: 8px;
  }
`;

const AuthLabel = styled(FlexRow)`
  position: absolute;
  top: -10px;
  left: 14px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  padding: 4px;
  z-index: 2;

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    font-size: 16px;
    top: -14px;
  }
`;

const AuthInput = (props) => {
  return (
    <FlexColumn position="relative">
      <AuthLabel as="label" htmlFor={props.label}>
        {props.label}
      </AuthLabel>
      <AuthInputStyle
        as="input"
        id={props.label}
        name={props.label}
        onChange={(e) => props.handler(e)}
        value={props.value}
        type={props.type ? props.type : 'text'}
      />
    </FlexColumn>
  );
};

export default AuthInput;
