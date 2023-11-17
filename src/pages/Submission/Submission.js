import React from 'react';
import { FlexColumn, FlexRow } from '../../utils/containers';
import { useLocation } from 'react-router-dom';
import getSubmissionPage from '../../api/getSubmissionPage';

const Submission = () => {
  const submission = useLocation().state;

  React.useEffect(() => {
    getSubmissionPage('https://gonito.net', submission.variant);
  }, [submission]);

  return (
    <FlexColumn width="100%" height="100vh">
      <FlexRow>Submission page</FlexRow>
    </FlexColumn>
  );
};

export default Submission;
