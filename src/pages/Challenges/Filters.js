import React from 'react';
import {FlexRow} from "../../utils/containers";
import theme from "../../utils/theme";
import {Autocomplete, TextField} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import Button from "../../components/generic/Button";
import SortIco from '../../assets/sort_ico.png';
import getMetrics from "../../api/getMetrics";
import InputAdornment from "@mui/material/InputAdornment";
import searchIco from "../../assets/search_ico.svg";
import FiltersStyle from "./FiltersStyle";

const Filters = (props) => {
    const [metrics, setMetrics] = React.useState([]);
    const [selectedTypes, setSelectedTypes] = React.useState([]);
    const [selectedMetrics, setSelectedMetrics] = React.useState([]);
    const [searchPhrase, setSearchPhrase] = React.useState("");

    React.useEffect(() => {
        getMetrics(setMetrics);
    }, []);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchPhrase(value);
        handleFilters({
            types: selectedTypes,
            metrics: selectedMetrics,
            searchPhrase: value,
        });
    };

    // const handleTypeChange = React.useCallback((event, value) => {
    //     setSelectedTypes(value);
    //     handleFilters({
    //         types: value,
    //         metrics: selectedMetrics,
    //         searchPhrase: searchPhrase,
    //     });
    // }, [selectedMetrics, searchPhrase]);

    const handleTypeChange = (event, value) => {
        setSelectedTypes(value);
        handleFilters({
            types: value,
            metrics: selectedMetrics,
            searchPhrase: searchPhrase,
        });
    };

    const handleMetricChange = (event, value) => {
        setSelectedMetrics(value);
        handleFilters({
            types: selectedTypes,
            metrics: value,
            searchPhrase: searchPhrase,
        });
    };

    const handleFilters = ({ types, metrics, searchPhrase }) => {
        props.filtersHandler({
            types: types,
            metrics: metrics,
            searchPhrase: searchPhrase,
            sortByParticipants: false,
            sortByDeadline: false,
        });
    };


    return (
        <FiltersStyle width="100%">
            <FlexRow width="100%" alignmentX="space-between">
                <FlexRow className="filters" alignmentY="end">
                    <ThemeProvider theme={theme.customTheme}>
                        <Autocomplete
                            className="typeFilter"
                            multiple
                            options={['image', 'text', 'tabular']}
                            defaultValue={[]}
                            value={selectedTypes}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    placeholder="Type"
                                />
                            )}
                            onChange={handleTypeChange}
                        />
                        <Autocomplete
                            limitTags={1}
                            className="metricFilter"
                            multiple
                            options={metrics.map(metric => metric.name)}
                            defaultValue={[]}
                            value={selectedMetrics}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    placeholder="Metric"
                                />
                            )}
                            onChange={handleMetricChange}
                        />
                    </ThemeProvider>
                </FlexRow>
                <FlexRow>
                    <ThemeProvider theme={theme.customTheme}>
                        <TextField
                            autoFocus={true}
                            size="small"
                            className="inputSearch"
                            placeholder="Search"
                            variant="outlined"
                            onChange={handleSearchChange}
                            value={searchPhrase}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={searchIco} alt="Search"/>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                borderRadius: '8px',
                                height: '28px',
                                boxShadow: '1px 2px 4px 0 rgba(52, 52, 52, 0.25)',
                                '& .MuiOutlinedInput-root': {
                                    height: '100%',
                                    '& fieldset': {
                                        borderRadius: '8px',
                                        borderColor: "#5E5E5E"
                                    },
                                },
                            }}
                        />
                    </ThemeProvider>
                </FlexRow>
                <FlexRow className="sorting" gap="4px">
                    <Button
                        className="sortParticipants"
                        as="button"
                        backgroundColor="transparent"
                        color="#5E5E5E"
                        width="120px"
                    >
                        Participants
                        <img
                            alt="Sort by participants"
                            width="20px"
                            height="12px"
                            src={SortIco}
                            style={{
                                color: theme.colors.green700,
                                // transform: showAdvanced ? 'rotate(180deg)' : 'none'
                            }}
                        />
                    </Button>
                    <Button
                        className="sortDeadline"
                        as="button"
                        backgroundColor="transparent"
                        color="#5E5E5E"
                        width="120px"
                    >
                        Deadline
                        <img
                            alt="Sort by deadline"
                            width="20px"
                            height="12px"
                            src={SortIco}
                            style={{
                                color: theme.colors.green700,
                                // transform: showAdvanced ? 'rotate(180deg)' : 'none'
                            }}
                        />
                    </Button>
                </FlexRow>
            </FlexRow>
        </FiltersStyle>
    );
};

export default Filters;
