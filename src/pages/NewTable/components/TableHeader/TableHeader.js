import React from 'react';
import SortButtonContainerStyle from '../../styles/SortButtonContainerStyle';
import ColumnFilterIcon from '../../../../components/generic/ColumnFilterIcon';
import { FlexRow } from '../../../../utils/containers';

const TableHeader = (props) => {
  const [activeIcon, setActiveIcon] = React.useState(null);
  const [rotateActiveIcon, setRotateActiveIcon] = React.useState(false);

  return (
    <tr className="NewTableStyle__tr-header">
      {props.orderedKeys.map((keyValue, i) => {
        return (
          <th
            key={`table-header-${i}`}
            className="NewTableStyle__th"
            onClick={() => {
              if (activeIcon === i) {
                let newRotateActiveIcon = !rotateActiveIcon;
                setRotateActiveIcon(newRotateActiveIcon);
              } else {
                setRotateActiveIcon(false);
              }
              setActiveIcon(i);
              props.sortByUpdate(keyValue);
              props.tableUpdate();
            }}
          >
            {keyValue}
            <SortButtonContainerStyle as="span" column={keyValue}>
              <ColumnFilterIcon
                index={i}
                active={activeIcon}
                rotateIcon={rotateActiveIcon}
              />
            </SortButtonContainerStyle>
          </th>
        );
      })}
      <FlexRow className="NewTableStyle__line" as="td" />
    </tr>
  );
};

export default TableHeader;
