import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';
// import theme from '../../utils/theme';

const FiltersStyle = styled(FlexColumn)`
  margin-top: 60px;
  width: 1100px;

  .inputSearch {
    width: 300px;
    margin-bottom: 10px;
  }
  
  .filters {
    margin-bottom: 12px;
  }
  
  .metricFilter {
    width: 250px;
    margin-right: 33px;
  }
  
  .typeFilter {
    width: 190px;
    margin-right: 33px;
  }
  
  .sorting img {
    margin-left: 8px;
  }

  .sortParticipants {
  }

  .sortDeadline {
    margin-left: 10px;
    padding-left: 10px;
    left: -6px;
    position: absolute;
  }
  
  .sorting {
    width: 100%;
    padding-left: 22px;
    margin-bottom: 10px;
  }


`;

export default FiltersStyle;
