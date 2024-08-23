import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';
import loginRegisterBg from '../../assets/login_register_bg.svg';
import theme from "../../utils/theme";

const ProfileStyle = styled(FlexColumn)`
  width: 100vw;
  height: calc(100vh - 80px);
  
  .wrapper {
    width: 1000px;
    height: 680px;
    background-image: url(${loginRegisterBg});
    border-radius: 20px;
    box-shadow: 0 2px 8px 0 #00000026;
  }
  
  p {
    margin: 0;
    padding: 0;
  }
  
  .stats {
    margin-top: 32px;
  }
  
  .stats .number {
    font-size: 40px;
    font-weight: bold;
  }

  .stats .text {
    font-size: 20px;
    margin: 12px auto;
  }
  
  .spacer {
    background: ${theme.colors.black700};
    width: 2px;
    height: 100%;
    margin: 0 40px;
  }
`;

export default ProfileStyle;
