import React from 'react';
import TableStyle from './styles/TableStyle';
import TableHeader from './components/TableHeader';
import TableRowItems from './components/TableRowItems';
import RowsBackgroundStyle from './styles/RowsBackgroundStyle';
import TableRowFooter from './components/TableRowFooter';
import KeyCloakService from '../../../services/KeyCloakService';
import deleteSubmission from '../../../api/deleteSubmission';
import theme from '../../../utils/theme';

const Table = ({ items, orderedKeys, popUpMessageHandler, sortByUpdate, rowFooter = true }) => {
  const [, updateState] = React.useState();
  const tableUpdate = React.useCallback(() => updateState({}), []);
  const [deletedItems, setDeletedItems] = React.useState([]);
  const itemsToRender = items.filter((item) => !deletedItems.includes(item));

  const deleteItem = async (item) => {
    if (item.submitter === KeyCloakService.getUsername()) {
      await deleteSubmission(item.id);
      let newDeletedItems = deletedItems.slice();
      newDeletedItems.push(item);
      setDeletedItems(newDeletedItems);
      popUpMessageHandler(
        'Complete',
        `Submission "${item.id}" deleted`,
      );
    }
    else {
      popUpMessageHandler(
        'Error',
        "You can't delete this submission!",
        null,
        theme.colors.red
      );
    }
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
            <TableRowItems orderedKeys={orderedKeys} item={item} i={i} />
            <TableRowFooter
              deleteItem={deleteItem}
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
