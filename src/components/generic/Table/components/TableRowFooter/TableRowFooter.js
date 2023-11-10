import React from 'react';
import { FlexRow } from '../../../../../utils/containers';
import TableRowTags from '../TableRowTags/TableRowTags';
import TableRowButtons from '../TableRowButtons/TableRowButtons';
import pensilIco from '../../../../../assets/pencil_ico.svg';
import deleteIco from '../../../../../assets/delete_ico.svg';
import KeyCloakService from '../../../../../services/KeyCloakService';

const TableRowFooter = ({
  rowFooter,
  item,
  i,
  subpage,
  deleteItem,
  editItem,
}) => {
  const getButtonAccessMessage = () => {
    if (!KeyCloakService.isLoggedIn()) {
      return 'You must be logged in to use this option.';
    }
    if (subpage === 'MY_ENTRIES') {
      return 'default';
    } else {
      if (!item.isOwner) {
        return "You don't have permission to use this option.";
      }
    }
    return 'default';
  };

  if (rowFooter) {
    return (
      <FlexRow className="TableStyle__row-footer">
        <TableRowTags item={item} i={i} />
        <TableRowButtons
          buttons={[
            { title: 'edit', icon: pensilIco, handler: () => editItem() },
            { title: 'delete', icon: deleteIco, handler: () => deleteItem() },
          ]}
          active={item.isOwner}
          buttonAccessMessage={getButtonAccessMessage()}
          i={i}
        />
      </FlexRow>
    );
  }
};

export default TableRowFooter;
