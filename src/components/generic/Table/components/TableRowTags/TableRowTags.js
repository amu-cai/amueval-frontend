import renderTags from './renderTags';
import { FlexRow } from '../../../../../utils/containers';

const TableRowTags = ({ item, i }) => {
  return (
    <FlexRow as="span" className="TableStyle__tags-container">
      {renderTags(item.tags)}
    </FlexRow>
  );
};

export default TableRowTags;
