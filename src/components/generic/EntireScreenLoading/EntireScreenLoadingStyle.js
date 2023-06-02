import styled from 'styled-components';
import { FlexColumn } from '../../../utils/containers';

const EntireScreenLoadingStyle = styled(FlexColumn)`
  width: 100%;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default EntireScreenLoadingStyle;
