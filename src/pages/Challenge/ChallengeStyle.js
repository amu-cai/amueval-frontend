import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';
import theme from "../../utils/theme";

const ChallengeStyle = styled(FlexColumn)`
  max-width: 1000px;
  margin: 0 auto 0 auto;
  
  .challengeImg {
    margin-right: 20px;
  }
  
  h1, img {
    margin-top: 100px;
  }
  
  .spacer {
    width: 100%;
    height: 1px;
    background: ${theme.colors.black700};
    margin-bottom: 20px;
  }
  
  .challengeName {
    margin-top: 40px;
  }
`;

export default ChallengeStyle;
