import React from 'react';
import TableStyle from '../../styles/TableStyle';
import TableHeader from '../TableHeader/TableHeader';
import TableRowItems from '../TableRowItems/TableRowItems';
import TableRowFooter from '../TableRowFooter/TableRowFooter';
import RowsBackgroundStyle from '../../styles/RowsBackgroundStyle';

const DesktopTable = (props) => {
  return (
    <TableStyle rowFooter={props.rowFooter}>
      <tbody>
        <TableHeader
          orderedKeys={props.orderedKeys}
          sortByUpdate={props.sortByUpdate}
          tableUpdate={props.tableUpdate}
        />
        {props.elements.map((item, i) => {
          return (
            <tr key={`table-row-${i}`} className="TableStyle__tr">
              <TableRowItems
                orderedKeys={props.orderedKeys}
                subpage={props.subpage}
                item={item}
                i={i}
              />
              <TableRowFooter
                deleteItem={() => {
                  props.setItemToHandle(item);
                  props.setDeletePopUp(true);
                }}
                editItem={() => {
                  props.setItemToHandle(item);
                  props.setEditPopUp(true);
                }}
                subpage={props.subpage}
                rowFooter={props.rowFooter}
                item={item}
                i={i}
              />
              <RowsBackgroundStyle state={item} i={i} />
            </tr>
          );
        })}
      </tbody>
    </TableStyle>
  );
};

export default DesktopTable;
