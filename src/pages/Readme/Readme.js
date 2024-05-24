import React from 'react';
import Media from 'react-media';
import theme from '../../utils/theme';
import {FlexColumn} from "../../utils/containers";
const Readme = (props) => {
  const mobileRender = () => {
    return (
        <FlexColumn padding="40px">
          <div>{props.description}</div>
        </FlexColumn>
    );
  };

  const desktopRender = () => {
    return (
        <FlexColumn padding="40px">
          <div>{props.description}</div>
            
        </FlexColumn>
    );
  };

  return (
    <>
      <Media query={theme.mobile}>{mobileRender()}</Media>
      <Media query={theme.desktop}>{desktopRender()}</Media>
    </>
  );
};

export default Readme;
