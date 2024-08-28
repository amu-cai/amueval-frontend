import React from 'react';
import {FlexColumn, FlexRow} from '../../../utils/containers';
import Button from '../../generic/Button';
import {ThemeProvider} from "@mui/material/styles";
import customTheme from "../../../utils/customTheme";
import theme from "../../../utils/theme";
import deleteChallenge from '../../../api/deleteChallenge';
import {useNavigate} from 'react-router-dom';
import {CHALLENGES_PAGE} from '../../../utils/globals';
import {BodyNew} from "../../../utils/fonts";


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
    return (
        <ThemeProvider theme={customTheme}>
            <FlexColumn width="800px">
                <BodyNew className="topLabel">{challenge.title}</BodyNew>
                <p className="topLabel">{challenge.description}</p>
                <FlexRow width="100%" alignmentX="end">
                    <Button
                        backgroundColor={theme.colors.white}
                        color="red"
                        borderColor={theme.colors.red}
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
