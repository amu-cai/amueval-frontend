import React from 'react';
import { Container, FlexColumn, FlexRow, Grid } from '../../utils/containers';
import Media from 'react-media';
import theme from '../../utils/theme';
import { ELEMENTS_PER_PAGE, IS_MOBILE } from '../../utils/globals';
import { Body, Medium } from '../../utils/fonts';
import styled from 'styled-components';
import ColumnFilterIcon from './ColumnFilterIcon';

const Line = styled(FlexRow)`
  position: absolute;
  top: ${({ top }) => (top ? top : 'auto')};
  bottom: ${({ bottom }) => (bottom ? bottom : 'auto')};
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark04};
  height: ${({ height }) => (height ? height : '1px')};
`;

const MobileTableStyle = styled(Container)`
  width: 100%;
  border-collapse: collapse;
  margin: 32px 0;

  tr:nth-of-type(odd) {
    background: ${({ theme }) => theme.colors.dark03};
  }

  th {
    background: ${({ theme }) => theme.colors.dark05};
    color: ${({ theme }) => theme.colors.white};
  }

  td,
  th {
    padding: 6px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    text-align: left;
  }

  display: block;

  thead,
  tbody,
  th,
  td {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  td {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark01};
    position: relative;
    padding-left: 50%;
  }

  .mobile-table-header {
    font-weight: 400;
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }
`;

const Table = (props) => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [activeIcon, setActiveIcon] = React.useState(null);
  const [rotateActiveIcon, setRotateActiveIcon] = React.useState(false);

  const metricsRender = (elem) => {
    if (!props.iterableColumnElement) return <></>;
    if (Array.isArray(elem[props.iterableColumnElement.name]))
      elem = elem[props.iterableColumnElement.name];
    else {
      let newElem = [];
      for (let metric of props.possibleMetrics) {
        if (Object.hasOwn(elem, props.iterableColumnElement.name)) {
          if (elem[props.iterableColumnElement.name][metric] === '-1')
            newElem.push('N/A');
          else newElem.push(elem[props.iterableColumnElement.name][metric]);
        } else {
          newElem.push('N/A');
        }
      }
      elem = newElem;
    }
    let indexModificator = 2;
    if (props.tableType === 'leaderboard') indexModificator = 4;
    if (props.tableType === 'allEntries') indexModificator = 3;

    return elem.map((iterableElem, i) => {
      return (
        <Body
          key={`metric-result-${i}`}
          as="td"
          order={props.iterableColumnElement.order}
          textAlign={props.iterableColumnElement.align}
          minWidth="72px"
        >
          {IS_MOBILE() && (
            <Container className="mobile-table-header">
              {props.headerElements[indexModificator + i]}
            </Container>
          )}
          {props.iterableColumnElement.format
            ? props.iterableColumnElement.format(iterableElem)
            : iterableElem}
        </Body>
      );
    });
  };

  const rowRender = (elem) => {
    let RowStyle = Body;
    if (elem.submitter === props.user) RowStyle = Medium;
    return props.staticColumnElements.map((elemName, i) => {
      return (
        <RowStyle
          key={`leaderboard-static-elemName-${i}-${elem[elemName.name]}`}
          as="td"
          order={elemName.order}
          textAlign={elemName.align}
        >
          {IS_MOBILE() && (
            <Container className="mobile-table-header">
              {props.headerElements[i]}
            </Container>
          )}
          {elemName.format
            ? elemName.format(elem[elemName.name])
            : elem[elemName.name]}
        </RowStyle>
      );
    });
  };

  const desktopRender = () => {
    const n = (props.pageNr - 1) * (ELEMENTS_PER_PAGE * 2);
    let elementsToMap = props.elements.slice(n, n + ELEMENTS_PER_PAGE * 2);
    if (elementsToMap.length > 0) {
      return (
        <FlexColumn as="table" margin="32px 0 72px 0" width="100%">
          <FlexColumn as="tbody" width="100%">
            <Grid
              as="tr"
              gridGap="20px"
              position="relative"
              width="100%"
              padding="4px"
              margin="0 0 6px 0"
              gridTemplateColumns={props.gridTemplateColumns}
            >
              {props.headerElements.map((elem, i) => {
                return (
                  <FlexRow
                    key={`table-header-${i}`}
                    alignmentX="flex-start"
                    as="td"
                    cursor="pointer"
                    onClick={() => {
                      if (activeIcon === i) {
                        let newRotateActiveIcon = !rotateActiveIcon;
                        setRotateActiveIcon(newRotateActiveIcon);
                      } else {
                        setRotateActiveIcon(false);
                      }
                      setActiveIcon(i);
                      props.sortByUpdate(elem, i);
                      forceUpdate();
                    }}
                  >
                    <Medium
                      cursor={elem !== '#' ? 'pointer' : ''}
                      textAlign={elem === 'when' ? 'right' : 'left'}
                      width={elem === 'when' ? '100%' : 'auto'}
                      padding="0 6px 0 0"
                      overflowWrap="break-word"
                      minWidth={elem === 'result' ? '72px' : 'none'}
                    >
                      {elem.replace('.', ' ')}
                    </Medium>
                    {elem !== '#' && (
                      <ColumnFilterIcon
                        cursor="pointer"
                        index={i}
                        active={activeIcon}
                        rotateIcon={rotateActiveIcon}
                      />
                    )}
                  </FlexRow>
                );
              })}
              <Line height="2px" top="100%" as="td" shadow={theme.shadow} />
            </Grid>
            {elementsToMap.map((elem, index) => {
              return (
                <Grid
                  as="tr"
                  key={`leaderboard-row-${index}`}
                  backgroundColor={
                    index % 2 === 1 ? theme.colors.dark01 : 'transparent'
                  }
                  gridTemplateColumns={props.gridTemplateColumns}
                  gridGap="20px"
                  position="relative"
                  width="100%"
                  padding="4px"
                >
                  {rowRender(elem)}
                  {props.headerElements ? metricsRender(elem) : ''}
                </Grid>
              );
            })}
          </FlexColumn>
        </FlexColumn>
      );
    }
    return <Medium margin="72px 0">No results ;c</Medium>;
  };

  const mobileRender = () => {
    const n = (props.pageNr - 1) * ELEMENTS_PER_PAGE;
    let elementsToMap = props.elements.slice(n, n + ELEMENTS_PER_PAGE);
    if (elementsToMap.length > 0) {
      return (
        <MobileTableStyle
          as="table"
          staticColumnElements={props.staticColumnElements}
          headerElements={props.headerElements}
        >
          <Container as="tbody">
            {elementsToMap.map((elem, index) => {
              return (
                <Grid as="tr" key={`leaderboard-row-${index}`}>
                  {rowRender(elem)}
                  {props.headerElements ? metricsRender(elem) : ''}
                </Grid>
              );
            })}
          </Container>
        </MobileTableStyle>
      );
    }
    return <Medium margin="72px 0">No results ;c</Medium>;
  };

  return (
    <>
      <Media query={theme.mobile}>{mobileRender()}</Media>
      <Media query={theme.desktop}>{desktopRender()}</Media>
    </>
  );
};

export default Table;
