import React from 'react';
import {FlexColumn, FlexRow, Grid} from '../../utils/containers';
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

const Table = (props) => {
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const [activeIcon, setActiveIcon] = React.useState(null);
    const [rotateActiveIcon, setRotateActiveIcon] = React.useState(false);

    const mobileRender = () => {
        return (
            <FlexColumn as='table' margin='20px 0 32px 0' minHeight='380px'>
                {/*{props.renderElements('10px', props.headerElements)}*/}
            </FlexColumn>
        );
    };

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

    const desktopRender = () => {
        const n = (props.pageNr - 1) * (ELEMENTS_PER_PAGE * 2);
        let elementsToMap = props.elements.slice(n, n + (ELEMENTS_PER_PAGE * 2));
        return (
            <FlexColumn as='table' margin='32px 0 72px 0' width='100%'>
                <FlexColumn as='tbody' width='100%'>
                    <Grid
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
                                        <ColumnFilterIcon index={i} active={activeIcon} rotateIcon={rotateActiveIcon}/>
                                        : ''}
                                </FlexRow>
                            );
                        })}
                        <Line height='2px' top='32px' shadow={theme.shadow}/>
                    </Grid>
                    {elementsToMap.map((elem, index) => {
                        return (
                            <Grid as='tr' key={`leaderboard-row-${index}`}
                                  backgroundColor={index % 2 === 1 ? theme.colors.dark01 : 'transparent'}
                                  gridTemplateColumns={props.gridTemplateColumns}
                                  gridGap='20px' position='relative' width='100%' padding='4px'>
                                {props.staticColumnElements.map((elemName, i) => {
                                    return (
                                        <Body key={`leaderboard-static-elemName-${i}-${elem[elemName.name]}`} as='td'
                                              order={elemName.order} textAlign={elemName.align}>
                                            {elemName.format ? elemName.format(elem[elemName.name]) : elem[elemName.name]}
                                        </Body>
                                    );
                                })}
                                {props.headerElements ? metricsRender(elem) : ''}
                            </Grid>
                        );
                    })}
                </FlexColumn>
            </FlexColumn>
        );
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