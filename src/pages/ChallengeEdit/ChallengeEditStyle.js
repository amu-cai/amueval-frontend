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
    margin-bottom: 12px;
    color: #1B998B;
  }

  textarea {
    box-sizing: border-box;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    width: 100%;
    transition: border 0.2s ease-in-out;
    box-sizing: border-box;

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.87);
    }

    &:focus {
      outline: 2px solid ${theme.colors.green700};
      outline-offset: -2px;
    }
  }
`;

export default ChallengeEditStyle;
