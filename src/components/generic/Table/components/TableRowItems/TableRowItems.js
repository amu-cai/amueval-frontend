import React from 'react';
import {
  RENDER_WHEN,
  RENDER_METRIC_VALUE,
  IS_MOBILE,
} from '../../../../../utils/globals';
import { Container } from '../../../../../utils/containers';

const TableRowItems = ({ orderedKeys, item, i }) => {
  const renderValue = (keyValue) => {
    if (keyValue === 'when') {
      return RENDER_WHEN(item[keyValue]);
    } else {
      return RENDER_METRIC_VALUE(item[keyValue]);
    }
  };

  return (
    <>
      {orderedKeys.map((keyValue, j) => {
        return (
          <td key={`table-item-${i}-${j}`} className="TableStyle__td">
            {IS_MOBILE() && (
              <Container className="mobile-table-header">{keyValue}</Container>
            )}
            {renderValue(keyValue)}
          </td>
        );
      })}
    </>
  );
};

export default TableRowItems;
