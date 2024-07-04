import React from 'react';
import {FlexRow} from '../../utils/containers';
import searchIco from '../../assets/search_ico.svg';
import styled from 'styled-components';
// import PropsTypes from 'prop-types';
import {TextField} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import theme from "../../utils/theme";
import {ThemeProvider} from '@mui/material/styles';


const SearchStyle = styled(FlexRow)`
  .inputSearch {
    width: 312px;
    border-radius: 20px;
    margin-bottom: 12px;
    border-color: #5E5E5E;
  }
`;

const Search = (props) => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const handleSearchChange = React.useCallback((event) => {
        props.searchQueryHandler(event);
        setSearchQuery(event.target.value);
    }, [props]);

    return (
        <SearchStyle>
            <ThemeProvider theme={theme.customTheme}>
                <TextField
                    size="small"
                    className="inputSearch"
                    placeholder="Search"
                    variant="outlined"
                    onChange={handleSearchChange}
                    value={searchQuery}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={searchIco} alt="Search"/>
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: "#5E5E5E",
                            }
                        },
                    }}
                />
            </ThemeProvider>
        </SearchStyle>
    );
};

// Search.propTypes = {
//     searchQueryHandler: PropsTypes.func,
// };
//
// Search.defaultProps = {
//     searchQueryHandler: null,
// };

export default Search;


