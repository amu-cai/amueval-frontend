import React from 'react';
import TableRowItems from '../TableRowItems/TableRowItems';
import MobileTableStyle from './MobileTableStyle';

const MobileTable = (props) => {
  return (
    <MobileTableStyle as="table">
      {props.elements.map((item, i) => {
        return (
          <tr key={`table-row-${i}`} className="TableStyle__tr">
            <TableRowItems orderedKeys={props.orderedKeys} item={item} i={i} />
          </tr>
        );
      })}
    </MobileTableStyle>
  );
};

export default MobileTable;
