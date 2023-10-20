import theme from '../../../../../utils/theme';
import tagBackgroundColorHandle from './tagBackgroundColorHandle';
import { FlexRow } from '../../../../../utils/containers';
import removeIco from '../../../../../assets/icons/remove_ico.svg';
import { Svg } from '../../../../../utils/containers';

const renderTagItems = (
  tags,
  toggleTag,
  border,
  backgroundColor,
  submissionTags = false
) => {
  return tags.map((tag, index) => {
    return (
      <FlexRow
        key={`tag-${index}`}
        onClick={() => toggleTag(tag)}
        className="TagsChoosePopUpStyle__tag-item"
        backgroundColor={
          backgroundColor
            ? backgroundColor
            : tagBackgroundColorHandle(theme, index)
        }
        border={border}
      >
        {tag.name}
        {submissionTags && (
          <Svg
            src={removeIco}
            backgroundColor={theme.colors.dark}
            width="10px"
            size="cover"
            height="10px"
          />
        )}
      </FlexRow>
    );
  });
};

export default renderTagItems;
