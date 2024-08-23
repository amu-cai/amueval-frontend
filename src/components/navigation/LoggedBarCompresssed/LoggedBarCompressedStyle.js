import styled from 'styled-components';
import { FlexColumn } from '../../../utils/containers';
import theme from "../../../utils/theme";

const LoggedBarCompressedStyle = styled(FlexColumn)`
  height: 100vh;
  position: fixed;
  right: 0;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 3;
  
  .loggedBarLogo {
    width: 126px;
    height: 13px;
  }
  
  .border {
    width: 100%;
    height: 1px;
    background: ${theme.colors.black700};
  }
  
  .sideMenuItem {
    margin-bottom: 16px;
    cursor: pointer;
  }

  .toggleMenu {
    cursor: pointer;
  }

  button,
  a, a > div {
    cursor: pointer;
  }
`;

export default LoggedBarCompressedStyle;
