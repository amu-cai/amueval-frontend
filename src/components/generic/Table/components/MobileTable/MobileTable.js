import React from 'react';
import { Container } from '../../../../../utils/containers';
import styled from 'styled-components';
import DeletePopUp from '../DeletePopUp/DeletePopUp';
import TableRowItems from '../TableRowItems/TableRowItems';
import TableRowFooter from '../TableRowFooter/TableRowFooter';

const MobileTableStyle = styled(Container)`
  width: 100%;
  border-collapse: collapse;
  margin: 32px 0;
  tr:nth-of-type(odd) {
    background: ${({ theme }) => theme.colors.dark03};
  }
  th {
    background: ${({ theme }) => theme.colors.dark05};
    color: ${({ theme }) => theme.colors.white};
  }
  td,
  th {
    padding: 6px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    text-align: left;
  }
  thead,
  tbody,
  th,
  tr,
  td {
    display: block;
  }
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  td {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark01};
    position: relative;
    padding-left: 50%;
  }
  .mobile-table-header {
    font-weight: 500;
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }
  .TableStyle__row-footer {
    padding: 0 8px;
    min-height: 36px;
    justify-content: space-between;
  }
  .TableStyle__tag {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.green08};
    padding: 4px;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 600;
  }
  .TableStyle__tags-container {
    gap: 4px;
  }
`;

const MobileTable = (props) => {
  return (
    <MobileTableStyle as="table">
      {props.elements.map((item, i) => {
        return (
          <tr key={`table-row-${i}`} className="TableStyle__tr">
            <DeletePopUp
              item={item}
              setDeletePopUp={props.setDeletePopUp}
              deletePopUp={props.deletePopUp}
              deleteItem={props.deleteItem}
            />
            <TableRowItems orderedKeys={props.orderedKeys} item={item} i={i} />
            <TableRowFooter
              deleteItem={() => props.setDeletePopUp(true)}
              rowFooter={props.rowFooter}
              item={item}
              i={i}
            />
          </tr>
        );
      })}
    </MobileTableStyle>
  );
};

export default MobileTable;
