import React from "react";
import {FlexRow, Svg} from "../../utils/containers";
import loopIco from '../../assets/loop_ico.svg';
import filtersIco from '../../assets/filters_ico.svg';
import styled from "styled-components";
import {Body} from "../../utils/fonts";

const SearchStyle = styled(FlexRow)`
  width: 100%;
  height: 44px;
  border-radius: 22px;
  box-shadow: ${({theme}) => theme.shadow};
  padding: 0 12px;

  div {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }

  button {
    cursor: pointer;
    margin-left: 12px;
    width: 14px;
    height: 20px;
  }

  input {
    width: calc(100% - 24px - 34px);
    color: ${({theme}) => theme.colors.dark08};
  }
`;

const Search = (props) => {
    return (
        <SearchStyle>
            <Svg src={loopIco}/>
            <Body as='input' onChange={(event) => props.searchQueryHandler(event)}/>
            <Svg as='button' src={filtersIco}/>
        </SearchStyle>
    );
}

export default Search;