import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';

const ChallengesStyle = styled(FlexColumn)`
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 90px 0 32px 0;

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    padding: 112px 0 82px 310px;
  }

  .ChallengesStyle__page-container {
    align-items: flex-start;
    width: 80%;
    h1 {
      margin: 0 0 20px 0;
      @media (min-width: ${({ theme }) => theme.overMobile}) {
        margin: 0;
      }
    }
  }

  .ChallengesStyle__page-header-container {
    width: 100%;
    gap: 32px;
  }

  .ChallengesStyle__page-header {
    align-items: flex-start;
    gap: 32px;
    width: 75%;
    max-width: 720px;
  }

  .ChallengesStyle__header-content {
    margin: 0 0 12px 0;
    max-width: 600px;
  }

  .ChallengesStyle__main-image {
    width: 25%;
    height: 160px;
    background-color: ${({ theme }) => theme.colors.green};
    mask-size: contain;
  }
`;

export default ChallengesStyle;
