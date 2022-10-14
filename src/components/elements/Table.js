import React from 'react';
import {FlexColumn} from '../../utils/containers';
import Media from 'react-media';
import theme from '../../utils/theme';
import Loading from './Loading';
import PropsTypes from 'prop-types';

const Table = (props) => {
    const mobileRender = () => {
        return (
            <FlexColumn as='table' margin='20px 0 32px 0' minHeight='380px'>
                {props.renderElements('10px', props.headerElements)}
            </FlexColumn>
        );
    };

    const desktopRender = () => {
        return (
            <FlexColumn as='table' margin='32px 0 72px 0' width='100%'>
                {props.renderElements('32px', props.headerElements)}
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