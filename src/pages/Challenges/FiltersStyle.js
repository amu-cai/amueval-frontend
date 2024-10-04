import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';
import theme from "../../utils/theme";
// import theme from '../../utils/theme';

const FiltersStyle = styled(FlexColumn)`
  margin-top: 60px;
  width: 1100px;

  .inputSearch {
    width: 290px;
    margin-bottom: 8px;
    margin-top: 6px;
  }
  
  .inputSearchAdminPanel {
    width: 100%;
    margin-bottom: 8px;
    margin-top: 6px;
  }
  
  .filters {
    margin-bottom: 12px;
  }
  
  .metricFilter {
    width: 300px;
  }
  
  .typeFilter {
    width: 190px;
    margin-right: 20px;
  }
  
  .sorting img {
    margin-left: 8px;
  }
  
  .sorting {
    margin-bottom: 10px;
    margin-top: 4px;
  }
  
  .MuiListSubheader-sticky {
    background: #1B998B;
  }
  
  .sectionHeader {
    border-bottom: 1px solid ${theme.colors.green700};
    margin-bottom: 4px;
  }

  .sectionHeader span {
    margin-right: auto;
    margin-left: 2px;
    color: ${theme.colors.black700};
    margin-bottom: 2px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: -0.02em;
    text-align: left;

  }

`;

export default FiltersStyle;
