import React from 'react';
import { Container } from '../../utils/containers';
import styled from 'styled-components';
import PropsTypes from 'prop-types';

const CircleNumberStyle = styled(Container)`
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '50%')};
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Kanit', sans-serif;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
  font-weight: 500;
  width: ${({ width }) => (width ? width : '24px')};
  height: ${({ height }) => (height ? height : '24px')};

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    width: ${({ width }) => (width ? width : '36px')};
    height: ${({ height }) => (height ? height : '36px')};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '22px')};
  }
`;

const CircleNumber = (props) => {
  return (
    <CircleNumberStyle
      width={props.width}
      height={props.height}
      fontSize={props.fontSize}
      borderRadius={props.borderRadius}
      margin={props.margin}
      padding={props.padding}
      position={props.position}
      top={props.top}
      left={props.left}
      right={props.right}
      bottom={props.bottom}
    >
      {props.number}
    </CircleNumberStyle>
  );
};

CircleNumber.propTypes = {
  number: PropsTypes.string,
  width: PropsTypes.string,
  borderRadius: PropsTypes.string,
};

CircleNumber.defaultProps = {
  number: '',
  width: null,
  borderRadius: null,
};

export default CircleNumber;
