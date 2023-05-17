import React from 'react';
import { FlexColumn } from '../../utils/containers';
import styled from 'styled-components';

const PopUpStyle = styled(FlexColumn)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark01};

  .PopUpStyle__body {
    width: ${({ width }) => (width ? width : '60%')};
    height: ${({ height }) => (height ? height : '50%')};
    min-height: ${({ minHeight }) => (minHeight ? minHeight : '50%')};
    padding: ${({ padding }) => (padding ? padding : '48px')};
    margin: ${({ margin }) => (margin ? margin : '0')};
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    justify-content: flex-start;
  }
`;

const PopUp = (props) => {
  const [onHover, setOnHover] = React.useState(false);

  const closePopUp = () => {
    if (!onHover) props.closeHandler();
  };

  return (
    <PopUpStyle
      padding={props.padding}
      width={props.width}
      height={props.height}
      minHeight={props.minHeight}
      margin={props.margin}
      onClick={closePopUp}
    >
      <FlexColumn
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        className="PopUpStyle__body"
      >
        {props.children}
      </FlexColumn>
    </PopUpStyle>
  );
};

export default PopUp;
