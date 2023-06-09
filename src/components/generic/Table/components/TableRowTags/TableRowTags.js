import renderTags from './renderTags';
import { FlexRow } from '../../../../../utils/containers';

const TableRowTags = ({ item, i }) => {
  return (
    <FlexRow className="TableStyle__tags-container">
      {renderTags(item.tags)}
    </FlexRow>
  );
};

export default TableRowTags;
