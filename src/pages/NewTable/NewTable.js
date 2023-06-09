import React from 'react';
import { FlexRow } from '../../utils/containers';
import pensilIco from '../../assets/pencil_ico.svg';
import deleteIco from '../../assets/delete_ico.svg';
import NewTableStyle from './styles/NewTableStyle';
import RowsBackgroundStyle from './styles/RowsBackgroundStyle';
import TableHeader from './components/TableHeader';
import TableRowTags from './components/TableRowTags';
import TableRowItems from './components/TableRowItems';
import TableRowButtons from './components/TableRowButtons';

const NewTable = ({ items, orderedKeys }) => {
  return (
    <NewTableStyle>
      <TableHeader orderedKeys={orderedKeys} />
      {items.map((item, i) => {
        return (
          <tr key={`table-row-${i}`} className="NewTableStyle__tr">
            <TableRowItems orderedKeys={orderedKeys} item={item} i={i} />
            <FlexRow className="NewTableStyle__row-footer">
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
    </NewTableStyle>
  );
};

export default NewTable;
