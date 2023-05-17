import styled from 'styled-components';
import { FlexColumn } from '../../../../utils/containers';

const SubmissionLoadingStyle = styled(FlexColumn)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default SubmissionLoadingStyle;
