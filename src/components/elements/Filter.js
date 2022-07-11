import React from "react";
import styled from "styled-components";
import {Body} from "../../utils/fonts";

const FilterStyle = styled(Body)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 36px;
  padding: 8px 16px;
  border-radius: 32px;
  border: 1px solid ${({theme}) => theme.colors.dark};
  box-shadow: ${({theme}) => theme.shadow};
  gap: 8px;
  cursor: pointer;
`;

const Filter = (props) => {
    return (
        <FilterStyle as='button'>
            {props.children}
        </FilterStyle>
    );
}

export default Filter;