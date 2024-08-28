import React, {useState} from 'react';
import {FlexColumn, FlexRow} from '../../utils/containers';
import Button from "../../components/generic/Button";
import {ThemeProvider} from "@mui/material/styles";
import customTheme from "../../utils/customTheme";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import theme from "../../utils/theme";
import {TextareaAutosize} from '@mui/base/TextareaAutosize';
import ChallengeEditStyle from "./ChallengeEditStyle";
import dayjs from "dayjs";
import {FormHelperText} from "@mui/material";
import challengeEdit from "../../api/challengeEdit";
import LOCAL_STORAGE from "../../utils/localStorage";
import {formatDateString} from '../../utils/globals';

const ChallengeEdit = ({challenge, setChallengeUpdateResult}) => {
    const [deadline, setDeadline] = useState(dayjs(challenge.deadline, 'YYYY-MM-DDTHH:mm:ssZ'));
    const [description, setDescription] = useState(challenge.description);
    const [deadlineError, setDeadlineError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    const validateForm = () => {
        let valid = true;

        if (!deadline || !dayjs(deadline).isValid()) {
            setDeadlineError('Deadline is required');
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
        await challengeEdit({
                challenge_title: challenge.title,
                deadline: formatDateString(deadline, 'DD.MM.YYYY', 'YYYY-MM-DDTHH:mm:ssZ'),
                description: description,
            },
            localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)
        ).then(
            window.location.replace('/')
    );
    };

    return (
        <ChallengeEditStyle>
            <ThemeProvider theme={customTheme}>
                <FlexColumn width="800px">
                    <span className="topLabel">Deadline</span>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            error={!!deadlineError}
                            className="deadline"
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: deadlineError ? theme.colors.red : 'initial'
                                    },
                                },
                            }}
                            defaultValue={dayjs(deadline)}
                            onChange={(date) => setDeadline(date)}
                            format='DD.MM.YYYY'
                        />
                    </LocalizationProvider>
                    {deadlineError && <FormHelperText style={{
                        color: theme.colors.red,
                        marginRight: 'auto',
                        marginLeft: '20px'
                    }}>{deadlineError ? deadlineError : ''}</FormHelperText>}

                    <span className="topLabel">Description</span>
                    <TextareaAutosize
                        error={!!descriptionError}
                        className={descriptionError ? 'error' : ''}
                        as="textarea"
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
                    }}>{descriptionError ? descriptionError : ''}</FormHelperText>}

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
