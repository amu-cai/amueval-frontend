import styled from 'styled-components';
import { FlexColumn } from '../../../../utils/containers';

const HeroStyle = styled(FlexColumn)`
  justify-content: flex-start;
  gap: 24px;
  max-width: 452px;

  @media (min-width: 1441px) {
    max-width: none;
  }

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    justify-content: center;
    width: 100%;
    height: calc(100vh - 48px);
  }

  .HeroStyle__title-paragraph {
    font-size: 24px;
    line-height: 36px;
    font-weight: 300;
    max-width: 580px;

    @media (min-width: 1441px) {
      max-width: 600px;
    }
  }
`;

export default HeroStyle;
