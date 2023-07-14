import React from 'react';
import TableStyle from './styles/TableStyle';
import TableHeader from './components/TableHeader';
import TableRowItems from './components/TableRowItems';
import RowsBackgroundStyle from './styles/RowsBackgroundStyle';
import TableRowFooter from './components/TableRowFooter';
import deleteSubmission from '../../../api/deleteSubmission';
import theme from '../../../utils/theme';
import DeletePopUp from './components/DeletePopUp/DeletePopUp';

const Table = ({
  items,
  orderedKeys,
  popUpMessageHandler,
  sortByUpdate,
  rowFooter = true,
}) => {
  const [, updateState] = React.useState();
  const tableUpdate = React.useCallback(() => updateState({}), []);
  const [deletedItems, setDeletedItems] = React.useState([]);
  const [deletePopUp, setDeletePopUp] = React.useState(false);
  const itemsToRender = items.filter((item) => !deletedItems.includes(item));

  const deleteItem = async (item) => {
    await deleteSubmission(
      item,
      deletedItems,
      setDeletedItems,
      popUpMessageHandler,
      theme
    );
  };

  return (
    <TableStyle rowFooter={rowFooter}>
      <TableHeader
        orderedKeys={orderedKeys}
        sortByUpdate={sortByUpdate}
        tableUpdate={tableUpdate}
      />
      {itemsToRender.map((item, i) => {
        return (
          <tr key={`table-row-${i}`} className="TableStyle__tr">
            <DeletePopUp
              item={item}
              setDeletePopUp={setDeletePopUp}
              deletePopUp={deletePopUp}
              deleteItem={deleteItem}
            />
            <TableRowItems orderedKeys={orderedKeys} item={item} i={i} />
            <TableRowFooter
              deleteItem={() => setDeletePopUp(true)}
              rowFooter={rowFooter}
              item={item}
              i={i}
            />
            <RowsBackgroundStyle i={i} />
          </tr>
        );
      })}
    </TableStyle>
  );
};

export default Table;
