import React from 'react';
import {
  RENDER_WHEN,
  RENDER_METRIC_VALUE,
  RENDER_PLACE,
  IS_MOBILE,
} from '../../../../../utils/globals';
import {Container} from '../../../../../utils/containers';

const TableRowItems = ({ orderedKeys, item, i, subpage }) => {
  const renderValue = (keyValue) => {
    if (keyValue === 'timestamp') {
      return RENDER_WHEN(item[keyValue]);
    }
    else if (keyValue === 'id') {
        return RENDER_PLACE(i);
    }
    else if (keyValue === 'index') {
      return i + 1;
    }
    else {
      return RENDER_METRIC_VALUE(item[keyValue]);
    }
  };

  const renderItem = (keyValue) => {
    return renderValue(keyValue);
  };

  return (
    <>
      {orderedKeys.map((keyValue, j) => {
        return (
          <td key={`table-item-${i}-${j}`} className="TableStyle__td">
            {IS_MOBILE() && (
              <Container as="span" className="mobile-table-header">
                {keyValue.name}
              </Container>
            )}
            {renderItem(keyValue.key)}
          </td>
        );
      })}
    </>
  );
};

export default TableRowItems;
