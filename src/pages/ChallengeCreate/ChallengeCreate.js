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
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import ChallengeCreateStyle from "../../components/generic/ChallengeCreateStyle";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Dropzone from './Dropzone';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";


const ChallengeCreate = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [award, setAward] = React.useState('');
    const [deadline, setDeadline] = React.useState('');
    const [type, setType] = React.useState('');
    const [metric, setMetric] = React.useState('');
    const [challengeSource, setChallengeSource] = React.useState('');
    // const [challengeFile] = React.useState(null);
    const [uploadResult, setUploadResult] = React.useState(null);
    const [metrics, setMetrics] = React.useState(null);
    const [datasetError, setDatasetError] = React.useState(false);
    const [metricError, setMetricError] = React.useState(false);
    const [solutionError, setSolutionError] = React.useState(false);
    const [titleError, setTitleError] = React.useState(false);
    const [showAdvanced, setShowAdvanced] = React.useState(false);

    const [acceptedFiles, setAcceptedFiles] = React.useState([]);


    React.useEffect(() => {
        getMetrics(setMetrics);
    }, []);


    React.useEffect(() => {
        if (uploadResult) {
            if (uploadResult?.detail) {
                dispatch(
                    popUpMessageHandler({
                        header: 'Challenge create error',
                        message: `Error: ${uploadResult.detail}`,
                        borderColor: theme.colors.red,
                    })
                );
            } else {
                dispatch(
                    popUpMessageHandler({
                        header: 'Challenge create success',
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

        const validateMetric = () => {
            if (!metric) {
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

        const validateTitle = () => {
            if (!title) {
                setTitleError('Title is required');
                return false;
            }
            setTitleError(false);
            return true;
        };

        const urlRegex = /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i;

        const isDatasetValid = validateDataset();
        const isMetricValid = validateMetric();
        const isSolutionValid = validateSolution();
        const isTitleValidated = validateTitle();

        return isDatasetValid && isMetricValid && isSolutionValid && isTitleValidated;
    };

    const handleShowAdvanced = () => {
        setShowAdvanced(!showAdvanced);
    };

    const challengeCreateSubmit = async () => {
        setTitle(getTitleFromUrl(challengeSource));
        setDeadline(halfYearFromNow);
        const challengeValidated = validateChallenge();
        if (!challengeValidated) {
            return;
        }
        const challengeInput = {
            title: title,
            description: description,
            source: challengeSource,
            type: type,
            main_metric: metric,
            award: award,
            deadline: deadline,
            sorting: '',
            main_metric_parameters: '',
        };

        await challengeCreate(
            acceptedFiles[0],
            challengeInput,
            setUploadResult,
            localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)
        );
    };

    const customTheme = createTheme({
        palette: {
            primary: {
                main: theme.colors.green700
            },
        },
    });

    const handleChallengeSource = (event) => {
        setChallengeSource(event.target.value);
        setTitle(getTitleFromUrl(challengeSource));
    };

    const handleMetricChange = (event) => {
        setMetric(event.target.value);
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

    const halfYearFromNow =  dayjs().add(6, 'months');

    const getTitleFromUrl = (url) => {
        if (!challengeSource) return '';
        return url.split('/').pop();
    };

    return (
        <ChallengeCreateStyle>
            <FlexColumn padding="140px 0" width="100%" minHeight="100vh" gap="32px">
                <FlexRow gap="12px">
                    <H1New as="h1">Create Challenge</H1New>
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
                        <span className="topLabel">Metric *</span>
                        <FormControl fullWidth error={!!metricError}>
                            <InputLabel>Choose your metric</InputLabel>
                            <Select
                                value={metric}
                                onChange={handleMetricChange}
                                label={"Choose your metric"}
                                IconComponent={KeyboardArrowDownIcon}
                            >
                                <MenuItem key="123" value="metryka">metryka</MenuItem>
                                {metrics ? metrics.map((m, index) => (
                                    <MenuItem key={index} value={m}>{m.name}</MenuItem>
                                )) : []}
                            </Select>
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
                                    error={!!titleError}
                                    label="Enter the project title"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleTitleChange}
                                    defaultValue={getTitleFromUrl(challengeSource)}
                                    helperText={titleError ? titleError: ''}
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

                    <FlexRow width="100%" alignmentX="flex-end" alignmentY="flex-end" gap="20px">
                        <Button
                            backgroundColor={theme.colors.white}
                            color="#5E5E5E"
                            borderColor={theme.colors.gray500}
                            height="32px"
                            width="110px"
                        >
                            Cancel
                        </Button>
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
