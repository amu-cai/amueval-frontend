import React from 'react';
import TableStyle from './styles/TableStyle';
import TableHeader from './components/TableHeader';
import TableRowItems from './components/TableRowItems';
import RowsBackgroundStyle from './styles/RowsBackgroundStyle';
import TableRowFooter from './components/TableRowFooter';
import deleteSubmission from '../../../api/deleteSubmission';

const Table = ({ items, orderedKeys, sortByUpdate, rowFooter = true }) => {
  const [, updateState] = React.useState();
  const tableUpdate = React.useCallback(() => updateState({}), []);
  const [deletedItems, setDeletedItems] = React.useState([]);
  const itemsToRender = items.filter((item) => !deletedItems.includes(item));

  const deleteItem = async (item) => {
    await deleteSubmission(item.id);
    let newDeletedItems = deletedItems.slice();
    newDeletedItems.push(item);
    setDeletedItems(newDeletedItems);
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
