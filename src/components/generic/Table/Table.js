import React from 'react';
import TableStyle from './styles/TableStyle';
import TableHeader from './components/TableHeader';
import TableRowItems from './components/TableRowItems';
import RowsBackgroundStyle from './styles/RowsBackgroundStyle';
import TableRowFooter from './components/TableRowFooter';

const Table = ({ items, orderedKeys, sortByUpdate, rowFooter = true }) => {
  const [, updateState] = React.useState();
  const tableUpdate = React.useCallback(() => updateState({}), []);

  return (
    <TableStyle rowFooter={rowFooter}>
      <TableHeader
        orderedKeys={orderedKeys}
        sortByUpdate={sortByUpdate}
        tableUpdate={tableUpdate}
      />
      {items.map((item, i) => {
        return (
          <tr key={`table-row-${i}`} className="TableStyle__tr">
            <TableRowItems orderedKeys={orderedKeys} item={item} i={i} />
            <TableRowFooter rowFooter={rowFooter} item={item} i={i} />
            <RowsBackgroundStyle i={i} />
          </tr>
        );
      })}
    </TableStyle>
  );
};

export default Table;
