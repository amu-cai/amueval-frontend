import React from 'react';
import { FlexRow, Svg } from '../../../../utils/containers';
import theme from '../../../../utils/theme';

const TableRowButtons = ({ buttons, i }) => {
  return (
    <FlexRow gap="12px">
      {buttons.map((button, j) => {
        return (
          <Svg
            key={`table-item-button-${i}-${j}`}
            onClick={button.handler}
            src={button.icon}
            backgroundColor={theme.colors.dark}
            cursor="pointer"
            size="cover"
            width="16px"
            height="16px"
          />
        );
      })}
    </FlexRow>
  );
};

export default TableRowButtons;
