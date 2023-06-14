import { FlexRow } from '../../../../../utils/containers';

const renderTags = (tags, i) => {
  if (tags && tags.length > 0) {
    return tags.map((tag, j) => {
      return (
        <FlexRow className="TableStyle__tag" key={`submissionTag-${i}-${j}`}>
          {tag.name}
        </FlexRow>
      );
    });
  }
  return <FlexRow className="TableStyle__tag">submission without tags</FlexRow>;
};

export default renderTags;
