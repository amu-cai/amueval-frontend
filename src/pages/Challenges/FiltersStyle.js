import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';
// import theme from '../../utils/theme';

const FiltersStyle = styled(FlexColumn)`
  margin-top: 60px;
  width: 1100px;

  .inputSearch {
    width: 290px;
    margin-bottom: 10px;
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

  .sortDeadline {
    margin-left: 10px;
    padding-left: 10px;
    left: -6px;
    position: absolute;
  }
  
  .sorting {
    margin-bottom: 10px;
  }
  
  .MuiListSubheader-sticky {
    background: #1B998B;
  }

`;

export default FiltersStyle;
