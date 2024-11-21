import React from 'react';
import {
    FlexColumn, FlexRow
} from '../../../utils/containers';
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import {
    // CHALLENGE_PAGE, CHALLENGES_PAGE,
    CHALLENGE_PAGE,
} from '../../../utils/globals';
import {H2New} from '../../../utils/fonts';
import theme from "../../../utils/theme";
import {getChallengeImage} from "../../../utils/globals";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Button from "../../../components/generic/Button";
import deleteChallenge from "../../../api/deleteChallenge";
import {useSelector} from "react-redux";


const MiniChallengeStyle = styled(FlexColumn)`
  width: 1100px;

  .challengeTypeImg {
    margin-right: 20px;
  }

  .wrap {
    width: 100%;
    border-top: 1px solid ${theme.colors.black700};
    padding: 20px;
    position: relative;
  }

  .titleHeader {
    margin-bottom: 8px;
  }

  .accuracy {
    color: ${theme.colors.green700};
    font-weight: bold;
    margin-right: auto;
    margin-top: 8px;
  }

  .highlight {
    font-weight: bold;
    color: ${theme.colors.green700}
  }

  .peopleIcon {
    color: ${theme.colors.green700};
  }

  .deadline {
    margin-left: 20px;
  }

  .participants {
    margin-left: 6px;
  }

  .wrap, .wrap div {
    cursor: pointer;
  }

  .description {
    margin-right: auto;
  }

  button {
    font-size: 20px;
    margin-left: auto;
    position: relative;
    bottom: 20px;
    right: 20px;
  }
`;

const MiniChallenge = (props) => {
    const navigate = useNavigate();
    const [result, setResult] = React.useState();
    const isAdmin = useSelector((state) => state.auth.isAdmin);

    const challengeDeleteSubmit = async () => {
        try {
            if (window.confirm(`Are you sure you want to delete challenge ${props.title}?`)) {
                await deleteChallenge(props.title, setResult);
            }
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        if (result?.success === true) {
            window.location.replace('/');
            // navigate(CHALLENGES_PAGE);
        }
    }, [result, navigate]);
    return (
        <MiniChallengeStyle>
            <FlexRow className="wrap" alignmentX="start" as={Link} to={`${CHALLENGE_PAGE}/${props.title}`}>
                <FlexColumn as="div">
                    <img className="challengeTypeImg" src={getChallengeImage(props.type)} alt="Overview type"/>
                </FlexColumn>
                <FlexColumn as="div" width="100%">
                    <FlexRow as="div" width="100%" alignmentY="space-between" alignmentX="space-between">
                        <H2New className="titleHeader">{props.title}</H2New>
                        <div className="challengeMetadata">
                            <FlexRow>
                                <FlexRow>
                                    <PeopleOutlineIcon className="peopleIcon"/><span
                                    className="highlight participants">{props.participants}</span>
                                </FlexRow>
                                <span className="highlight deadline">&nbsp;{props.deadline.slice(0, 10)}</span>
                            </FlexRow>
                        </div>
                    </FlexRow>
                    <FlexRow as="div" className="description">
                        {props.description}
                    </FlexRow>
                    <FlexRow as="div" className="accuracy">
                        {props.main_metric}
                    </FlexRow>
                </FlexColumn>
            </FlexRow>
            {(isAdmin) && (
                <Button
                    as="button"
                    backgroundColor="transparent"
                    color="red"
                    borderColor={theme.colors.red}
                    height="28px"
                    width="72px"
                    handler={() => challengeDeleteSubmit()}
                >Delete</Button>
            )}
        </MiniChallengeStyle>
    );
};

export default MiniChallenge;