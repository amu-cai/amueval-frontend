import styled from 'styled-components';
import { Container } from '../../../../utils/containers';
import colors from "../../../../utils/colors";

const NavBarStyle = styled(Container)`
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 64px;
  //   z-index: 999;
  //
  //   nav {
  //     margin: 0 auto;
  //     max-width: 1440px;
  //     padding: 0 16px;
  //     background: ${colors.white};
  //   }
  //
  // .border {
  //   border-bottom: 1px solid ${colors.black700};
  //   width: 70%;
  //   margin: 0 auto;
  // }
  //
  // .NavbarStyle__sign_in_btn {
  //   color: ${colors.black700};
  //   border: 2px solid ${colors.green500};
  //   border-radius: 40px;
  //   background: ${colors.white};
  //   padding: 8px 24px;
  // }
  //
  // .NavbarStyle__links li{
  //   color: ${colors.black900};
  //   font-size: 19px;
  // }
  
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.navShadow};
  padding: 0 16px;
  z-index: 2;

  .ul-desktop {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    height: 48px;
    padding: 0 26px;

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
`;

export default NavBarStyle;
