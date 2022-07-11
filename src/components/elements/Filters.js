import React from "react";
import {FlexColumn, FlexRow, TransBack} from "../../utils/containers";
import Button from "./Button";
import theme from "../../utils/theme";
import styled from "styled-components";

const FiltersStyle = styled(FlexColumn)`
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: scroll;
  width: 240px;
  min-height: 626px;
  height: 100vh;
  justify-content: space-between;
  padding: 56px 16px 14px 24px;
  box-shadow: ${({theme}) => theme.filtersShadow};
  background-color: ${({theme}) => theme.colors.white};
  transition: transform 0.5s ease-in-out;
  z-index: 3;
`;


const Filters = (props) => {
    return (
        <>
            <TransBack backgroundColor={theme.colors.dark03} translateX={props.translateX}
                       opacity={props.opacity} onClick={props.toggleFiltersMenu}/>
            <FiltersStyle translateX={props.translateX} gap='16px'>
                <FlexRow gap='16px' margin='14px 0 0 0'>
                    <Button as='button' width='64px' height='28px'>
                        Done
                    </Button>
                    <Button as='button' width='64px' height='28px'
                            backgroundColor={theme.colors.dark}>
                        Clear
                    </Button>
                </FlexRow>
            </FiltersStyle>
        </>
    );
}

export default Filters;