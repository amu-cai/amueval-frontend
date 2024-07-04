import React from 'react';
import {FlexColumn, FlexRow} from '../../utils/containers';
// import theme from '../../../utils/theme';
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

const ChallengeEdit = ({challenge, setChallengeUpdateResult}) => {
    const challengeEditSubmit = async () => {
        console.log('edit');
    };

    return (
        <ChallengeEditStyle>
            <ThemeProvider theme={customTheme}>
                <FlexColumn width="800px">
                    <span className="topLabel">Deadline</span>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            className="deadline"
                            sx={{width: '100%'}}
                            defaultValue={dayjs(challenge.deadline, 'YYYY-MM-DDTHH:mm:ssZ')}
                            format="DD.MM.YYYY"
                        />
                    </LocalizationProvider>

                    <span className="topLabel">Description</span>
                    <TextareaAutosize as="textarea" aria-label="minimum height" minRows={6} defaultValue={challenge.description}
                                      placeholder="Description"/>
                    <FlexRow width="100%" alignmentX="end" className="submitButton">
                        <Button
                            backgroundColor={theme.colors.white}
                            color="#5E5E5E"
                            borderColor={theme.colors.green700}
                            height="40px"
                            width="140px"
                            handler={() => challengeEditSubmit()}
                        >Edit</Button>
                    </FlexRow>
                </FlexColumn>
            </ThemeProvider>
        </ChallengeEditStyle>
    );
};

export default ChallengeEdit;
