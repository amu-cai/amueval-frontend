import React from 'react';
import {Container, FlexColumn, FlexRow, Grid} from '../../utils/containers';
import Media from 'react-media';
import theme from '../../utils/theme';
import {ELEMENTS_PER_PAGE} from '../../utils/globals';
import {Body, Medium} from '../../utils/fonts';
import styled from 'styled-components';
import ColumnFilterIcon from './ColumnFilterIcon';

const Line = styled(FlexRow)`
  position: absolute;
  top: ${({top}) => top ? top : 'auto'};
  bottom: ${({bottom}) => bottom ? bottom : 'auto'};
  left: 0;
  width: 100%;
  background-color: ${({theme}) => theme.colors.dark04};
  height: ${({height}) => height ? height : '1px'};
`;

const MobileTableStyle = styled(Container)`
  width: 100%;
  border-collapse: collapse;
  margin: 32px 0;

  tr:nth-of-type(odd) {
    background: ${({theme}) => theme.colors.dark03};
  }

  th {
    background: ${({theme}) => theme.colors.dark05};
    color: ${({theme}) => theme.colors.white};
  }

  td, th {
    padding: 6px;
    border: 1px solid ${({theme}) => theme.colors.white};
    text-align: left;
  }

  display: block;

  thead, tbody, th, td {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  td {
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.colors.dark01};
    position: relative;
    padding-left: 50%;

    &:before {
      font-weight: 400;
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }
  }

  td:nth-of-type(1):before {
    content: ${({headerElements}) => headerElements[0] ? `'${headerElements[0]}'` : ''};
  }

  td:nth-of-type(2):before {
    content: ${({headerElements}) => headerElements[1] ? `'${headerElements[1]}'` : ''};
  }

  td:nth-of-type(3):before {
    content: ${({headerElements}) => headerElements[2] ? `'${headerElements[2]}'` : ''};
  }

  td:nth-of-type(4):before {
    content: ${({headerElements}) => headerElements[3] ? `'${headerElements[3]}'` : ''};
  }

  td:nth-of-type(5):before {
    content: ${({headerElements}) => headerElements[4] ? `'${headerElements[4]}'` : ''};
  }

  td:nth-of-type(6):before {
    content: ${({headerElements}) => headerElements[5] ? `'${headerElements[5]}'` : ''};
  }

  td:nth-of-type(7):before {
    content: ${({headerElements}) => headerElements[6] ? `'${headerElements[6]}'` : ''};
  }

  td:nth-of-type(8):before {
    content: ${({headerElements}) => headerElements[7] ? `'${headerElements[7]}'` : ''};
  }

  td:nth-of-type(9):before {
    content: ${({headerElements}) => headerElements[8] ? `'${headerElements[8]}'` : ''};
  }

  td:nth-of-type(10):before {
    content: ${({headerElements}) => headerElements[9] ? `'${headerElements[9]}'` : ''};
  }
`;

const Table = (props) => {
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const [activeIcon, setActiveIcon] = React.useState(null);
    const [rotateActiveIcon, setRotateActiveIcon] = React.useState(false);

    const metricsRender = (elem) => {
        if (!props.iterableColumnElement)
            return <></>;
        if (Array.isArray(elem[props.iterableColumnElement.name]))
            elem = elem[props.iterableColumnElement.name];
        else {
            let newElem = [];
            for (let metric of props.possibleMetrics) {
                if (elem[props.iterableColumnElement.name][metric] === '-1')
                    newElem.push('N/A');
                else
                    newElem.push(elem[props.iterableColumnElement.name][metric]);
            }
            elem = newElem;
        }
        return (
            elem.map((iterableElem, i) => {
                return (
                    <Body key={`metric-result-${i}`} as='td'
                          order={props.iterableColumnElement.order}
                          textAlign={props.iterableColumnElement.align} minWidth='72px'>
                        {props.iterableColumnElement.format ?
                            props.iterableColumnElement.format(iterableElem) : iterableElem}
                    </Body>
                );
            })
        );
    };

    const rowRender = (elem) => {
        if (elem.submitter === props.user) {
            return (
                props.staticColumnElements.map((elemName, i) => {
                    return (
                        <Medium key={`leaderboard-static-elemName-${i}-${elem[elemName.name]}`}
                                as='td'
                                order={elemName.order} textAlign={elemName.align}>
                            {elemName.format ? elemName.format(elem[elemName.name]) : elem[elemName.name]}
                        </Medium>
                    );
                })
            );
        }
        return (
            props.staticColumnElements.map((elemName, i) => {
                return (
                    <Body key={`leaderboard-static-elemName-${i}-${elem[elemName.name]}`}
                          as='td'
                          order={elemName.order} textAlign={elemName.align}>
                        {elemName.format ? elemName.format(elem[elemName.name]) : elem[elemName.name]}
                    </Body>
                );
            })
        );
    };

    const desktopRender = () => {
        const n = (props.pageNr - 1) * (ELEMENTS_PER_PAGE * 2);
        let elementsToMap = props.elements.slice(n, n + (ELEMENTS_PER_PAGE * 2));
        if (elementsToMap.length > 0) {
            return (
                <FlexColumn as='table' margin='32px 0 72px 0' width='100%'>
                    <FlexColumn as='tbody' width='100%'>
                        <Grid as='tr'
                              gridGap='20px' position='relative' width='100%' padding='4px' margin='0 0 6px 0'
                              gridTemplateColumns={props.gridTemplateColumns}>
                            {props.headerElements.map((elem, i) => {
                                return (
                                    <FlexRow key={`table-header-${i}`} alignmentX='flex-start' as='td'
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
                                             }}>
                                        <Medium textAlign={elem === 'submitter' ? 'left' : 'right'}
                                                width={elem === 'when' ? '100%' : 'auto'} padding='0 6px 0 0'
                                                minWidth={elem === 'result' ? '72px' : 'none'}>
                                            {elem}
                                        </Medium>
                                        {elem !== '#' ?
                                            <ColumnFilterIcon index={i} active={activeIcon}
                                                              rotateIcon={rotateActiveIcon}/>
                                            : ''}
                                    </FlexRow>
                                );
                            })}
                            <Line height='2px' top='32px' as='td' shadow={theme.shadow}/>
                        </Grid>
                        {elementsToMap.map((elem, index) => {
                            return (
                                <Grid as='tr' key={`leaderboard-row-${index}`}
                                      backgroundColor={index % 2 === 1 ? theme.colors.dark01 : 'transparent'}
                                      gridTemplateColumns={props.gridTemplateColumns}
                                      gridGap='20px' position='relative' width='100%' padding='4px'>
                                    {rowRender(elem)}
                                    {props.headerElements ? metricsRender(elem) : ''}
                                </Grid>
                            );
                        })}
                    </FlexColumn>
                </FlexColumn>
            );
        } else {
            return (
                <Medium margin='72px 0'>
                    No results ;c
                </Medium>
            );
        }
    };

    const mobileRender = () => {
        const n = (props.pageNr - 1) * ELEMENTS_PER_PAGE;
        let elementsToMap = props.elements.slice(n, n + ELEMENTS_PER_PAGE);
        if (elementsToMap.length > 0) {
            return (
                <MobileTableStyle as='table' staticColumnElements={props.staticColumnElements}
                                  headerElements={props.headerElements}>
                    <Container as='thead'>
                        <Container as='tr'>
                            {props.headerElements.map((elem, i) => {
                                return (
                                    <Medium key={`table-header-${i}`} as='th'>
                                        {elem}
                                    </Medium>
                                );
                            })}
                        </Container>
                    </Container>
                    <Container as='tbody'>
                        {elementsToMap.map((elem, index) => {
                            return (
                                <Grid as='tr' key={`leaderboard-row-${index}`}>
                                    {rowRender(elem)}
                                    {props.headerElements ? metricsRender(elem) : ''}
                                </Grid>
                            );
                        })}
                    </Container>
                </MobileTableStyle>
            );
        } else {
            return (
                <Medium margin='72px 0'>
                    No results ;c
                </Medium>
            );
        }
    };

    return (
        <>
            <Media query={theme.mobile}>
                {mobileRender()}
            </Media>
            <Media query={theme.desktop}>
                {desktopRender()}
            </Media>
        </>
    );
};

export default Table;