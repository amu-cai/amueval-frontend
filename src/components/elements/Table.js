import React from 'react';
import {FlexColumn, FlexRow, Grid} from '../../utils/containers';
import {H3, Medium} from '../../utils/fonts';
import Media from 'react-media';
import theme from '../../utils/theme';
import Loading from './Loading';
import PropsTypes from 'prop-types';

const Table = (props) => {
    const mobileRender = () => {
        return (
            <FlexColumn as='table' margin='20px 0 32px 0' minHeight='380px'>
                <Grid as='thead' gridTemplateColumns='1fr 3fr 1fr 1fr 2fr'
                      gridGap='10px' width='100%'>
                    {props.headerElements.map((elem, index) => {
                        return (
                            <FlexRow as='tr' key={`leaderboard-header-${index}`}
                                     alignmentX={(elem === '#' || elem === 'submitter') ? 'flex-start' : 'flex-end'}>
                                <Medium as='th'>{elem}</Medium>
                            </FlexRow>
                        );
                    })}
                </Grid>
                {props.renderElements('10px')}
            </FlexColumn>
        );
    };

    const desktopRender = () => {
        return (
            <FlexColumn as='table' margin='32px 0 72px 0' minHeight='438px' width='100%'>
                <Grid as='thead' gridTemplateColumns='1fr 3fr 1fr 1fr 2fr'
                      gridGap='32px' width='100%' margin='0 0 28px 0'>
                    {props.headerElements.map((elem, index) => {
                        return (
                            <FlexRow as='tr' key={`leaderboard-header-${index}`}
                                     alignmentX={(elem === '#' || elem === 'submitter') ? 'flex-start' : 'flex-end'}>
                                <H3 as='th'>{elem}</H3>
                            </FlexRow>
                        );
                    })}
                </Grid>
                {props.renderElements('32px')}
            </FlexColumn>
        );
    };

    return (
        <>
            <Loading visible={props.loading}/>
            <Media query={theme.mobile}>
                {!props.loading ? mobileRender() : ''}
            </Media>
            <Media query={theme.desktop}>
                {!props.loading ? desktopRender() : ''}
            </Media>
        </>
    );
};

Table.propTypes = {
    challengeName: PropsTypes.string,
    loading: PropsTypes.bool,
    renderElements: PropsTypes.func,
    headerElements: PropsTypes.arrayOf(PropsTypes.string),
};

Table.defaultProps = {
    challengeName: '',
    loading: true,
    renderElements: null,
    headerElements: [],
};

export default Table;