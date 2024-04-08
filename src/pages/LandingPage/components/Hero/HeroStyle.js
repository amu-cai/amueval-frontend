import styled from 'styled-components';
import { FlexColumn } from '../../../../utils/containers';
import colors from "../../../../utils/colors";

const HeroStyle = styled(FlexColumn)`
  height: 100vh;
  
  .HeroStyle__wave {
    position: absolute;
    bottom: 0;
  }
  
  .HeroStyle__wrapper {
    margin-bottom: 100px;
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
