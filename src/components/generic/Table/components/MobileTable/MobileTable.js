import React from 'react';
import DeletePopUp from '../DeletePopUp/DeletePopUp';
import TableRowItems from '../TableRowItems/TableRowItems';
import TableRowFooter from '../TableRowFooter/TableRowFooter';
import MobileTableStyle from './MobileTableStyle';

const MobileTable = (props) => {
  return (
    <MobileTableStyle as="table">
      {props.elements.map((item, i) => {
        return (
          <tr key={`table-row-${i}`} className="TableStyle__tr">
            <DeletePopUp
              item={item}
              setDeletePopUp={props.setDeletePopUp}
              deletePopUp={props.deletePopUp}
              deleteItem={props.deleteItem}
            />
            <TableRowItems orderedKeys={props.orderedKeys} item={item} i={i} />
            <TableRowFooter
              deleteItem={() => props.setDeletePopUp(true)}
              rowFooter={props.rowFooter}
              item={item}
              i={i}
            />
          </tr>
        );
      })}
    </MobileTableStyle>
  );
};

export default MobileTable;
