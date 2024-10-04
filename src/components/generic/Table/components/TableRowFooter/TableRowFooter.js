import React from 'react';
import {FlexRow} from '../../../../../utils/containers';
// import TableRowTags from '../TableRowTags/TableRowTags';
import TableRowButtons from '../TableRowButtons/TableRowButtons';
// import pencilIco from '../../../../../assets/pencil_ico.svg';
import deleteIco from '../../../../../assets/delete_ico.svg';
const TableRowFooter = ({
                            rowFooter,
                            item,
                            i,
                            subpage,
                            deleteItem,
                            editItem,
                        }) => {

    if (rowFooter) {
        return (
            <FlexRow className="TableStyle__row-footer">
                {/*<TableRowTags item={item} i={i}/>*/}
                <TableRowButtons
                    buttons={[
                        // { title: 'edit', icon: pencilIco, handler: () => editItem() },
                        { title: 'delete', icon: deleteIco, handler: () => deleteItem() },
                    ]}
                    i={i}
                />
            </FlexRow>
        );
    }

    return null;
};

export default TableRowFooter;
