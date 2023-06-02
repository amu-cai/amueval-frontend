import React from 'react';
import styled from 'styled-components';
import { FlexRow } from '../../utils/containers';
import theme from '../../utils/theme';
// lista json elementów (headery to keys)
// lista keys w celu zachowania kolejności

const Table = styled.table`
  border-collapse: separate;
  width: 100%;
`;

const TrHeader = styled.tr`
  height: 48px;
  position: relative;
`;

const Tr = styled.tr`
  position: relative;
  height: 72px;
  /* background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.white}; */
`;

const Td = styled.td`
  padding: 0 0 32px 0;
  /* background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.white}; */
`;

const TableLine = styled(FlexRow)`
  position: absolute;
  top: ${({ top }) => (top ? top : 'auto')};
  bottom: ${({ bottom }) => (bottom ? bottom : 'auto')};
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark04};
  height: ${({ height }) => (height ? height : '1px')};
`;

const NewTable = ({ items, orderedKeys }) => {
  return (
    <Table>
      <TrHeader>
        {orderedKeys.map((key) => {
          return <th>{key}</th>;
        })}
        <TableLine height="2px" top="94%" as="td" shadow={theme.shadow} />
      </TrHeader>
      {items.map((item, i) => {
        return (
          <Tr>
            {orderedKeys.map((key) => {
              return <Td>{item[key]}</Td>;
            })}
            <FlexRow
              width="100%"
              alignmentX="space-between"
              position="absolute"
              top="55%"
              left="0"
            >
              <FlexRow>tagi tagi tagi tagi</FlexRow>
              <FlexRow>edytuj usuń</FlexRow>
            </FlexRow>
            <FlexRow
              width="100%"
              position="absolute"
              top="0"
              left="0"
              height="100%"
              backgroundColor={
                i % 2 === 0 ? theme.colors.dark01 : 'transparent'
              }
            />
          </Tr>
        );
      })}
    </Table>
  );
};

export default NewTable;
