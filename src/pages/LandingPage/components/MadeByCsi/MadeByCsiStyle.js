import styled from 'styled-components';
import { FlexColumn } from '../../../../utils/containers';

const MadeByCsiStyle = styled(FlexColumn)`
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  gap: ${({ horizontal }) => (horizontal ? '50px' : '48px')};
  align-items: ${({ horizontal }) => (horizontal ? 'center' : 'flex-start')};
  cursor: pointer;
  * {
    cursor: pointer;
  }
  .MadeByCsiStyle__csiLogo {
    transition: background-color 0.4s ease-in-out;
  }
  .MadeByCsiStyle__logo-container {
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    .MadeByCsiStyle__csiLogo {
      background-color: #e52713;
    }
    .MadeByCsiStyle__logo-container {
      transform: scale(1.05);
    }
  }
`;

export default MadeByCsiStyle;
