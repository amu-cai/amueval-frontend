import React from "react";
import {FlexColumn, FlexRow, Grid, TransBack} from "../../utils/containers";
import Button from "./Button";
import theme from "../../utils/theme";
import styled from "styled-components";
import {Medium} from "../../utils/fonts";
import Filter from "./Filter";

const FiltersMenuStyle = styled(FlexColumn)`
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: scroll;
  width: 240px;
  height: 100vh;
  justify-content: space-around;
  @media (max-height: 626px) {
    justify-content: flex-start;
  }
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
                <FlexColumn width='200px' alignmentX='flex-start' gap='12px'>
                    <Medium as='p' textTransform='uppercase'>
                        Sort by
                    </Medium>
                    <Grid gridTemplateColumns='auto auto' gridGap='12px'>
                        <Filter>
                            Closing
                        </Filter>
                        <Filter>
                            Closing
                        </Filter>
                        <Filter>
                            Hotness
                        </Filter>
                        <Filter>
                            Hotness
                        </Filter>
                        <Filter>
                            Reward
                        </Filter>
                        <Filter>
                            Reward
                        </Filter>
                    </Grid>
                </FlexColumn>
                <FlexColumn width='200px' alignmentX='flex-start' gap='12px'>
                    <Medium as='p' textTransform='uppercase'>
                        Status
                    </Medium>
                    <Grid gridTemplateColumns='auto auto' gridGap='12px'>
                        <Filter>
                            Both
                        </Filter>
                        <Filter>
                            Completed
                        </Filter>
                        <Filter>
                            Active
                        </Filter>
                    </Grid>
                </FlexColumn>
                <FlexColumn width='200px' alignmentX='flex-start' gap='12px'>
                    <Medium as='p' textTransform='uppercase'>
                        Challenge type
                    </Medium>
                    <Grid gridTemplateColumns='auto auto' gridGap='12px'>
                        <Filter>
                            All
                        </Filter>
                        <Filter>
                            Tabular
                        </Filter>
                        <Filter>
                            Text
                        </Filter>
                        <Filter>
                            Image
                        </Filter>
                    </Grid>
                </FlexColumn>
                <FlexColumn width='200px' alignmentX='flex-start' gap='12px'>
                    <Medium as='p' textTransform='uppercase'>
                        Commercial
                    </Medium>
                    <Grid gridTemplateColumns='auto auto' gridGap='12px'>
                        <Filter>
                            Both
                        </Filter>
                        <Filter>
                            Yes
                        </Filter>
                        <Filter>
                            No
                        </Filter>
                    </Grid>
                </FlexColumn>
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