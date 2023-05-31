import styled from 'styled-components';
import { FlexRow } from '../../../../utils/containers';

const TableLine = styled(FlexRow)`
  position: absolute;
  top: ${({ top }) => (top ? top : 'auto')};
  bottom: ${({ bottom }) => (bottom ? bottom : 'auto')};
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark04};
  height: ${({ height }) => (height ? height : '1px')};
`;

export default TableLine;
