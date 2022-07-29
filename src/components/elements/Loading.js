import React from "react";
import styled, {keyframes} from "styled-components";
import {Container} from "../../utils/containers";
import PropsTypes from "prop-types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled(Container)`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 200px;

  @media (min-width: ${({theme}) => theme.overMobile}) {
    height: 350px;
  }
`;

const LoadingSpinner = styled(Container)`
  width: 50px;
  height: 50px;
  border: 10px solid ${({theme}) => theme.colors.dark01}; /* Light grey */
  border-top: 10px solid ${({theme}) => theme.colors.green}; /* Black */
  border-radius: 50%;
  animation: ${rotate} 1.1s ease-in-out infinite;

  @media (min-width: ${({theme}) => theme.overMobile}) {
    width: 100px;
    height: 100px;
  }
`;

const Loading = (props) => {
    return (
        <>
            {props.visible ? <SpinnerContainer>
                <LoadingSpinner/>
            </SpinnerContainer> : ''}
        </>
    );
};

Loading.propTypes = {
    visible: PropsTypes.bool,
};

Loading.defaultProps = {
    visible: true,
}

export default Loading;