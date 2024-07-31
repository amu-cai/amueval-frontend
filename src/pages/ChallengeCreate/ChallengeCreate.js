import React from 'react';
import {FlexColumn, FlexRow} from '../../utils/containers';
import {H1New} from '../../utils/fonts';
import theme from '../../utils/theme';
import Button from '../../components/generic/Button';
import challengeCreate from '../../api/challengeCreate';
import getMetrics from '../../api/getMetrics';
import {popUpMessageHandler} from '../../redux/popUpMessegeSlice';
import {useDispatch} from 'react-redux';
import LOCAL_STORAGE from '../../utils/localStorage';
import {ThemeProvider} from '@mui/material/styles';
import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Grid,
    ListSubheader,
    Autocomplete
} from "@mui/material";
import ChallengeCreateStyle from "./ChallengeCreateStyle";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Dropzone from "../../components/generic/Dropzone/Dropzone";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import howToIcon from '../../assets/how-to.svg';
import {Link} from "react-router-dom";
import {CHALLENGE_CREATE_HOW_TO_PAGE, ROOT_PAGE, COMMON_METRICS} from "../../utils/globals";
import InputAdornment from '@mui/material/InputAdornment';
import LinkIcon from '@mui/icons-material/Link';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import customTheme from "../../utils/customTheme";


const ChallengeCreate = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [award, setAward] = React.useState('');
    const [deadline, setDeadline] = React.useState('');
    const [type, setType] = React.useState('');
    const [challengeSource, setChallengeSource] = React.useState('');
    const [uploadResult, setUploadResult] = React.useState(null);
    const [metrics, setMetrics] = React.useState([]);
    const [datasetError, setDatasetError] = React.useState(false);
    const [metricError, setMetricError] = React.useState(false);
    const [solutionError, setSolutionError] = React.useState(false);
    const [showAdvanced, setShowAdvanced] = React.useState(false);
    const [showMetricParameters, setShowMetricParameters] = React.useState(true);
    const [acceptedFiles, setAcceptedFiles] = React.useState([]);
    const [selectedMetrics, setSelectedMetrics] = React.useState([]);
    const [selectedFullMetrics, setSelectedFullMetrics] = React.useState([]);
    const parameterRefs = React.useState({});

    const parametersListRender = (metricName) => {
        const fullMetric = metrics?.find((m) => m['name'] === metricName);
        if (fullMetric) {
            if (!parameterRefs[fullMetric.name]) {
                parameterRefs[fullMetric.name] = {};
            }

            return fullMetric.parameters.map((parameter, index) => {
                const firstValue = Object.entries(parameter)[0][1];
                const placeholderParts = [];
                for (const [key, value] of Object.entries(parameter).slice(1)) {
                    placeholderParts.push(`"${key}": "${value}"`);
                }
                const placeholderText = placeholderParts.join('\n');

                const ref = React.createRef();
                parameterRefs[fullMetric.name][parameter.name] = ref;

                return (
                    <Grid item xs={6} key={index}>
                        <span className="topLabel metricParamLabel">{firstValue}</span>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder={placeholderText}
                            multiline
                            minRows={5}
                            maxRows={5}
                            inputProps={{
                                style: {
                                    whiteSpace: 'pre-wrap',
                                }
                            }}
                            inputRef={ref}
                        />
                    </Grid>
                );
            });
        }
        return null;
    };


    React.useEffect(() => {
        getMetrics(setMetrics);
    }, []);


    React.useEffect(() => {
        if (uploadResult) {
            if (uploadResult?.detail) {
                dispatch(
                    popUpMessageHandler({
                        header: 'Overview create error',
                        message: `Error: ${uploadResult.detail}`,
                        borderColor: theme.colors.red,
                    })
                );
            } else {
                dispatch(
                    popUpMessageHandler({
                        header: 'Overview create success',
                        message: `${uploadResult.challenge}: ${uploadResult.message}`,
                    })
                );
            }
        }
    }, [uploadResult, dispatch]);

    const validateChallenge = () => {
        const validateDataset = () => {
            if (!challengeSource) {
                setDatasetError('Dataset link is required');
                return false;
            } else if (!urlRegex.test(challengeSource)) {
                setDatasetError('Invalid dataset link');
                return false;
            }
            setDatasetError(false);
            return true;
        };

        const validateMetrics = () => {
            if (!selectedMetrics.length) {
                setMetricError('Metric is required');
                return false;
            }
            setMetricError(false);
            return true;
        };

        const validateSolution = () => {
            if (!acceptedFiles.length) {
                setSolutionError('Solution file is required');
                return false;
            }
            setSolutionError(false);
            return true;
        };

        const urlRegex = /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i;

        const isDatasetValid = validateDataset();
        const isMetricValid = validateMetrics();
        const isSolutionValid = validateSolution();

        return isDatasetValid && isMetricValid && isSolutionValid;
    };

    const formatDateString = (dateString, inputFormat, outputFormat) => {
        return dayjs(dateString, inputFormat).format(outputFormat);
    };

    const generateDescription = () => {
        const createdDate = dayjs().format('DD.MM.YYYY');
        const deadlineFormatted = deadline ? formatDateString(deadline, 'YYYY-MM-DDTHH:mm:ssZ', 'DD.MM.YYYY') : formatDateString(halfYearFromNow, 'YYYY-MM-DDTHH:mm:ssZ', 'DD.MM.YYYY');
        return `The ${title ? title : getTitleFromUrl()} challenge was created on ${createdDate}. Its deadline is set to ${deadlineFormatted}. The challenge uses ${selectedMetrics[0]} to evaluate solutions.`;
    };

    const createMainMetricParams = () => {
        let result = {};
        const main_metric = selectedMetrics[0];
        let params = Object.keys(parameterRefs[main_metric]);
        for (let j = 0; j < params.length; j++) {
            let param = params[j];
            let value = parameterRefs[main_metric][param]?.current.value;
            console.log(param);
            console.log(parameterRefs, parameterRefs[param], parameterRefs[param]?.current.value);
            if (value) {
                result[param] = value;
            }
        }
        return JSON.stringify(result, null, 2);
    };

    const createAdditionalMetrics = () => {
        let result = [];
        if (selectedMetrics.length > 1) {
            let metrics = Object.keys(parameterRefs);
            for (let i = 3; i < metrics.length; i++) {
                let metric = metrics[i];
                let metricObject = {
                    name: metric,
                    params: {}
                };
                let params = Object.keys(parameterRefs[metric]);
                for (let j = 0; j < params.length; j++) {
                    let param = params[j];
                    let value = parameterRefs[metric][param].current.value;
                    if (value) {
                        metricObject.params[param] = value;
                    }
                }
                result.push(metricObject);
            }
        }
        return JSON.stringify(result, null, 2);
    };

    const halfYearFromNow =  dayjs().add(6, 'months');

    const getTitleFromUrl = () => {
        if (!challengeSource) return '';
        return challengeSource.split('/').pop();
    };

    const categorizeMetrics = (metrics) => {
        let common = [];
        let other = [];
        metrics.forEach(metric => {
            if (COMMON_METRICS.includes(metric.name)) {
                common.push(metric.name);
            } else {
                other.push(metric.name);
            }
        });
        other = other.sort((a, b) => a.localeCompare(b));
        return [
            { title: 'Common', metrics: common },
            { title: 'Other', metrics: other },
        ];
    };

    const groupedMetrics = categorizeMetrics(metrics);

    const challengeCreateSubmit = async () => {
        const mainMetricParams = createMainMetricParams();
        const additionalMetrics = createAdditionalMetrics();
        console.log(mainMetricParams);
        console.log(additionalMetrics);
        const challengeValidated = validateChallenge();
        if (!challengeValidated) {
            return;
        }
        const challengeInput = {
            title: title ? title : getTitleFromUrl(),
            description: description ? description : generateDescription(),
            source: challengeSource,
            type: type,
            award: award,
            deadline: deadline ? formatDateString(deadline) : formatDateString(halfYearFromNow),
            sorting: '',
            main_metric: selectedMetrics[0],
            main_metric_parameters: mainMetricParams,
            additional_metrics: []
        };

        await challengeCreate(
            acceptedFiles[0],
            challengeInput,
            setUploadResult,
            localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)
        );
    };

    const handleShowAdvanced = () => {
        setShowAdvanced(!showAdvanced);
        setDeadline(halfYearFromNow);
        setTitle(getTitleFromUrl());
    };

    const handleMetricParameters = () => {
        setShowMetricParameters(!showMetricParameters);
    };

    const handleChallengeSource = (event) => {
        setChallengeSource(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleAwardChange = (event) => {
        setAward(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleDeadlineChange = (date) => {
        setDeadline(date);
    };

    const handleSelectedMetricsChange = (event, value) => {
        setSelectedMetrics(value);
        setSelectedFullMetrics(metrics.filter((m) => value.includes(m['name'])));
    };
    return (
        <ChallengeCreateStyle>
            <FlexColumn padding="140px 0" width="100%" minHeight="100vh" gap="32px">
                <FlexRow gap="12px">
                    <H1New as="h1">Create Challenge</H1New>
                    <FlexColumn as={Link} to={CHALLENGE_CREATE_HOW_TO_PAGE}>
                        <img className="howToIcon" alt="How to?" src={howToIcon} width="56px" height="53px"></img>
                    </FlexColumn>
                </FlexRow>
                <FlexColumn maxWidth="800px" width="100%" gap="20px">

                    <ThemeProvider theme={customTheme}>
                        <span className="topLabel">Dataset link *</span>
                        <TextField
                            error={!!datasetError}
                            label="Share URL to dataset"
                            variant="outlined"
                            fullWidth
                            onChange={handleChallengeSource}
                            helperText={datasetError ? datasetError: ''}
                        />
                    </ThemeProvider>
                        <ThemeProvider theme={customTheme}>
                        <span className="topLabel">Metrics *</span>
                        <FormControl fullWidth error={!!metricError}>
                            <Autocomplete
                                className="metricFilter"
                                multiple
                                getOptionDisabled={(groupedMetrics) => (selectedMetrics.length > 2)}
                                options={groupedMetrics.flatMap(group => group.metrics)}
                                groupBy={(option) => {
                                    return groupedMetrics.find(group => group.metrics.includes(option)).title;
                                }}
                                defaultValue={[]}
                                value={selectedMetrics}
                                renderGroup={(params) => (
                                    <React.Fragment>
                                        <ListSubheader
                                            sx={{
                                                color: theme.colors.black900,
                                                backgroundColor: '#BAE7E1',
                                                top: '-10px',
                                            }}
                                            className="subheader">{params.group}</ListSubheader>
                                        {params.children}
                                    </React.Fragment>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        placeholder="Select your metrics (maximum 3)"
                                    />
                                )}
                                onChange={handleSelectedMetricsChange}
                            />
                            <FormHelperText>{metricError ? metricError: ''}</FormHelperText>
                        </FormControl>
                    </ThemeProvider>

                    <FlexColumn gap="10px" width="100%">
                        <span className="topLabel">Upload solution *</span>
                            <Dropzone acceptedFiles={acceptedFiles} setAcceptedFiles={setAcceptedFiles} error={!!solutionError}></Dropzone>
                            <FormHelperText style={{ color: theme.colors.red, marginRight: 'auto', marginLeft: '20px'}}>{solutionError ? solutionError: ''}</FormHelperText>
                    </FlexColumn>

                    <div className="customizeBtn">
                        <Button
                            backgroundColor={theme.colors.white}
                            color="#5E5E5E"
                            underlined={true}
                            handler={handleShowAdvanced}
                        >
                            Advanced
                            <KeyboardDoubleArrowDownIcon
                                style={{
                                    color: theme.colors.green700,
                                    transform: showAdvanced ? 'rotate(180deg)' : 'none'
                                }}
                            />
                        </Button>
                    </div>

                    {showAdvanced && (
                        <>
                            <ThemeProvider theme={customTheme}>
                                <span className="topLabel">Title</span>
                                <TextField
                                    label="Enter the project title"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleTitleChange}
                                    value={title}
                                />
                            </ThemeProvider>

                            <ThemeProvider theme={customTheme}>
                                <span className="topLabel">Description</span>
                                <TextField
                                    label="Enter the project description"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleDescriptionChange}
                                />
                            </ThemeProvider>
                            <ThemeProvider theme={customTheme}>
                                <span className="topLabel">Deadline</span>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Enter or pick the submissions deadline"
                                        onChange={handleDeadlineChange}
                                        sx={{width: '100%'}}
                                        defaultValue={halfYearFromNow}
                                        value={deadline}
                                        format="DD.MM.YYYY"
                                    />
                                </LocalizationProvider>
                            </ThemeProvider>
                            <ThemeProvider theme={customTheme}>
                                <span className="topLabel">Type</span>
                                <FormControl fullWidth>
                                    <InputLabel>Choose data type</InputLabel>
                                    <Select
                                        value={type}
                                        onChange={handleTypeChange}
                                        label={"Choose data type"}
                                        IconComponent={KeyboardArrowDownIcon}
                                    >
                                        {['image', 'text', 'tabular'].map((type, index) => (
                                            <MenuItem key={index} value={type}>{type}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </ThemeProvider>

                            <ThemeProvider theme={customTheme}>
                                <span className="topLabel">Award</span>
                                <TextField
                                    label="Enter the award for the winner"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleAwardChange}
                                />
                            </ThemeProvider>
                        </>
                    )}

                    {!!selectedMetrics.length && ( <div className="metricParamsButtonWrapper">
                            <Button
                                width="170px"
                                backgroundColor='transparent'
                                handler={handleMetricParameters}
                            >
                                <span className="metricParamsButton">Metric Parameters</span>
                                <KeyboardDoubleArrowDownIcon
                                    style={{
                                        color: theme.colors.green700,
                                        transform: showMetricParameters ? 'rotate(180deg)' : 'none'
                                    }}
                                />
                            </Button>
                        </div>
                    )}


                    {showMetricParameters && (
                        <>
                            <ThemeProvider theme={customTheme}>
                                {selectedFullMetrics.map((metric, index) => (
                                    <React.Fragment key={index}>
                                        <span className="metricNameLabel">{metric.name}</span>
                                        <span className="topLabel">Sklearn metric URL</span>
                                        <TextField
                                            className="inputCopyMetricLink"
                                            variant="outlined"
                                            fullWidth
                                            value={metric.link}
                                            size="small"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start" onClick={() => window.open(metric.link, '_blank')}>
                                                        <LinkIcon style={{ transform: 'rotate(-45deg)', color: theme.colors.green700 }} />
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment position="end" onClick={() => navigator.clipboard.writeText(metric.link)}>
                                                        <ContentCopyIcon style={{ color: theme.colors.black500 }} />
                                                    </InputAdornment>
                                                ),
                                                sx: { borderRadius: '8px', color: theme.colors.black500, fontSize: '12px', input: { cursor: 'pointer' }, cursor: 'pointer'},
                                                readOnly: true,
                                            }}
                                        />
                                        <Grid container spacing={2}>
                                            {parametersListRender(metric.name)}
                                        </Grid>
                                    </React.Fragment>
                                ))}
                            </ThemeProvider>
                        </>
                    )}

                    <FlexRow width="100%" alignmentX="flex-end" alignmentY="flex-end" gap="20px">
                        <FlexRow as={Link} to={ROOT_PAGE}>
                            <Button
                                    backgroundColor={theme.colors.white}
                                    color="#5E5E5E"
                                    borderColor={theme.colors.gray500}
                                    height="32px"
                                    width="110px"
                            >
                                Cancel
                            </Button>
                        </FlexRow>
                        <Button
                            backgroundColor={theme.colors.white}
                            color="#5E5E5E"
                            borderColor={theme.colors.green700}
                            height="40px"
                            width="140px"
                            handler={() => challengeCreateSubmit()}
                        >
                            Submit
                        </Button>
                    </FlexRow>
                </FlexColumn>
            </FlexColumn>
        </ChallengeCreateStyle>
    );
};

export default ChallengeCreate;
