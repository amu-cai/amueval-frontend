import styled from 'styled-components';
import { FlexColumn } from '../../../../utils/containers';
import colors from "../../../../utils/colors";
import theme from "../../../../utils/theme";

const HeroStyle = styled(FlexColumn)`
  height: 100vh;
  
  .HeroStyle__wave {
    position: absolute;
    bottom: 0;
    width: 100vw;
    z-index: -1;
  }
  
  .HeroStyle__wrapper {
    margin: 0 50px;
  }
  
  .HeroStyle__see_more_btn {
    color: ${colors.green700}
  }
  
  .HeroStyle__down_arrow {
    animation: jumpInfinite 1.5s infinite;
  }
  
  .HeroStyle__see_more {
    font-size: 18px;
  }
  
  .HeroStyle__text {
    max-width: 500px;
  }

  @media (${theme.mobile}) {
    .HeroStyle_logo {
      margin-bottom: 16px;
    }
  }
  @media (${theme.tablet}) {
    .HeroStyle_logo {
      margin-bottom: 20px;
    }
    padding-bottom: 100px;
  }
  @media (${theme.desktop2}) {
    .HeroStyle_logo {
      margin-bottom: 40px;
    }
    padding-bottom: 100px;
  }
  
  @keyframes jumpInfinite {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default HeroStyle;
