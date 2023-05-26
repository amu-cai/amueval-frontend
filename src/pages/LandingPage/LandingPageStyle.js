import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';

const LandingPageStyle = styled(FlexColumn)`
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 0 32px;

  .LandingPageStyle__main-container {
    max-width: 452px;
    gap: 48px;
    width: 80%;
  }

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    padding: 0 124px 124px;
    .LandingPageStyle__main-container {
      max-width: none;
      gap: 124px;
    }
  }
`;

export default LandingPageStyle;
