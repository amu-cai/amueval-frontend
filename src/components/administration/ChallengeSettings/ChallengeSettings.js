import React from 'react';
import {FlexColumn, FlexRow} from '../../../utils/containers';
import Button from '../../generic/Button';
import {ThemeProvider} from "@mui/material/styles";
import customTheme from "../../../utils/customTheme";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import theme from "../../../utils/theme";
import {TextareaAutosize as BaseTextareaAutosize} from '@mui/base/TextareaAutosize';
import styled from "styled-components";
import deleteChallenge from '../../../api/deleteChallenge';
import {useNavigate} from 'react-router-dom';
import {CHALLENGES_PAGE} from '../../../utils/globals';


const ChallengeSettings = ({challenge, setChallengeUpdateResult}) => {
    const navigate = useNavigate();
    const [result, setResult] = React.useState();

    const challengeDeleteSubmit = async () => {
        try {
            await deleteChallenge(challenge.title, setResult);

        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        if (result?.success) {
            navigate(CHALLENGES_PAGE);
        }
    }, [result, navigate]);


    const TextareaAutosize = styled(BaseTextareaAutosize)(
        ({theme}) => `
  box-sizing: border-box;
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;

  &:hover {
  }

  &:focus {
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
    );
    return (
        <ThemeProvider theme={customTheme}>
            <FlexColumn width="800px">
                <span className="topLabel">Deadline</span>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        // onChange={handleDeadlineChange}
                        sx={{width: '100%'}}
                        // value={challenge.deadline}
                        format="DD.MM.YYYY"
                    />
                </LocalizationProvider>

                <span className="topLabel">Description</span>
                <TextareaAutosize aria-label="minimum height" minRows={3} defaultValue={challenge.description}
                                  placeholder="Description"/>
                <FlexRow width="100%" alignmentX="end">
                    <Button
                        backgroundColor={theme.colors.white}
                        color="#5E5E5E"
                        borderColor={theme.colors.green700}
                        height="40px"
                        width="140px"
                        handler={() => challengeDeleteSubmit()}
                    >Delete</Button>
                </FlexRow>
            </FlexColumn>
        </ThemeProvider>
    );
};

export default ChallengeSettings;
