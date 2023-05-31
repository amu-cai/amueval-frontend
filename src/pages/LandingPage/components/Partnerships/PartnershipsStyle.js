import styled from 'styled-components';
import { FlexColumn } from '../../../../utils/containers';

const PartnershipsStyle = styled(FlexColumn)`
  justify-content: flex-start;
  gap: 32px;
  margin: 0 0 48px 0;

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    gap: 64px;
    margin: 0;

    .grid {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 64px;
    }
  }
`;

export default PartnershipsStyle;
