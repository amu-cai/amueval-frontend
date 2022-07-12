import React from "react";
import {FlexColumn, FlexRow, TransBack} from "../../../utils/containers";
import Button from "../Button";
import theme from "../../../utils/theme";
import styled from "styled-components";
import FilterBy from "../../sections/FilterBy";
import filterOptions from "./filterOptions";

const FiltersMenuStyle = styled(FlexColumn)`
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: scroll;
  width: 260px;
  height: 100vh;
  max-height: 650px;
  justify-content: flex-start;
  padding: 14px 16px 14px 24px;
  box-shadow: ${({theme}) => theme.filtersShadow};
  background-color: ${({theme}) => theme.colors.white};
  transition: transform 0.5s ease-in-out;
  z-index: 3;
`;

const FiltersMenu = (props) => {
    return (
        <>
            <TransBack backgroundColor={theme.colors.dark03} translateX={props.translateX}
                       opacity={props.opacity} onClick={props.toggleFiltersMenu}/>
            <FiltersMenuStyle translateX={props.translateX} gap='16px'>
                <FilterBy header='Sort by' options={filterOptions[0]}
                          handler={props.sortByHandler} option={props.sortBy}/>
                <FilterBy header='Status' options={filterOptions[1]}
                          handler={props.statusHandler} option={props.status}/>
                <FilterBy header='Challenge type' options={filterOptions[2]}
                          handler={props.challengeTypeHandler} option={props.challengeType}/>
                <FilterBy header='Commercial' options={filterOptions[3]}
                          handler={props.commercialHandler} option={props.commercial}/>
                <FlexRow gap='16px' margin='14px 0 0 0'>
                    <Button as='button' width='64px' height='28px'>
                        Done
                    </Button>
                    <Button as='button' width='64px' height='28px'
                            backgroundColor={theme.colors.dark}>
                        Clear
                    </Button>
                </FlexRow>
            </FiltersMenuStyle>
        </>
    );
}

export default FiltersMenu;