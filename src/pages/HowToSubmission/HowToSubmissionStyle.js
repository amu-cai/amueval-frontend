import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';
import theme from "../../utils/theme";

const HowToSubmissionStyle = styled(FlexColumn)`
  .wrapper {
    max-width: 950px;
  }
  .wrapper p {
    line-height: 48px;
    font-size: 24px;
    margin-right: auto;
  }
  
  .wrapper h1 {
    margin-bottom: 40px;
  }
  
  .wrapper .highlight {
    color: ${theme.colors.green700};
    font-weight: bold;
  }
`;

export default HowToSubmissionStyle;
