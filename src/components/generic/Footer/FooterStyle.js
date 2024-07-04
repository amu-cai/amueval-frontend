import styled from 'styled-components';
import {FlexRow} from '../../../utils/containers';
import colors from "../../../utils/colors";
import theme from "../../../utils/theme";

const FooterStyle = styled(FlexRow)`
  margin-top: 64px;
  .FooterStyle__wrapper {
    height: 300px;
  }

  .FooterStyle__wrapper section {
    height: 100%;
    padding: 64px 24px 0 24px;
  }

  .FooterStyle__csi_logo img{
    margin: 0 32px 16px 32px;
  }

  .FooterStyle__wrapper h3 {
    margin-bottom: 12px;
  }

  section a {
    font-size: 16px;
    color: ${colors.black700};
    line-height: 24px;
  }

  @media (${theme.tablet}) {
    section:nth-child(2) {
      margin-right: 40px;
      margin-left: 10px;
    }

    .FooterStyle__csi_logo {
      margin: 0 20px;
    }
  }
  @media (${theme.desktop2}) {
    section:nth-child(2) {
      margin-right: 100px;
      margin-left: 40px;
    }
    
    .FooterStyle__csi_logo {
      margin: 0 40px;
    }
  }
  
  h2 {
    margin-bottom: 40px;
  }
`;

export default FooterStyle;