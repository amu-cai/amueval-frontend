import React from 'react';
import { createPortal } from 'react-dom';
import TableStyle from './styles/TableStyle';
import TableHeader from './components/TableHeader';
import TableRowItems from './components/TableRowItems';
import RowsBackgroundStyle from './styles/RowsBackgroundStyle';
import TableRowFooter from './components/TableRowFooter';
import deleteSubmission from '../../../api/deleteSubmission';
import theme from '../../../utils/theme';
import PopUp from '../PopUp';
import Button from '../Button';
import { Medium, H3 } from '../../../utils/fonts';

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

  const renderDeletePopUp = (item) => {
    if (deletePopUp) {
      return createPortal(
        <PopUp
          width="40%"
          height="35vh"
          padding="36px 32px 0"
          closeHandler={() => setDeletePopUp(false)}
        >
          <H3>Warning</H3>
          <Medium>Are you sure to delete submission with id: {item.id}?</Medium>
          <Button
            handler={() => {
              setDeletePopUp(false);
              deleteItem(item);
            }}
          >
            Yes
          </Button>
          <Button handler={() => setDeletePopUp(false)}>No</Button>
        </PopUp>,
        document.body
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
              deleteItem={() => setDeletePopUp(true)}
              rowFooter={rowFooter}
              item={item}
              i={i}
            />
            {renderDeletePopUp(item)}
            <RowsBackgroundStyle i={i} />
          </tr>
        );
      })}
    </TableStyle>
  );
};

export default Table;
