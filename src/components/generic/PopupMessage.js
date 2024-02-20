import React from 'react';
import { FlexColumn } from '../../utils/containers';
import theme from '../../utils/theme';
import { Body, H3 } from '../../utils/fonts';
import Button from './Button';

const PopupMessage = (props) => {
  const confirmPopUp = () => {
    if (props.confirmHandler) {
      props.confirmHandler();
    }
    props.popUpMessageHandler('', '', null, null);
  };

  return (
    <FlexColumn
      position="fixed"
      top="0"
      left="0"
      zIndex="100"
      width="100%"
      height="100vh"
      backgroundColor={theme.colors.dark01}
    >
      <FlexColumn
        alignmentY="space-between"
        width="60%"
        borderRadius="12px"
        backgroundColor={theme.colors.white}
        padding="56px"
        border={`4px solid ${
          props.borderColor ? props.borderColor : theme.colors.green
        }`}
      >
        <FlexColumn gap="48px" margin="0 0 48px 0">
          <H3>{props.header}</H3>
          <Body>{props.message}</Body>
        </FlexColumn>
        <Button
          backgroundColor={
            props.borderColor ? props.borderColor : theme.colors.green
          }
          handler={confirmPopUp}
        >
          Ok
        </Button>
      </FlexColumn>
    </FlexColumn>
  );
};

export default PopupMessage;
