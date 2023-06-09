import React from 'react';
import { RENDER_WHEN } from '../../../../utils/globals';

const TableRowItems = ({ orderedKeys, item, i }) => {
  return (
    <>
      {orderedKeys.map((keyValue, j) => {
        return (
          <td key={`table-item-${i}-${j}`} className="NewTableStyle__td">
            {keyValue === 'when' ? RENDER_WHEN(item[keyValue]) : item[keyValue]}
          </td>
        );
      })}
    </>
  );
};

export default TableRowItems;
