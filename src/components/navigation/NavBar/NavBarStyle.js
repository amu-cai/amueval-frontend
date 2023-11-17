import styled from 'styled-components';
import { Container } from '../../../utils/containers';

const NavBarStyle = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
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
