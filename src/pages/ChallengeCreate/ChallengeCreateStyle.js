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
      font-family: 'Inter', sans-serif;
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
    font-family: 'Inter', sans-serif;
  }
  
  .inputCopyMetricLink {
    cursor: pointer;
    padding: 0;
  }

  .metricNameLabel {
    margin-right: auto;
    color: ${theme.colors.black500};
    font-weight: normal;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
  }
  
  .MuiInputBase-multiline {
    background: #F2F2F1;
  }
`;

export default ChallengeCreateStyle;