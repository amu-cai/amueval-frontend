import styled from 'styled-components';
import {Container} from '../../utils/containers';
import theme from "../../utils/theme";

const ChallengeCreateStyle = styled(Container)`
  .topLabel {
      margin-left: 16px;
      margin-right: auto;
      color: ${theme.colors.black500};
      font-weight: normal;
      font-size: 16px;
  }
  
  .hidden {
    display: none;
  }
  
  .customizeBtn {
    margin-right: auto;
    margin-left: 30px;
  }
  
  .howToIcon {
    cursor: pointer;
    margin-left: 16px;
  }
  
  .metricParamsButton {
    color: ${theme.colors.black500};
    font-weight: normal;
    font-size: 20px;
  }
  
  .metricParamsButtonWrapper {
    margin-right: auto;
    margin-left: 2px;
    font-weight: normal;
  }

  .metricParamLabel {
    display: block;
    margin-bottom: 8px;
  }
  
  .inputCopyMetricLink {
    cursor: pointer;
  }

  .MuiList-root {
    background: red;!important;
  }
`;

export default ChallengeCreateStyle;