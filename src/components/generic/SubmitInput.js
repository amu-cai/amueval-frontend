import React from 'react';
import { FlexColumn } from '../../utils/containers';
import { Medium } from '../../utils/fonts';
import theme from '../../utils/theme';

const SubmitInput = (props) => {
  const inputRender = () => {
    switch (props.type) {
      case 'select': {
        return (
          <FlexColumn
            as="select"
            id={props.label}
            name={props.label}
            borderRadius="4px"
            width="100%"
            height="36px"
            border={`1px solid ${theme.colors.dark}`}
            shadow={theme.shadow}
            defaultValue={props.defaultValue}
            padding="4px"
            onChange={(e) => props.handler(e.target.value)}
          >
            {props.options.map((option) => {
              return <option value={option}>{option}</option>;
            })}
          </FlexColumn>
        );
      }
      case 'textarea': {
        return (
          <FlexColumn
            as="textarea"
            id={props.label}
            name={props.label}
            placeholder={props.placeholder}
            borderRadius="4px"
            width="100%"
            height="80px"
            border={`1px solid ${theme.colors.dark}`}
            shadow={theme.shadow}
            defaultValue={props.defaultValue}
            padding="4px"
            onChange={(e) => props.handler(e.target.value)}
          />
        );
      }
      default: {
        return (
          <FlexColumn
            as="input"
            id={props.label}
            name={props.label}
            type={props?.type ? props.type : 'text'}
            accept={props?.accept ? props.accept : null}
            borderRadius="4px"
            width="100%"
            height="36px"
            border={`1px solid ${theme.colors.dark}`}
            shadow={theme.shadow}
            defaultValue={props.defaultValue}
            onChange={(e) =>
              props.handler(props.type === 'file' ? e : e.target.value)
            }
            padding="4px"
          />
        );
      }
    }
  };

  return (
    <FlexColumn gap="8px" width="100%" alignmentX="flex-start">
      <Medium as="label" htmlFor={props.label}>
        {props.label}
      </Medium>
      {inputRender()}
    </FlexColumn>
  );
};

export default SubmitInput;
