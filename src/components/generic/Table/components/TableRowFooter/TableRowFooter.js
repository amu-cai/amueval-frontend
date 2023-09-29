import React from 'react';
import { FlexRow } from '../../../../../utils/containers';
import TableRowTags from '../TableRowTags/TableRowTags';
import TableRowButtons from '../TableRowButtons/TableRowButtons';
import pensilIco from '../../../../../assets/pencil_ico.svg';
import deleteIco from '../../../../../assets/delete_ico.svg';
import KeyCloakService from '../../../../../services/KeyCloakService';

const TableRowFooter = ({ rowFooter, item, i, deleteItem, editItem }) => {
  const [profileInfo, setProfileInfo] = React.useState(null);

  React.useEffect(() => {
    KeyCloakService.getProfileInfo(setProfileInfo);
  }, []);

  const isActive = () => {
    if (!KeyCloakService.isLoggedIn()) return false;
    if (profileInfo) {
      if (
        profileInfo?.preferred_username !== item.submitter &&
        profileInfo?.name !== item.submitter
      )
        return false;
    }
    return true;
  };

  if (rowFooter) {
    return (
      <FlexRow className="TableStyle__row-footer">
        <TableRowTags item={item} i={i} />
        <TableRowButtons
          buttons={[
            { icon: pensilIco, handler: () => editItem() },
            { icon: deleteIco, handler: () => deleteItem() },
          ]}
          active={isActive()}
          i={i}
        />
      </FlexRow>
    );
  }
};

export default TableRowFooter;
