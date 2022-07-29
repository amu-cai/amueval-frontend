import React from 'react';
import {FlexColumn} from '../../utils/containers';
import theme from '../../utils/theme';
import PropsTypes from 'prop-types';

const Placeholder = (props) => {
    return (
        <FlexColumn width='200px' height='200px'
                    backgroundColor={theme.colors.dark} color={theme.colors.white}>
            {props.children}
        </FlexColumn>
    );
};

Placeholder.propTypes = {
    children: PropsTypes.node,
};

Placeholder.defaultProps = {
    children: '',
};

export default Placeholder;