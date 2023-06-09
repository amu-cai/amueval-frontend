import styled from 'styled-components';
import { FlexRow } from '../../../utils/containers';

const getRightAttribute = (column) => {
  const staticColumns = ['id', 'when'];
  if (staticColumns.includes(column)) return '32%';
  return '16%';
};

const SortButtonContainerStyle = styled(FlexRow)`
  position: absolute;
  top: 15px;
  right: ${({ column }) => getRightAttribute(column)};
`;

export default SortButtonContainerStyle;
