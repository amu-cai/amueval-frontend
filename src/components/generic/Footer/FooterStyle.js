import styled from 'styled-components';
import {FlexRow} from '../../../utils/containers';

const FooterStyle = styled(FlexRow)`
  margin-top: 64px;
  .FooterStyle__wrapper {
    height: 348px;
  }
  
  .FooterStyle__wrapper section {
      border-left: 1px solid;
      height: 100%;
      padding: 64px 24px 0 24px;
    }

  .FooterStyle__wrapper section:nth-child(1) {
    border-left: none;
  }
  
  .FooterStyle__csi_logo img{
    padding: 0 32px 16px 32px;
  }
  
  .FooterStyle__wrapper h3 {
    margin-bottom: 12px;
  }
`;

export default FooterStyle;
