import React from 'react';
import { FlexColumn, FlexRow, Grid } from '../../utils/containers';
import { Medium } from '../../utils/fonts';
import theme from '../../utils/theme';
import ImageButton from './ImageButton';
import pencilIco from '../../assets/pencil_ico.svg';
import styled from 'styled-components';
import PopUp from './PopUp';
import { createPortal } from 'react-dom';
import Search from './Search';
import Button from './Button';

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
          <PopUp
            width="50%"
            height="80vh"
            padding="36px 32px 0"
            closeHandler={() => setTagsPopUp(false)}
          >
            <FlexColumn
              width="100%"
              alignmentY="flex-start"
              height="100%"
              gap="24px"
            >
              <Search />
              <FlexColumn
                as="list"
                alignmentY="flex-start"
                height="80%"
                width="100%"
                overflowY="scroll"
              >
                {props.tags.map((tag, index) => {
                  return (
                    <FlexRow
                      key={`tag-${index}`}
                      height="48px"
                      width="100%"
                      alignmentX="flex-start"
                      backgroundColor={
                        index % 2 === 0
                          ? theme.colors.dark01
                          : theme.colors.white
                      }
                      padding="12px"
                    >
                      {tag.name}
                    </FlexRow>
                  );
                })}
              </FlexColumn>
              <FlexRow width="100%" gap="20px" alignmentX="flex-start">
                <Button height="32px" width="76px">
                  Done
                </Button>
                <Button
                  height="32px"
                  width="76px"
                  backgroundColor={theme.colors.dark08}
                >
                  Clear
                </Button>
                <Button
                  height="32px"
                  width="76px"
                  backgroundColor={theme.colors.dark}
                  margin="0 0 0 auto"
                >
                  Cancel
                </Button>
              </FlexRow>
            </FlexColumn>
          </PopUp>,
          document.body
        )}
    </DropdownWithPopupStyle>
  );
};

export default DropdownWithPopup;
