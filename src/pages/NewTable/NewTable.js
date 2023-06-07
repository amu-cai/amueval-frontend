import React from 'react';
import { FlexRow, Svg } from '../../utils/containers';
import theme from '../../utils/theme';
import ColumnFilterIcon from '../../components/generic/ColumnFilterIcon';
import pensilIco from '../../assets/pencil_ico.svg';
import deleteIco from '../../assets/delete_ico.svg';
import NewTableStyle from './styles/NewTableStyle';
import RowsBackgroundStyle from './styles/RowsBackgroundStyle';
import SortButtonContainerStyle from './styles/SortButtonContainerStyle';

const NewTable = ({ items, orderedKeys }) => {
  return (
    <NewTableStyle>
      <tr className="NewTableStyle__tr-header">
        {orderedKeys.map((keyValue, i) => {
          return (
            <th key={`table-header-${i}`} className="NewTableStyle__th">
              {keyValue}
              <SortButtonContainerStyle as="span" column={keyValue}>
                <ColumnFilterIcon index={1} active={2} rotateIcon={false} />
              </SortButtonContainerStyle>
            </th>
          );
        })}
        <FlexRow className="NewTableStyle__line" as="td" />
      </tr>
      {items.map((item, i) => {
        return (
          <tr className="NewTableStyle__tr">
            {orderedKeys.map((keyValue, j) => {
              return (
                <td key={`table-item-${i}-${j}`} className="NewTableStyle__td">
                  {item[keyValue]}
                </td>
              );
            })}
            <FlexRow className="NewTableStyle__row-footer">
              <FlexRow className="NewTableStyle__tags-container">
                {item.tags.map((tag, j) => {
                  return (
                    <FlexRow
                      className="NewTableStyle__tag"
                      key={`submissionTag-${i}-${j}`}
                    >
                      {tag}
                    </FlexRow>
                  );
                })}
              </FlexRow>
              <FlexRow gap="12px">
                <Svg
                  src={pensilIco}
                  backgroundColor={theme.colors.dark}
                  cursor="pointer"
                  size="cover"
                  width="16px"
                  height="16px"
                />
                <Svg
                  src={deleteIco}
                  backgroundColor={theme.colors.dark}
                  cursor="pointer"
                  size="cover"
                  width="16px"
                  height="16px"
                />
              </FlexRow>
            </FlexRow>
            <RowsBackgroundStyle i={i} />
          </tr>
        );
      })}
    </NewTableStyle>
  );
};

export default NewTable;
