import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';

const SubmitStyle = styled(FlexColumn)`
  margin: 40px 0 0 0;
  padding: 24px;
  gap: 64px;
  max-width: 624px;
  width: 100%;
  align-items: flex-start;

  .SubmitStyle__header {
    width: 100%;
    text-align: center;
  }

  .SubmitStyle__form {
    width: 100%;
    gap: 32px;
  }
`;

export default SubmitStyle;
