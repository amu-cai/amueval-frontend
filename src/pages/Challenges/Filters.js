import { Autocomplete, ListSubheader, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import getMetrics from "../../api/getMetrics";
import DefaultSortIco from "../../assets/default_sort_ico.png";
import searchIco from "../../assets/search_ico.svg";
import SortIco from "../../assets/sort_ico.png";
import Button from "../../components/generic/Button";
import { FlexColumn, FlexRow } from "../../utils/containers";
import { COMMON_METRICS } from "../../utils/globals";
import theme from "../../utils/theme";
import FiltersStyle from "./FiltersStyle";

const Filters = (props) => {
  const [metrics, setMetrics] = React.useState([]);
  const [selectedTypes, setSelectedTypes] = React.useState([]);
  const [selectedMetrics, setSelectedMetrics] = React.useState([]);
  const [searchPhrase, setSearchPhrase] = React.useState("");
  const [sortByParticipants, setSortByParticipants] = React.useState("");
  const [sortByDeadline, setSortByDeadline] = React.useState("");

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
      sortByParticipants: sortByParticipants,
      sortByDeadline: sortByDeadline,
    });
  };

  const handleTypeChange = (event, value) => {
    setSelectedTypes(value);
    handleFilters({
      types: value,
      metrics: selectedMetrics,
      searchPhrase: searchPhrase,
      sortByParticipants: sortByParticipants,
      sortByDeadline: sortByDeadline,
    });
  };

  const handleMetricChange = (event, value) => {
    setSelectedMetrics(value);
    handleFilters({
      types: selectedTypes,
      metrics: value,
      searchPhrase: searchPhrase,
      sortByParticipants: sortByParticipants,
      sortByDeadline: sortByDeadline,
    });
  };

  const handleSortByParticipants = () => {
    const newSortOrder = sortByParticipants === "asc" ? "desc" : "asc";
    console.log(newSortOrder);
    setSortByParticipants(newSortOrder);
    setSortByDeadline(null);
    handleFilters({
      types: selectedTypes,
      metrics: selectedMetrics,
      searchPhrase: searchPhrase,
      sortByParticipants: sortByParticipants,
      sortByDeadline: sortByDeadline,
    });
  };

  const handleSortByDeadline = () => {
    const newSortOrder = sortByDeadline === "asc" ? "desc" : "asc";
    setSortByDeadline(newSortOrder);
    setSortByParticipants(null);
    handleFilters({
      types: selectedTypes,
      metrics: selectedMetrics,
      searchPhrase: searchPhrase,
      sortByParticipants: sortByParticipants,
      sortByDeadline: sortByDeadline,
    });
  };

  const handleFilters = ({
    types,
    metrics,
    searchPhrase,
    sortByParticipants,
    sortByDeadline,
  }) => {
    props.filtersHandler({
      types: types,
      metrics: metrics,
      searchPhrase: searchPhrase,
      sortByParticipants: sortByParticipants,
      sortByDeadline: sortByDeadline,
    });
  };

  const categorizeMetrics = (metrics) => {
    let common = [];
    let other = [];
    metrics.forEach((metric) => {
      if (COMMON_METRICS.includes(metric.name)) {
        common.push(metric.name);
      } else {
        other.push(metric.name);
      }
    });
    other = other.sort((a, b) => a.localeCompare(b));
    return [
      { title: "Common", metrics: common },
      { title: "Other", metrics: other },
    ];
  };

  const groupedMetrics = categorizeMetrics(metrics);

  return (
    <FiltersStyle width="100%">
      <FlexRow width="100%" alignmentX="space-between">
        <FlexColumn>
          <FlexRow className="sectionHeader" width="100%">
            <span>Filters</span>
          </FlexRow>
          <FlexRow className="filters" alignmentY="end">
            <ThemeProvider theme={theme.customTheme}>
              <Autocomplete
                size="small"
                limitTags="1"
                className="typeFilter"
                multiple
                options={["image", "text", "tabular"]}
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
                size="small"
                limitTags="1"
                className="metricFilter"
                multiple
                options={groupedMetrics.flatMap((group) => group.metrics)}
                groupBy={(option) => {
                  return groupedMetrics.find((group) =>
                    group.metrics.includes(option)
                  ).title;
                }}
                defaultValue={[]}
                value={selectedMetrics}
                renderGroup={(params) => (
                  <React.Fragment>
                    <ListSubheader
                      sx={{
                        color: theme.colors.black900,
                        backgroundColor: "#BAE7E1",
                        top: "-10px",
                      }}
                      className="subheader"
                    >
                      {params.group}
                    </ListSubheader>
                    {params.children}
                  </React.Fragment>
                )}
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
        </FlexColumn>
        <FlexColumn>
          <FlexRow className="sectionHeader" width="100%">
            <span>Search</span>
          </FlexRow>
          <FlexRow>
            <ThemeProvider theme={theme.customTheme}>
              <TextField
                size="small"
                className="inputSearch"
                placeholder="Search"
                variant="outlined"
                onChange={handleSearchChange}
                value={searchPhrase}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={searchIco} alt="Search" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  borderRadius: "8px",
                  height: "28px",
                  boxShadow: "1px 2px 4px 0 rgba(52, 52, 52, 0.25)",
                  "& .MuiOutlinedInput-root": {
                    height: "100%",
                    "& fieldset": {
                      borderRadius: "8px",
                      borderColor: "#5E5E5E",
                    },
                  },
                }}
              />
            </ThemeProvider>
          </FlexRow>
        </FlexColumn>
        <FlexColumn>
          <FlexRow className="sectionHeader" width="100%">
            <span>Sorting</span>
          </FlexRow>
          <FlexRow className="sorting" gap="4px">
            <Button
              className="sortParticipants"
              as="button"
              backgroundColor="transparent"
              color="#5E5E5E"
              width="120px"
              handler={handleSortByParticipants}
              fontFamily={"Inter, sans-serif"}
            >
              Participants
              <img
                alt="Sort by participants"
                width="20px"
                height="16px"
                src={!sortByParticipants ? DefaultSortIco : SortIco}
                style={{
                  color: theme.colors.green700,
                  transform:
                    sortByParticipants === "desc" ? "scaleY(-1)" : "none",
                }}
              />
            </Button>
            <Button
              className="sortDeadline"
              as="button"
              backgroundColor="transparent"
              color="#5E5E5E"
              width="120px"
              handler={handleSortByDeadline}
            >
              Deadline
              <img
                alt="Sort by deadline"
                width="20px"
                height="16px"
                src={!sortByDeadline ? DefaultSortIco : SortIco}
                style={{
                  color: theme.colors.green700,
                  transform: sortByDeadline === "desc" ? "scaleY(-1)" : "none",
                }}
              />
            </Button>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    </FiltersStyle>
  );
};

export default Filters;
