import { FlexRow } from '../../../../utils/containers';

const renderTags = (tags, i) => {
  if (tags.length > 0) {
    return tags.map((tag, j) => {
      return (
        <FlexRow className="NewTableStyle__tag" key={`submissionTag-${i}-${j}`}>
          {tag.name}
        </FlexRow>
      );
    });
  }
  return (
    <FlexRow className="NewTableStyle__tag">submission without tags</FlexRow>
  );
};

export default renderTags;
