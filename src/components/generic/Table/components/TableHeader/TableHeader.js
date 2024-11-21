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
              if (!keyValue.sortable) {
                return;
              }
              if (activeIcon === i) {
                let newRotateActiveIcon = !rotateActiveIcon;
                setRotateActiveIcon(newRotateActiveIcon);
              } else {
                setRotateActiveIcon(false);
              }
              setActiveIcon(i);
              if (keyValue.key === 'additional_metric') {
                props.sortByUpdate(keyValue.key, keyValue.additionalMetricName);
              } else {
                props.sortByUpdate(keyValue.key);
              }
              props.tableUpdate();
            }}
          >
            <FlexRow as="span" alignmentX="flex-start" gap="8px" width="100%">
              {keyValue.sortable ? (
                  <FlexRow
                      className="TableStyle__sort-button"
                      column={keyValue.key}
                  >
                    <ColumnFilterIcon
                        index={i}
                        active={activeIcon}
                        rotateIcon={rotateActiveIcon}
                    />
                    <span className="sortHeaderName">{keyValue.name}</span>
                  </FlexRow>
              ) :
                  <span>
                    {keyValue.name}
                  </span>}
            </FlexRow>
          </th>
        );
      })}
    </tr>
  );
};

export default TableHeader;
