import { FlexRow } from '../../../../utils/containers';
import renderTags from './renderTags';

const TableRowTags = ({ item, i }) => {
  return (
    <FlexRow className="NewTableStyle__tags-container">
      {renderTags(item.tags)}
    </FlexRow>
  );
};

export default TableRowTags;
