import React from "react";
import {FlexColumn, Grid, Svg} from "../../utils/containers";
import Filter from "../elements/Filter";
import {Body, Medium} from "../../utils/fonts";
import arrow from "../../assets/arrow.svg";

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
        <FlexColumn as='fieldset' width='220px' alignmentX='flex-start'>
            <Medium as='legend' textTransform='uppercase' margin='0 0 12px 0'>
                {props.header}
            </Medium>
            <Grid gridTemplateColumns='auto auto' gridGap='12px'>
                {renderFilterOptions()}
            </Grid>
        </FlexColumn>
    );
}

export default FilterBy;