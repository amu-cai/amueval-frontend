import styled from 'styled-components';
import { FlexColumn } from '../../../../utils/containers';

const TableStyle = styled(FlexColumn)`
  overflow-x: ${({ metrics }) => (metrics > 10 ? 'scroll' : 'auto')};
`;

export default TableStyle;
