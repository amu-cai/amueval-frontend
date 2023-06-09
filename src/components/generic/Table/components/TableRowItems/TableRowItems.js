import React from 'react';
import { RENDER_WHEN, RENDER_METRIC_VALUE } from '../../../../../utils/globals';

const TableRowItems = ({ orderedKeys, item, i }) => {
  return (
    <>
      {orderedKeys.map((keyValue, j) => {
        return (
          <td key={`table-item-${i}-${j}`} className="TableStyle__td">
            {keyValue === 'when'
              ? RENDER_WHEN(item[keyValue])
              : RENDER_METRIC_VALUE(item[keyValue])}
          </td>
        );
      })}
    </>
  );
};

export default TableRowItems;
