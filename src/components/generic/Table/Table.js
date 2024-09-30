import React from 'react';
import Media from 'react-media';
import theme from '../../../utils/theme';
import MobileTable from './components/MobileTable';
import DesktopTable from './components/DesktopTable';
import EditPopUp from './components/EditPopUp';
import DeletePopUp from './components/DeletePopUp';

const Table = ({
  items,
  orderedKeys,
  sortByUpdate,
  subpage,
  challengeName,
  rowFooter = true,
  users = [],
  setRightsUpdateResult = null
}) => {
  const [, updateState] = React.useState();
  const tableUpdate = React.useCallback(() => updateState({}), []);
  const [deletedItems, setDeletedItems] = React.useState([]);
  const [deletePopUp, setDeletePopUp] = React.useState(false);
  const [editPopUp, setEditPopUp] = React.useState(false);
  const [itemToHandle, setItemToHandle] = React.useState(null);
  const itemsToRender = items.filter((item) => !deletedItems.includes(item));

  return (
    <>
      <DeletePopUp
        item={itemToHandle}
        setDeletePopUp={setDeletePopUp}
        deletePopUp={deletePopUp}
        setDeletedItems={setDeletedItems}
        deletedItems={deletedItems}
      />
      <EditPopUp
        item={itemToHandle}
        setEditPopUp={setEditPopUp}
        editPopUp={editPopUp}
      />
      <Media query={theme.mobile}>
        <MobileTable
          elements={itemsToRender}
          deletePopUp={deletePopUp}
          orderedKeys={orderedKeys}
          rowFooter={rowFooter}
          deletedItems={deletedItems}
          itemToHandle={itemToHandle}
          sortByUpdate={sortByUpdate}
          subpage={subpage}
          challengeName={challengeName}
          tableUpdate={tableUpdate}
          setItemToHandle={setItemToHandle}
          setEditPopUp={setEditPopUp}
          setDeletePopUp={setDeletePopUp}
          setDeletedItems={setDeletedItems}
        />
      </Media>
      <Media query={theme.desktop}>
        <DesktopTable
          elements={itemsToRender}
          deletePopUp={deletePopUp}
          orderedKeys={orderedKeys}
          rowFooter={rowFooter}
          deletedItems={deletedItems}
          itemToHandle={itemToHandle}
          sortByUpdate={sortByUpdate}
          subpage={subpage}
          challengeName={challengeName}
          tableUpdate={tableUpdate}
          setItemToHandle={setItemToHandle}
          setEditPopUp={setEditPopUp}
          setDeletePopUp={setDeletePopUp}
          setDeletedItems={setDeletedItems}
          users={users}
          setRightsUpdateResult={setRightsUpdateResult}
        />
      </Media>
    </>
  );
};

export default Table;
