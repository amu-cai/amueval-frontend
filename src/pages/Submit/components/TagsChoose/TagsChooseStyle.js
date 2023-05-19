import styled from 'styled-components';
import { FlexColumn } from '../../../../utils/containers';

const TagsChooseStyle = styled(FlexColumn)`
  cursor: pointer;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
  * {
    cursor: pointer;
  }

  .TagsChooseStyle__grid {
    border-radius: 4px;
    width: 100%;
    height: 100px;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    box-shadow: 1px 2px 4px rgba(52, 52, 52, 0.25);
    padding: 12px;
    grid-template-columns: 1fr auto;
  }

  .TagsChooseStyle__tags-container {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: scroll;
  }
`;

export default TagsChooseStyle;
