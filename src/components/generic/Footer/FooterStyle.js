import styled from 'styled-components';
import {FlexRow} from '../../../utils/containers';
import colors from "../../../utils/colors";

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
`;

export default FooterStyle;