import styled from 'styled-components';
import {FlexColumn} from "../../../../utils/containers";
import theme from "../../../../utils/theme";

const MotivationStyle = styled(FlexColumn)`
  .MotivationStyle__wave {
    position: absolute;
    top: 0;
    width: 100vw;
  }
  
  .MotivationStyle__text {
    margin-top: 40px;
  }
  
  .MotivationStyle__img_sm {
    margin-bottom: 40px;
  }
  
  .MotivationStyle__wrapper {
    margin-top: 100px;
  }
  
  .MotivationStyle__wrapper p {
    margin-bottom: 28px;
  }
  
  @media (${theme.mobile}) {
    .MotivationStyle__wrapper p {
      margin-bottom: 14px;
    }
  }
  @media (${theme.tablet}) {
    .MotivationStyle__wrapper p {
      margin-bottom: 20px;
    }
  }
  @media (${theme.desktop2}) {
    .MotivationStyle__wrapper p {
      margin-bottom: 28px;
    }
  }
  
`;

export default MotivationStyle;


