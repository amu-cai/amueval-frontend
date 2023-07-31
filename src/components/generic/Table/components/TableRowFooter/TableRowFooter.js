import React from 'react';
import { FlexRow } from '../../../../../utils/containers';
import TableRowTags from '../TableRowTags/TableRowTags';
import TableRowButtons from '../TableRowButtons/TableRowButtons';
import pensilIco from '../../../../../assets/pencil_ico.svg';
import deleteIco from '../../../../../assets/delete_ico.svg';

const TableRowFooter = ({ rowFooter, item, i, deleteItem, editItem }) => {
  if (rowFooter) {
    return (
      <FlexRow className="TableStyle__row-footer">
        <TableRowTags item={item} i={i} />
        <TableRowButtons
          buttons={[
            { icon: pensilIco, handler: () => editItem() },
            { icon: deleteIco, handler: () => deleteItem() },
          ]}
        />
      </FlexRow>
    );
  }
};

export default TableRowFooter;
