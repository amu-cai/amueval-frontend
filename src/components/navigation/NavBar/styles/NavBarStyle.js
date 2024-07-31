import styled from 'styled-components';
import { Container } from '../../../../utils/containers';
import theme from "../../../../utils/theme";

const NavBarStyle = styled(Container)`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.navShadow};
  padding: 0 16px;
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100%;

  .ul-desktop {
    display: none;
  }
  height: 80px;
  
  @media (min-width: ${({ theme }) => theme.overMobile}) {
    padding: 0 60px;

    .ul-desktop {
      display: flex;

      a,
      button {
        cursor: pointer;

        div {
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
        }

        li {
          cursor: pointer;
          transition: color 0.3s ease-in-out;
        }

        &:hover {
          div {
            background-color: ${({ theme }) => theme.colors.green};
          }

          li {
            color: ${({ theme }) => theme.colors.green};
          }
        }
      }
    }
  }
  
  .ul-desktop span {
    color: ${theme.colors.black700};
    text-decoration: underline;
    font-weight: 400;
    font-size: 18px;
    font-family: 'coolvetica-condensed-regular', sans-serif;
  }
`;

export default NavBarStyle;
