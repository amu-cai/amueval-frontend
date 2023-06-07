import styled from 'styled-components';

const NewTableStyle = styled.table`
  border-collapse: separate;
  width: 100%;

  .NewTableStyle__th {
    position: relative;
    cursor: pointer;
    * {
      cursor: pointer;
    }
  }

  .NewTableStyle__tr-header {
    height: 48px;
    position: relative;
  }

  .NewTableStyle__tr {
    position: relative;
    height: 72px;
  }

  .NewTableStyle__td {
    padding: 0 0 32px 0;
    margin: 0 0 0 2px;
  }

  .NewTableStyle__line {
    position: absolute;
    top: 94%;
    bottom: ${({ bottom }) => (bottom ? bottom : 'auto')};
    left: -6px;
    width: calc(100% + 12px);
    background-color: ${({ theme }) => theme.colors.dark04};
    height: 3px;
    box-shadow: ${({ theme }) => theme.shadow};
  }

  .NewTableStyle__tag {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.green08};
    padding: 4px;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 600;
  }

  .NewTableStyle__row-footer {
    width: 100%;
    justify-content: space-between;
    position: absolute;
    top: 55%;
    left: 0;
    z-index: 2;
  }

  .NewTableStyle__tags-container {
    gap: 4px;
    padding: 0 2px;
  }
`;

export default NewTableStyle;
