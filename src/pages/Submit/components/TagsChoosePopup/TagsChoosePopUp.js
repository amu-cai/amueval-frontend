import React from 'react';
import PopUp from '../../../../components/generic/PopUp';
import { FlexColumn, FlexRow } from '../../../../utils/containers';
import Search from '../../../../components/generic/Search';
import theme from '../../../../utils/theme';
import Button from '../../../../components/generic/Button';
import TagsChoosePopUpStyle from './TagsChoosePopUpStyle';
import renderTagItems from './functions/renderTagItems';

const TagsChoosePopUp = (props) => {
  const [tagsChoosed, setTagsChoosed] = React.useState([]);
  const [tags, setTags] = React.useState([]);

  React.useEffect(() => {
    setTags(props.tags.slice());
    setTagsChoosed(props.submissionTags.slice());
  }, [props.tags, props.submissionTags]);

  const toggleTagChoose = (clickedTag) => {
    let newTagsChoosed = tagsChoosed;
    let newTags = tags;
    if (tagsChoosed.includes(clickedTag)) {
      newTagsChoosed = newTagsChoosed.filter(
        (tag) => tag.name !== clickedTag.name
      );
      newTags.push(clickedTag);
      newTags = newTags.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      newTagsChoosed.push(clickedTag);
      newTags = newTags.filter((tag) => tag.name !== clickedTag.name);
    }
    setTagsChoosed(newTagsChoosed);
    setTags(newTags);
  };

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
            tagsChoosed,
            toggleTagChoose,
            `1px dotted ${theme.colors.green}`,
            theme.colors.green03,
            true
          )}
          {renderTagItems(tags, toggleTagChoose, 'none')}
        </FlexColumn>
        <FlexRow className="TagsChoosePopUpStyle__buttons-container">
          <Button
            height="32px"
            width="76px"
            handler={() => {
              props.updateTags(tagsChoosed, tags);
              props.setTagsPopUp(false);
            }}
          >
            Done
          </Button>
          <Button
            height="32px"
            width="76px"
            backgroundColor={theme.colors.dark08}
            handler={() => setTagsChoosed([])}
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
