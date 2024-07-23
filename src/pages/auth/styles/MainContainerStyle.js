import styled from 'styled-components';
import { FlexColumn } from '../../../utils/containers';
import loginRegisterBg from '../../../assets/login_register_bg.svg';
import loginRegisterSideBg from '../../../assets/login_register_side_bg.svg';
import forgotPasswordBg from '../../../assets/forgot_password_bg.svg';
import theme from "../../../utils/theme";

const MainContainerStyle = styled(FlexColumn)`
  width: 100vw;
  height: calc(100vh - 80px);
  margin-top: 80px;
  
  .wrapper {
    width: 1000px;
    height: 680px;
    background-image: url(${loginRegisterBg});
    border-radius: 20px;
    box-shadow: 0 2px 8px 0 #00000026;
  }
  
  .sideSection {
    width: 380px;
    height: 680px;
    margin: ${(props) => props.register ? '0 auto 0 0' : '0 0 0 auto'};
    background-image: url(${loginRegisterSideBg});
    z-index: 999;
    text-align: center;
    padding: 0 45px;
    border-radius: ${(props) => props.register ? '20px 0 0 20px' : '0 20px 20px 0'};
  }
  
  .sideSection h1 {
    color: ${theme.colors.white};
    text-align: center;
    font-family: 'coolvetica-condensed-regular', sans-serif;
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: 75%;
    letter-spacing: 1.2px;
    margin: 5px 0;
  }
  
  .sideSection p {
    color: ${theme.colors.white};
    font-family: 'Inter', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 121.429%;
    letter-spacing: -0.44px;
  }
  
  .sideSection button {
    border: 2px solid ${theme.colors.white};
  }
  
  .mainSection {
    width: 336px;
    margin: ${(props) => props.register ? '150px 136px 0 0' : '150px 0 0 136px'};
  }
  
  .mainSection h1 {
    color: ${theme.colors.green700};
    text-align: center;
    font-family: 'coolvetica-condensed-regular', sans-serif;
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: 75%;
    letter-spacing: 1.2px;
  }
  
  .mainSection .forgotPasswordLink {
    color: #61615F;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 121.429%;
    letter-spacing: -0.28px;
    text-decoration-line: underline;
    margin: 20px 0 0 0;
    cursor: pointer;
  }

  .mainSection button {
    border: 2px solid ${theme.colors.green700};
    margin-top: 20px;!important;
  }
  
  .MuiInputAdornment-positionEnd:hover {
    cursor: pointer;
  }
  
  .forgotPassword {
    width: 440px;
    margin: 350px 100px 0 0;
  }
  
  .forgotPassword .description {
    width: 310px;
    color: ${theme.colors.green700};
    margin: 0 0 16px 0;
  }
  
  .forgotPasswordBg {
    background-image: url(${forgotPasswordBg});
  }
`;

export default MainContainerStyle;
