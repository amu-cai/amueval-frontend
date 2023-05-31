import styled from 'styled-components';
// import { ImageBackground } from '../../../../utils/containers';
import { ImageBackground } from '../../../../utils/containers';

const MotivationStyle = styled(ImageBackground)`
  align-items: flex-start;
  gap: 24px;
  width: 100%;

  .MotivationStyle__list {
    gap: 16px;
    align-items: flex-start;
  }

  .MotivationStyle__item {
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .MotivationStyle__paragraph {
    width: 90%;
  }

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    gap: 48px;
    width: 612px;
    height: 458px;
    align-items: center;

    .MotivationStyle__list {
      gap: 22px;
    }

    .MotivationStyle__item {
      gap: 16px;
      justify-content: flex-start;
      align-items: center;
    }

    .MotivationStyle__paragraph {
      width: auto;
      max-width: 380px;
    }
  }
`;

export default MotivationStyle;
