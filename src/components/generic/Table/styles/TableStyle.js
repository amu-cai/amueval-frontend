import styled from 'styled-components';
import theme from "../../../../utils/theme";

const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: auto;

  .TableStyle__sort-button {
    cursor: pointer;
    * {
      cursor: pointer;
    }
  }

  .TableStyle__tr-header {
    height: 48px;
    position: relative;
    border-bottom: .5px solid ${theme.colors.black700};
  }

  .TableStyle__tr {
    position: relative;
    height: ${({ rowFooter }) => (rowFooter ? '72px' : 'auto')};
    font-weight: bolder;
    font-family: 'Inter', sans-serif;
  }

  .TableStyle__td {
    //max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    padding-right: 8px;
  }

  .TableStyle__td:last-child {
    //max-width:150px;
    //min-width:150px;
    //width:150px;
  }

  .TableStyle__td:first-child {
    padding-left: 40px;
  }

  .TableStyle_line {
    position: absolute;
    top: 94%;
    bottom: ${({ bottom }) => (bottom ? bottom : 'auto')};
    left: -6px;
    width: calc(100% + 12px);
    background-color: ${({ theme }) => theme.colors.dark04};
    height: 3px;
    box-shadow: ${({ theme }) => theme.shadow};
  }

  .TableStyle__tag {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.green08};
    padding: 4px;
    border-radius: 2px;

    font-size: 12px;
    font-weight: 600;
  }

  .odd {
    background: #E0FFF4;
  }

  .even {
    background: #F5FFFD;
  }

  .TableStyle__th span{
    color: ${theme.colors.black500};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .TableStyle__th:first-child{
    padding-left: 40px;
  }
  
  .sortHeaderName {
    margin-left: 8px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .TableStyle__row-footer, .TableStyle__tr {
    height: 72px;
  }
  
  .TableStyle__row-footer {
    display: inline-block;
    //align-content: end;
    float: right;
    padding: 24px 16px;
  }
  
  .TableStyle__row-footer svg {
    color: ${theme.colors.green700};
  }
  
  .TableStyle__td:has(.roleTable){
  //.roleTable {
    width: 40px;
    position: relative;
    left: -10px;
  }
  
`;

export default TableStyle;