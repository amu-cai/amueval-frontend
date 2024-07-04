import styled from 'styled-components';
import { FlexColumn } from "../../../../utils/containers";
import theme from "../../../../utils/theme";

const CommercialStyle = styled(FlexColumn)`
  .CommercialStyle__text {
    max-width: 500px;
    margin-top: 80px;
  }

  .CommercialStyle__wrapper p {
    margin-bottom: 28px;
  }
  
  .CommercialStyle__wrapper p {
    margin-right: auto;
  }

  @media (${theme.mobile}) {
    .CommercialStyle__wrapper p {
      margin-bottom: 14px;
    }
  }
  @media (${theme.tablet}) {
    .CommercialStyle__wrapper p {
      margin-bottom: 20px;
    }
  }
  @media (${theme.desktop2}) {
    .CommercialStyle__wrapper p {
      margin-bottom: 28px;
    }
  }
  
  h2 {
    margin-bottom: 40px;
  }
`;

export default CommercialStyle;
