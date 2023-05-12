import React from 'react';
import PopUp from '../../../components/generic/PopUp';
import { FlexColumn, FlexRow } from '../../../utils/containers';
import Search from '../../../components/generic/Search';
import theme from '../../../utils/theme';
import Button from '../../../components/generic/Button';

const TagsChoosePopUp = (props) => {
  return (
    <PopUp
      width="50%"
      height="80vh"
      padding="36px 32px 0"
      closeHandler={() => props.setTagsPopUp(false)}
    >
      <FlexColumn width="100%" alignmentY="flex-start" height="100%" gap="24px">
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
                  index % 2 === 0 ? theme.colors.dark01 : theme.colors.white
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
    </PopUp>
  );
};

export default TagsChoosePopUp;
