import React from 'react';
import { FlexColumn, FlexRow, Grid } from '../../utils/containers';
import { Medium } from '../../utils/fonts';
import theme from '../../utils/theme';
import ImageButton from './ImageButton';
import pencilIco from '../../assets/pencil_ico.svg';

const DropdownWithPopup = (props) => {
  return (
    <FlexColumn gap="8px" width="100%" alignmentX="flex-start">
      <Medium as="label" htmlFor={props.label}>
        {props.label}
      </Medium>
      <Grid
        borderRadius="4px"
        width="100%"
        height="100px"
        border={`1px solid ${theme.colors.dark}`}
        shadow={theme.shadow}
        onChange={(e) => props.handler(e.target.value)}
        padding="12px"
        gridTemplateColumns="1fr auto"
      >
        <FlexRow height="100%" alignmentX="flex-start" alignmentY="flex-start">
          dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa
          dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa
          dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa
          dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa dsa
        </FlexRow>
        <ImageButton src={pencilIco} width="20px" height="20px" />
      </Grid>
    </FlexColumn>
  );
};

export default DropdownWithPopup;
