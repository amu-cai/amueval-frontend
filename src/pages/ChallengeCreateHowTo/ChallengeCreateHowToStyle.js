import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';
import theme from "../../utils/theme";

const ChallengeCreateHowToStyle = styled(FlexColumn)`
  padding: 0 16px 16px 16px;
  
  .wrapper {
    position: relative;
    max-width: 950px;
    margin-top: 100px;
  }
  .wrapper p {
    line-height: 36px;
    font-size: 24px;
    margin-right: auto;
  }
  
  .newChallenge p {
    line-height: 48px;
  }
  
  .wrapper h1 {
    margin-bottom: 40px;
  }
  
  .wrapper .highlight {
    color: ${theme.colors.green700};
    font-weight: bold;
  }

  .wrapper h2 {
    margin-top: 24px;
  }
  
  .fieldsList {
    margin-left: 24px;
  }
  
  .fieldsList p {
    line-height: 38px;
  }

  .previousIcon {
    display: none;
  }
  
  @media (min-width: 1200px) {
    .previousIcon {
      display: block;
      position: sticky;
      position: -webkit-sticky;
      top: 180px;
      left: 60px;
      margin-right: auto;
      cursor: pointer;
  }
`;

export default ChallengeCreateHowToStyle;
