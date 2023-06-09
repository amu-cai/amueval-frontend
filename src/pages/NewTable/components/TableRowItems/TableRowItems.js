import React from 'react';

const TableRowItems = ({ orderedKeys, item, i }) => {
  return (
    <>
      {orderedKeys.map((keyValue, j) => {
        return (
          <td key={`table-item-${i}-${j}`} className="NewTableStyle__td">
            {item[keyValue]}
          </td>
        );
      })}
    </>
  );
};

export default TableRowItems;
