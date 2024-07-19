import React from 'react';
import Button from '../../components/generic/Button';
import theme from '../../utils/theme';
import SubmitStyle from './SubmitStyle';
import challengeSubmissionSubmit from '../../api/challengeSubmissionSubmit';
// import SubmitInput from '../../components/generic/SubmitInput';
import {useDispatch} from 'react-redux';
import {popUpMessageHandler} from '../../redux/popUpMessegeSlice';
import LOCAL_STORAGE from '../../utils/localStorage';
import customTheme from "../../utils/customTheme";
import {FlexColumn, FlexRow} from "../../utils/containers";
import {TextareaAutosize} from "@mui/base/TextareaAutosize";
import {ThemeProvider} from "@mui/material/styles";
import Dropzone from "../../components/generic/Dropzone/Dropzone";
import {FormHelperText} from "@mui/material";


const Submit = (props) => {
    const dispatch = useDispatch();

    const [submissionResult, setSubmissionResult] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [descriptionError, setDescriptionError] = React.useState(false);
    const [solution, setSolution] = React.useState([]);
    const [solutionError, setSolutionError] = React.useState(false);

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const validateSubmission = () => {
        const validateSolution = () => {
            if (!solution.length) {
                setSolutionError('Solution file is required');
                return false;
            }
            setSolutionError(false);
            return true;
        };

        const validateDescription = () => {
            if (!description) {
                setDescriptionError('Description is required');
                return false;
            }
            setDescriptionError(false);
            return true;
        };

        const iseDescriptionValid = validateDescription();
        const isSolutionValid = validateSolution();

        return iseDescriptionValid && isSolutionValid;
    };

    const submissionCreateSubmit = () => {
        const submissionValidated = validateSubmission();
        if (!submissionValidated) {
            return;
        }
        challengeSubmissionSubmit(
            {
                description: description,
                submission_zip: solution[0],
                challenge_title: props.challenge.title,
                metric: props.challenge.mainMetric,
                parameters: props.challenge.mainMetricParameters,
            },
            setSubmissionResult,
            localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)
        );
    };

    React.useEffect(() => {
        if (submissionResult?.submission && submissionResult?.message) {
            dispatch(
                popUpMessageHandler({
                    header: 'Adding submission success',
                    message: `${submissionResult.submission}: ${submissionResult.message}`,
                    borderColor: theme.colors.green,
                })
            );
        } else if (submissionResult?.detail) {
            dispatch(
                popUpMessageHandler({
                    header: 'Adding submission error',
                    message: `Error: ${submissionResult.detail}`,
                    borderColor: theme.colors.red,
                })
            );
        }
    }, [submissionResult, dispatch]);

    return (
        <SubmitStyle as="section">
            <ThemeProvider theme={customTheme}>
                <FlexColumn width="800px">
                    <span className="topLabel">Description</span>
                    <TextareaAutosize
                        onChange={handleDescriptionChange}
                        as="textarea" aria-label="minimum height" minRows={6} placeholder="Add description to your solution"
                        helperText={descriptionError ? descriptionError: ''}
                        error={!!descriptionError}
                        className={descriptionError ? 'error' : ''}
                    />
                    <FormHelperText style={{ color: theme.colors.red, marginRight: 'auto', marginLeft: '20px'}}>{descriptionError ? descriptionError: ''}</FormHelperText>
                    <FlexColumn width="100%">
                        <span className="topLabel">Upload solution *</span>
                        <Dropzone acceptedFiles={solution} setAcceptedFiles={setSolution} error={!!solutionError}></Dropzone>
                        <FormHelperText style={{ color: theme.colors.red, marginRight: 'auto', marginLeft: '20px', marginTop: '10px'}}>{solutionError ? solutionError: ''}</FormHelperText>
                    </FlexColumn>

                </FlexColumn>
            </ThemeProvider>
            <FlexRow width="100%" alignmentX="end">
                <Button
                    as="button"
                    backgroundColor={theme.colors.white}
                    color="#5E5E5E"
                    borderColor={theme.colors.green700}
                    height="40px"
                    width="140px"
                    handler={submissionCreateSubmit}
                >
                    Submit
                </Button>
            </FlexRow>
        </SubmitStyle>
    );
};

export default Submit;
