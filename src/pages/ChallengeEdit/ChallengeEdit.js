import React, { useState } from 'react';
import { FlexColumn, FlexRow } from '../../utils/containers';
import Button from "../../components/generic/Button";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "../../utils/customTheme";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import theme from "../../utils/theme";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import ChallengeEditStyle from "./ChallengeEditStyle";
import dayjs from "dayjs";
import { FormHelperText } from "@mui/material";
import challengeEdit from "../../api/challengeEdit";
import LOCAL_STORAGE from "../../utils/localStorage";
import { formatDateString } from '../../utils/globals';

const ChallengeEdit = ({ challenge, setChallengeUpdateResult }) => {
    const initialDeadline = dayjs(challenge.deadline, 'YYYY-MM-DDTHH:mm:ssZ');
    const [deadline, setDeadline] = useState(initialDeadline);
    const [description, setDescription] = useState(challenge.description);
    const [deadlineError, setDeadlineError] = useState(false);
    const [result, setResult] = useState();
    const [descriptionError, setDescriptionError] = useState(false);

    const validateForm = () => {
        let valid = true;

        if (!deadline || !dayjs(deadline).isValid()) {
            setDeadlineError('Deadline date and time are required');
            valid = false;
        } else {
            setDeadlineError(false);
        }

        if (!description || description.trim() === '') {
            setDescriptionError('Description is required');
            valid = false;
        } else {
            setDescriptionError(false);
        }

        return valid;
    };

    const challengeEditSubmit = async () => {
        const validated = validateForm();
        if (!validated) {
            return;
        }
        try {
            await challengeEdit({
                    challenge_title: challenge.title,
                    deadline: formatDateString(deadline, 'DD.MM.YYYY', 'YYYY-MM-DDTHH:mm:ssZ'),
                    description: description,
                },
                localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN),
                setResult
            );
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        console.log(result);
        if (result === null) {
            window.location.replace(`/challenge/${challenge.title}`);
        }
    }, [result]);

    const handleDateTimeChange = (newDateTime) => {
        if (newDateTime && dayjs(newDateTime).isValid()) {
            setDeadline(newDateTime);
        }
    };

    return (
        <ChallengeEditStyle>
            <ThemeProvider theme={customTheme}>
                <FlexColumn width="800px">
                    <span className="topLabel">Deadline</span>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <FlexRow width="100%" className="deadline" gap="16px">
                            <DateTimePicker
                                error={!!deadlineError}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: deadlineError ? theme.colors.red : 'initial'
                                        },
                                    },
                                }}
                                value={deadline}
                                onChange={handleDateTimeChange}
                                format='DD.MM.YYYY HH:mm'
                                ampm={false}
                                timeSteps={{'minutes': 1}}
                            />
                        </FlexRow>
                    </LocalizationProvider>
                    {deadlineError && <FormHelperText style={{
                        color: theme.colors.red,
                        marginRight: 'auto',
                        marginLeft: '20px'
                    }}>{deadlineError}</FormHelperText>}

                    <span className="topLabel">Description</span>
                    <TextareaAutosize
                        className={descriptionError ? 'error' : ''}
                        aria-label="minimum height"
                        minRows={6}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                    />
                    {descriptionError && <FormHelperText style={{
                        color: theme.colors.red,
                        marginRight: 'auto',
                        marginLeft: '20px'
                    }}>{descriptionError}</FormHelperText>}

                    <FlexRow width="100%" alignmentX="end" className="submitButton">
                        <Button
                            backgroundColor={theme.colors.white}
                            color="#5E5E5E"
                            borderColor={theme.colors.green700}
                            height="40px"
                            width="140px"
                            handler={() => challengeEditSubmit()}
                        >Submit</Button>
                    </FlexRow>
                </FlexColumn>
            </ThemeProvider>
        </ChallengeEditStyle>
    );
};

export default ChallengeEdit;
