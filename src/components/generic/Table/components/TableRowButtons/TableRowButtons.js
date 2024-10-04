import React from 'react';
import {FlexRow, Svg} from '../../../../../utils/containers';
import theme from '../../../../../utils/theme';

const TableRowButtons = ({buttons, i, active, buttonAccessMessage}) => {
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
                        onClick={button.handler}
                        src={button.icon}
                        backgroundColor={theme.colors.green700}
                        cursor="pointer"
                        size="cover"
                        width={button.title === "edit" ? "16px" : "14px"}
                        height={button.title === "edit" ? "16px" : "17px"}
                    />
                );
            })}
        </FlexRow>
    );
};

export default TableRowButtons;