import React from "react";
import { FlexColumn, FlexRow } from "../../utils/containers";
import KeyCloakService from "../../services/KeyCloakService";
import { useParams } from 'react-router-dom';

const Submission = (props) => {
  /* eslint-disable */
  const [entriesAll, setEntriesAll] = React.useState([]);
  const [entries, setEntries] = React.useState([]);
  const [pageNr, setPageNr] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [idSorted, setIdSorted] = React.useState([]);
  const [scoresSorted, setScoresSorted] = React.useState([]);
  const [submitterSorted, setSubmitterSorted] = React.useState(false);
  const [whenSorted, setWhenSorted] = React.useState(false);
  const [profileInfo, setProfileInfo] = React.useState(null);

  const challengeName = useParams().challengeId;
  const SubmissionId = useParams().submissionId;

  const getProfileInfo = () => {
    if (KeyCloakService.isLoggedIn()) {
      KeyCloakService.getProfileInfo(setProfileInfo);
    } else {
      setProfileInfo(false);
    }
  };

    React.useMemo(() => {
        if (props.challengeName) {
          getEntries(
            'challenge-all-submissions',
            props.challengeName,
            [setEntries, setEntriesAll],
            setLoading,
            setScoresSorted
          );
        }
        getProfileInfo();
      }, [props.challengeName]);

    return (
        <FlexColumn width='100%' height='100vh'>
            <FlexRow>siema</FlexRow>
        </FlexColumn>
    );
};

export default Submission;