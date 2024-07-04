import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';
import theme from '../../utils/theme';

const ChallengesStyle = styled(FlexColumn)`
  margin: 0 auto;
  max-width: 1100px;
  
  .amus {
    display: none;
  }

  h1 {
    margin-top: 100px;
  }

  @media (${theme.desktop2}) {
    .amus {
      display: flex;
      position: absolute;
      left: -300px;
      margin-bottom: 400px;
    }
  }
`;

export default ChallengesStyle;
