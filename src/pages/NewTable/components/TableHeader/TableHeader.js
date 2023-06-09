import React from 'react';
import SortButtonContainerStyle from '../../styles/SortButtonContainerStyle';
import ColumnFilterIcon from '../../../../components/generic/ColumnFilterIcon';
import { FlexRow } from '../../../../utils/containers';

const TableHeader = (props) => {
  return (
    <tr className="NewTableStyle__tr-header">
      {props.orderedKeys.map((keyValue, i) => {
        return (
          <th key={`table-header-${i}`} className="NewTableStyle__th">
            {keyValue}
            <SortButtonContainerStyle as="span" column={keyValue}>
              <ColumnFilterIcon index={1} active={2} rotateIcon={false} />
            </SortButtonContainerStyle>
          </th>
        );
      })}
      <FlexRow className="NewTableStyle__line" as="td" />
    </tr>
  );
};

export default TableHeader;
