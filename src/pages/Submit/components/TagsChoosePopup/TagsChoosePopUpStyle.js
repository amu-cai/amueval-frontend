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
    height: 42px;
    width: 100%;
    justify-content: flex-start;
    padding: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.green03};
    }
  }
`;

export default TagsChoosePopUpStyle;
