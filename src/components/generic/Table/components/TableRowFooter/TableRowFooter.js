import React from 'react';
import {FlexRow} from '../../../../../utils/containers';
// import TableRowTags from '../TableRowTags/TableRowTags';
import TableRowButtons from '../TableRowButtons/TableRowButtons';
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

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
                        {title: 'edit', icon: <EditIcon/>, handler: () => editItem()},
                        {title: 'delete', icon: <DeleteIcon/>, handler: () => deleteItem()},
                    ]}
                    i={i}
                />
            </FlexRow>
        );
    }

    return null;
};

export default TableRowFooter;
