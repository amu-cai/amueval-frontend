import React from 'react';
import PopUp from '../../../../components/generic/PopUp';
import { FlexColumn, FlexRow } from '../../../../utils/containers';
import Search from '../../../../components/generic/Search';
import theme from '../../../../utils/theme';
import Button from '../../../../components/generic/Button';
import TagsChoosePopUpStyle from './TagsChoosePopUpStyle';
import renderTagItems from './functions/renderTagItems';

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
        <FlexColumn as="ul" className="TagsChoosePopUpStyle__tags-list">
          {renderTagItems(
            props.submissionTags,
            props.toggleSubmissionTag,
            `1px dotted ${theme.colors.green}`,
            theme.colors.green03,
            true
          )}
          {renderTagItems(props.tags, props.toggleSubmissionTag, 'none')}
        </FlexColumn>
        <FlexRow width="100%" gap="20px" alignmentX="flex-start">
          <Button height="32px" width="76px">
            Done
          </Button>
          <Button
            height="32px"
            width="76px"
            backgroundColor={theme.colors.dark08}
            handler={() => props.clearSubmissionTags()}
          >
            Clear
          </Button>
          <Button
            height="32px"
            width="76px"
            backgroundColor={theme.colors.dark}
            margin="0 0 0 auto"
            handler={() => props.setTagsPopUp(false)}
          >
            Cancel
          </Button>
        </FlexRow>
      </TagsChoosePopUpStyle>
    </PopUp>
  );
};

export default TagsChoosePopUp;
