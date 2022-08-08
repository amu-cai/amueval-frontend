import styled from 'styled-components';
import {FlexColumn} from '../../../utils/containers';

const MainContainerStyle = styled(FlexColumn)`
  width: 100%;
  height: calc(100vh - 48px);

  @media (min-width: ${({theme}) => theme.overMobile}) {
    height: calc(100vh - 72px);
  }
`;

export default MainContainerStyle;