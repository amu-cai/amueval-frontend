import React from 'react';
import pensilIco from '../../../assets/pencil_ico.svg';
import deleteIco from '../../../assets/delete_ico.svg';
import TableStyle from './styles/TableStyle';
import TableHeader from './components/TableHeader';
import TableRowTags from './components/TableRowTags';
import TableRowItems from './components/TableRowItems';
import TableRowButtons from './components/TableRowButtons';
import RowsBackgroundStyle from './styles/RowsBackgroundStyle';
import { FlexRow } from '../../../utils/containers';

const Table = ({ items, orderedKeys, sortByUpdate }) => {
  const [, updateState] = React.useState();
  const tableUpdate = React.useCallback(() => updateState({}), []);

  return (
    <TableStyle>
      <TableHeader
        orderedKeys={orderedKeys}
        sortByUpdate={sortByUpdate}
        tableUpdate={tableUpdate}
      />
      {items.map((item, i) => {
        return (
          <tr key={`table-row-${i}`} className="TableStyle__tr">
            <TableRowItems orderedKeys={orderedKeys} item={item} i={i} />
            <FlexRow className="TableStyle__row-footer">
              <TableRowTags item={item} i={i} />
              <TableRowButtons
                buttons={[
                  { icon: pensilIco, handler: () => console.log('edit') },
                  { icon: deleteIco, handler: () => console.log('delete') },
                ]}
              />
            </FlexRow>
            <RowsBackgroundStyle i={i} />
          </tr>
        );
      })}
    </TableStyle>
  );
};

export default Table;
