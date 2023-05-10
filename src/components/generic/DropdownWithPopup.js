import React from 'react';
import { FlexColumn, FlexRow, Grid } from '../../utils/containers';
import { Medium } from '../../utils/fonts';
import theme from '../../utils/theme';
import ImageButton from './ImageButton';
import pencilIco from '../../assets/pencil_ico.svg';
import styled from 'styled-components';
import PopUp from './PopUp';
import { createPortal } from 'react-dom';

const DropdownWithPopupStyle = styled(FlexColumn)`
  cursor: pointer;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
  * {
    cursor: pointer;
  }
`;

const DropdownWithPopup = (props) => {
  const [tagsPopUp, setTagsPopUp] = React.useState(false);

  return (
    <DropdownWithPopupStyle
      onClick={() => {
        if (!tagsPopUp) setTagsPopUp(true);
      }}
    >
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
      {tagsPopUp &&
        createPortal(
          <PopUp closeHandler={() => setTagsPopUp(false)}></PopUp>,
          document.body
        )}
    </DropdownWithPopupStyle>
  );
};

export default DropdownWithPopup;
