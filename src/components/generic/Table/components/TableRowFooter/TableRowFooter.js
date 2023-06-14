import React from 'react';
import { FlexRow } from '../../../../../utils/containers';
import TableRowTags from '../TableRowTags/TableRowTags';
import TableRowButtons from '../TableRowButtons/TableRowButtons';
import pensilIco from '../../../../../assets/pencil_ico.svg';
import deleteIco from '../../../../../assets/delete_ico.svg';

const TableRowFooter = ({ rowFooter, item, i }) => {
  if (rowFooter) {
    return (
      <FlexRow className="TableStyle__row-footer">
        <TableRowTags item={item} i={i} />
        <TableRowButtons
          buttons={[
            { icon: pensilIco, handler: () => console.log('edit') },
            { icon: deleteIco, handler: () => console.log('delete') },
          ]}
        />
      </FlexRow>
    );
  }
};

export default TableRowFooter;
