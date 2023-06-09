import styled from 'styled-components';
import { FlexRow } from '../../../../utils/containers';

const RowsBackgroundStyle = styled(FlexRow)`
  width: calc(100% + 12px);
  position: absolute;
  top: 0;
  left: -6px;
  height: 100%;
  background-color: ${({ theme, i }) =>
    i % 2 === 0 ? theme.colors.dark01 : 'transparent'};
`;

export default RowsBackgroundStyle;
