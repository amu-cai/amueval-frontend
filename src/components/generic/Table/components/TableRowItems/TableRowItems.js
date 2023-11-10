import React from 'react';
import {
  RENDER_WHEN,
  RENDER_METRIC_VALUE,
  IS_MOBILE,
} from '../../../../../utils/globals';
import { Container } from '../../../../../utils/containers';
import { Medium } from '../../../../../utils/fonts';

const TableRowItems = ({ orderedKeys, item, i, subpage }) => {
  const renderValue = (keyValue) => {
    if (keyValue === 'when') {
      return RENDER_WHEN(item[keyValue]);
    } else {
      return RENDER_METRIC_VALUE(item[keyValue]);
    }
  };

  const renderItem = (keyValue) => {
    const notMyEntriesPage = subpage !== 'MY_ENTRIES';
    if (item.isOwner && notMyEntriesPage) {
      return <Medium>{renderValue(keyValue)}</Medium>;
    }
    return renderValue(keyValue);
  };

  return (
    <>
      {orderedKeys.map((keyValue, j) => {
        return (
          <td key={`table-item-${i}-${j}`} className="TableStyle__td">
            {IS_MOBILE() && (
              <Container as="span" className="mobile-table-header">
                {keyValue}
              </Container>
            )}
            {renderItem(keyValue)}
            {keyValue === '#' && i + 1}
          </td>
        );
      })}
    </>
  );
};

export default TableRowItems;
