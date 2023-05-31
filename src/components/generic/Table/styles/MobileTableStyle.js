import styled from 'styled-components';
import { Container } from '../../../../utils/containers';

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

  display: block;

  thead,
  tbody,
  th,
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
    font-weight: 400;
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }
`;

export default MobileTableStyle;
