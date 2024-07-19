import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';
import theme from "../../utils/theme";

const HowToSubmissionStyle = styled(FlexColumn)`
  .wrapper {
    max-width: 950px;
    margin-bottom: 40px;
  }
  .wrapper p {
    line-height: 48px;
    font-size: 18px;
    margin-right: auto;
  }
  
  .wrapper h2 {
    margin-bottom: 20px;
  }
  
  .wrapper .highlight {
    color: ${theme.colors.green700};
    font-weight: bold;
  }
`;

export default HowToSubmissionStyle;
