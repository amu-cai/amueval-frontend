import styled from 'styled-components';
import { FlexColumn } from '../../../utils/containers';

const LoggedBarStyle = styled(FlexColumn)`
  width: 360px;
  height: calc(100vh - 48px);
  position: fixed;
  top: 50px;
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
`;

export default LoggedBarStyle;
