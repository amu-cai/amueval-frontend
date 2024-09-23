import styled from 'styled-components';
import {Container} from '../../utils/containers';
import theme from "../../utils/theme";

const ChallengeEditStyle = styled(Container)`
  .topLabel {
    margin: 12px auto 12px 16px;
    color: ${theme.colors.black500};
    font-weight: normal;
    font-size: 16px;
  }

  .submitButton {
    margin-top: 16px;
  }

  .deadline {
    color: #1B998B;
  }

  textarea {
    box-sizing: border-box;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.colors.black500};
    border: 1px solid rgba(0, 0, 0, 0.23);
    width: 100%;
    transition: border 0.2s ease-in-out;
    box-sizing: border-box;
    margin-bottom: 12px;

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.87);
    }

    &:focus {
      outline: 2px solid ${theme.colors.green700};
      outline-offset: -2px;
    }
  }

  .error {
    border: 1px solid ${theme.colors.red};
  }

  .error::placeholder {
    color: ${theme.colors.red};
  }
`;

export default ChallengeEditStyle;
