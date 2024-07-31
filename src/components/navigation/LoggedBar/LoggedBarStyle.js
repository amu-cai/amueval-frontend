import styled from 'styled-components';
import { FlexColumn } from '../../../utils/containers';
import theme from "../../../utils/theme";

const LoggedBarStyle = styled(FlexColumn)`
  width: 210px;
  height: 100vh;
  position: fixed;
  right: 0;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 3;

  button,
  a {
    cursor: pointer;

    li {
      transition: color 0.3s ease-in-out;
    }

    div {
      transition: background-color 0.3s ease-in-out;
    }

    &:hover {
      li {
        color: ${({ theme }) => theme.colors.green};
      }

      div {
        background-color: ${({ theme }) => theme.colors.green};
      }
    }

    * {
      cursor: pointer;
    }
  }
  
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
    font-size: 18px;
    font-weight: 400;
    font-family: 'coolvetica-condensed-regular', sans-serif;
    margin-bottom: 16px;
    text-decoration: underline;
    cursor: pointer;
  }
  
  .sideMenuList {
    margin-left: 18px;
  }

  .toggleMenu {
    cursor: pointer;
  }
`;

export default LoggedBarStyle;
