import React from 'react';
import PopUp from '../../../../components/generic/PopUp';
import { FlexColumn, FlexRow } from '../../../../utils/containers';
import Search from '../../../../components/generic/Search';
import theme from '../../../../utils/theme';
import Button from '../../../../components/generic/Button';
import TagsChoosePopUpStyle from './TagsChoosePopUpStyle';

const TagsChoosePopUp = (props) => {
  return (
    <PopUp
      width="50%"
      height="80vh"
      padding="36px 32px 0"
      closeHandler={() => props.setTagsPopUp(false)}
    >
      <TagsChoosePopUpStyle>
        <Search />
        <FlexColumn as="list" className="TagsChoosePopUpStyle__tags-list">
          {props.tags.map((tag, index) => {
            return (
              <FlexRow
                key={`tag-${index}`}
                className="TagsChoosePopUpStyle__tag-item"
                backgroundColor={
                  index % 2 === 0 ? theme.colors.dark01 : theme.colors.white
                }
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
      </TagsChoosePopUpStyle>
    </PopUp>
  );
};

export default TagsChoosePopUp;
