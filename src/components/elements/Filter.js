import React from "react";
import styled from "styled-components";
import {FlexRow} from "../../utils/containers";

const FilterStyle = styled(FlexRow)`
  width: fit-content;
  height: 36px;
  padding: 8px 16px;
  border-radius: 32px;
  border: 1px solid ${({theme}) => theme.colors.dark};
  box-shadow: ${({theme}) => theme.shadow};
  cursor: pointer;
  color: ${({theme, active}) => active ? theme.colors.white : theme.colors.dark};
  background-color: ${({theme, active}) => active ? theme.colors.darj : theme.colors.white};

  * {
    cursor: pointer;
  }
`;

const Filter = (props) => {
    return (
        <FilterStyle as='button' active={props.active}>
            {props.children}
        </FilterStyle>
    );
}

export default Filter;