import React from 'react';
import { FlexRow } from '../../../../../utils/containers';
import TableRowTags from '../TableRowTags/TableRowTags';
import TableRowButtons from '../TableRowButtons/TableRowButtons';
import pensilIco from '../../../../../assets/pencil_ico.svg';
import deleteIco from '../../../../../assets/delete_ico.svg';
import KeyCloakService from '../../../../../services/KeyCloakService';

const TableRowFooter = ({ rowFooter, item, i, subpage, deleteItem, editItem, profileInfo }) => {
  const buttonsActive = () => {
    if (!KeyCloakService.isLoggedIn()) return false;
    if (subpage === "MY_ENTRIES") {
      return true;
    } else {
      if (
        profileInfo?.preferred_username !== item.submitter &&
        profileInfo?.name !== item.submitter
      ) return false;
    }
    return true;
  };

  const getButtonAccessMessage = () => {
    if (!KeyCloakService.isLoggedIn()) {
      return "You must be logged in to use this option.";
    } 
    if (subpage === "MY_ENTRIES") {
      return "default";
    } else {
      if (profileInfo?.preferred_username !== item.submitter &&
        profileInfo?.name !== item.submitter) {
        return "You don't have permission to use this option.";
      }
    }
    return "default";
  };

  if (rowFooter) {
    return (
      <FlexRow className="TableStyle__row-footer">
        <TableRowTags item={item} i={i} />
        <TableRowButtons
          buttons={[
            { title: "edit", icon: pensilIco, handler: () => editItem() },
            { title: "delete", icon: deleteIco, handler: () => deleteItem() },
          ]}
          active={buttonsActive()}
          buttonAccessMessage={getButtonAccessMessage()}
          i={i}
        />
      </FlexRow>
    );
  }
};

export default TableRowFooter;
