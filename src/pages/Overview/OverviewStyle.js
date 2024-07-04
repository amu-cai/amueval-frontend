import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';
import theme from "../../utils/theme";


const OverviewStyle = styled(FlexColumn)`
  width: 100%;
  margin-bottom: 40px;
  
  .spacer {
    width: 100%;
    height: 1px;
    background: ${theme.colors.black700};
    margin-top: 20px;
    margin-bottom: 20px;
  }

  p {
    color: #5E5E5E;
    font-size: 14px;
    margin-right: auto;
  }
  
  h2 {
    margin-bottom: 14px;
  }
`;

export default OverviewStyle;
