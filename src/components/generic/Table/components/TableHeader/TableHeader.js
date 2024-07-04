import React from 'react';
import { FlexRow } from '../../../../../utils/containers';
import ColumnFilterIcon from '../../../ColumnFilterIcon';

const TableHeader = (props) => {
  const [activeIcon, setActiveIcon] = React.useState(null);
  const [rotateActiveIcon, setRotateActiveIcon] = React.useState(false);

  return (
    <tr className="TableStyle__tr-header">
      {props.orderedKeys.map((keyValue, i) => {
        return (
          <th
            key={`table-header-${i}`}
            className="TableStyle__th"
            onClick={() => {
              if (activeIcon === i) {
                let newRotateActiveIcon = !rotateActiveIcon;
                setRotateActiveIcon(newRotateActiveIcon);
              } else {
                setRotateActiveIcon(false);
              }
              setActiveIcon(i);
              props.sortByUpdate(keyValue.key);
              props.tableUpdate();
            }}
          >
            <FlexRow as="span" alignmentX="flex-start" gap="8px" width="100%">
              {keyValue.sortable && (
                  <FlexRow
                      as="span"
                      className="TableStyle__sort-button"
                      column={keyValue.key}
                  >
                    <ColumnFilterIcon
                        index={i}
                        active={activeIcon}
                        rotateIcon={rotateActiveIcon}
                    />
                  </FlexRow>
              )}
              {keyValue.name}
            </FlexRow>
          </th>
        );
      })}
      <FlexRow className="TableStyle__line" as="td" />
    </tr>
  );
};

export default TableHeader;
