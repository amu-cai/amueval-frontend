import React from "react";
import {FlexColumn, Grid, Svg} from "../../utils/containers";
import Filter from "../elements/Filter";
import {Body, H3, Medium} from "../../utils/fonts";
import arrow from "../../assets/arrow.svg";
import Media from "react-media";
import theme from "../../utils/theme";
import PropsTypes from "prop-types";

const FilterBy = (props) => {
    const renderFilterOptions = () => {
        return (
            props.options.map((option, index) => {
                return (
                    <Filter key={`filter_option-${index}`} active={props.active}
                            option={props.option} handler={props.handler}
                            id={`${props.header}-${option.name}-${index}`} name={props.header} index={index}>
                        <Body as='p'>
                            {option.name}
                        </Body>
                        {option.sort ?
                            <Svg as='span' src={arrow} rotate={option.rotate ? option.rotate : '0'}
                                 margin={option.rotate ? '2px 0 0 0' : '0 0 2px 0'}/>
                            : ''}
                    </Filter>
                );
            })
        );
    }

    return (
        <FlexColumn as='fieldset' width='94%' alignmentX='flex-start'>
            <Media query={theme.mobile}>
                <Medium as='legend' textTransform='uppercase' margin='0 0 12px 0'>
                    {props.header}
                </Medium>
            </Media>
            <Media query={theme.desktop}>
                <H3 as='legend' textTransform='uppercase' margin='0 0 24px 0'>
                    {props.header}
                </H3>

            </Media>
            <Grid gridTemplateColumns='auto auto' gridGap='12px'>
                {renderFilterOptions()}
            </Grid>
        </FlexColumn>
    );
}

FilterBy.propTypes = {
    options: PropsTypes.arrayOf(PropsTypes.shape({
        name: PropsTypes.string,
        sort: PropsTypes.bool,
        rotate: PropsTypes.string
    }))
};

FilterBy.defaultProps = {
    options: [],
};

export default FilterBy;