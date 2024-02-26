import styled from 'styled-components';
import menuButtonIcon from '../../../../assets/menu-button.svg';
import { Container } from '../../../../utils/containers';

const MenuButtonStyle = styled(Container)`
  width: 20px;
  height: 14px;
  background-image: url(${menuButtonIcon});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-top: 4px;

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    display: none;
  }
`;

export default MenuButtonStyle;
