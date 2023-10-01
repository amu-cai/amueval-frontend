import React from 'react';
import { FlexRow, Svg } from '../../../../../utils/containers';
import theme from '../../../../../utils/theme';

const TableRowButtons = ({ buttons, i, active, buttonAccessMessage }) => {
  const getButtonTitle = (defaultTitle) => {
    if (buttonAccessMessage === 'default') {
      return defaultTitle;
    } else return buttonAccessMessage;
  };

  return (
    <FlexRow gap="12px" position='relative'>
      {buttons.map((button, j) => {
        return (
          <Svg
            title={getButtonTitle(button.title)}
            key={`table-item-button-${i}-${j}`}
            onClick={active ? button.handler : null}
            src={button.icon}
            backgroundColor={active ? theme.colors.dark : theme.colors.dark05}
            cursor={active ? 'pointer' : 'auto'}
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
