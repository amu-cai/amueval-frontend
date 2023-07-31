import React from 'react';
import { FlexColumn } from '../../utils/containers';
import { Medium } from '../../utils/fonts';
import theme from '../../utils/theme';

const SubmitInput = (props) => {
  return (
    <FlexColumn gap="8px" width="100%" alignmentX="flex-start">
      <Medium as="label" htmlFor={props.label}>
        {props.label}
      </Medium>
      <FlexColumn
        as="input"
        id={props.label}
        name={props.label}
        borderRadius="4px"
        width="100%"
        height="36px"
        border={`1px solid ${theme.colors.dark}`}
        shadow={theme.shadow}
        defaultValue={props.defaultValue}
        onChange={(e) => props.handler(e.target.value)}
        padding="4px"
      />
    </FlexColumn>
  );
};

export default SubmitInput;
