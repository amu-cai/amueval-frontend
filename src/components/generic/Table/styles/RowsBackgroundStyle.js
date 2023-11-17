import styled from 'styled-components';
import { FlexRow } from '../../../../utils/containers';

const RowsBackgroundStyle = styled(FlexRow)`
  width: calc(100% + 12px);
  position: absolute;
  top: 0;
  left: -6px;
  cursor: pointer;
  height: 100%;
  z-index: 2;
  background-color: ${({ theme, i }) =>
    i % 2 === 0 ? theme.colors.dark01 : 'transparent'};

  * {
    cursor: pointer;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.green03};
  }
`;

export default RowsBackgroundStyle;
