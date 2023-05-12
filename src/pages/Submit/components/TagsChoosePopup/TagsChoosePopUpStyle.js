import styled from 'styled-components';
import { FlexColumn } from '../../../../utils/containers';

const TagsChoosePopUpStyle = styled(FlexColumn)`
  width: 100%;
  justify-content: flex-start;
  height: 100%;
  gap: 24px;

  .TagsChoosePopUpStyle__tags-list {
    height: 80%;
    width: 100%;
    overflow-y: scroll;
    justify-content: flex-start;
  }

  .TagsChoosePopUpStyle__tag-item {
    height: 48px;
    width: 100%;
    justify-content: flex-start;
    padding: 12px;
  }
`;

export default TagsChoosePopUpStyle;
