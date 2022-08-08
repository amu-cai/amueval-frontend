import styled from 'styled-components';
import {FlexColumn} from '../../../utils/containers';

const OptionsContainerStyle = styled(FlexColumn)`
  width: 260px;
  border: 1px solid ${({theme}) => theme.colors.dark03};
  gap: 32px;
  padding: 32px;
  box-shadow: ${({theme}) => theme.shadow};

  @media (min-width: ${({theme}) => theme.overMobile}) {
    width: 400px;
    height: 382px;
  }
`;

export default OptionsContainerStyle;