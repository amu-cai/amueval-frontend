import React from 'react';
import {FlexRow,} from '../../../../../utils/containers';

const TableRowButtons = ({buttons, i, active, buttonAccessMessage}) => {
    return (
        <FlexRow gap="12px" position='relative'>
            {buttons.map((button, j) => {
                return (
                    button.icon
                );
            })}
        </FlexRow>
    );
};

export default TableRowButtons;
