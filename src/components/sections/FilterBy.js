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
                    <Filter key={`filter_option-${index}`}>
                        <Body>
                            {option.name}
                        </Body>
                        {option.sort ?
                            <Svg src={arrow} rotate={option.rotate ? option.rotate : '0'}
                                 margin={option.rotate ? '2px 0 0 0' : '0 0 2px 0'}/>
                            : ''}
                    </Filter>
                );
            })
        );
    }

    return (
        <FlexColumn width='200px' alignmentX='flex-start' gap='12px'>
            <Medium as='p' textTransform='uppercase'>
                {props.header}
            </Medium>
            <Grid gridTemplateColumns='auto auto' gridGap='12px'>
                {renderFilterOptions()}
            </Grid>
        </FlexColumn>
    );
}

export default FilterBy;