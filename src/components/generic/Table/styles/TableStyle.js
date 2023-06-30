import styled from 'styled-components';

const TableStyle = styled.table`
  border-collapse: separate;
  border-spacing: 12px 0;
  width: 100%;

  .TableStyle__th {
    position: relative;
    cursor: pointer;
    * {
      cursor: pointer;
    }
  }

  .TableStyle__tr-header {
    height: 48px;
    position: relative;
  }

  .TableStyle__tr {
    position: relative;
    height: ${({ rowFooter }) => (rowFooter ? '72px' : 'auto')};
  }

  .TableStyle__td {
    padding: ${({ rowFooter }) => (rowFooter ? '0 0 32px 0' : '12px 0')};
    margin: 0 0 0 2px;
    min-width: 80px;
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

  .TableStyle__row-footer {
    width: 100%;
    justify-content: space-between;
    position: absolute;
    top: 55%;
    left: 0;
    z-index: 2;
  }

  .TableStyle__tags-container {
    gap: 4px;
    padding: 0 2px;
  }

  .TableStyle__sort-button {
    position: absolute;
    top: 15px;
    right: 16%;
  }
`;

export default TableStyle;
