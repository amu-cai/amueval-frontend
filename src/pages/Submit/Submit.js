import React from 'react';
import { H2, Menu } from '../../utils/fonts';
import Button from '../../components/generic/Button';
import theme from '../../utils/theme';
import SubmitStyle from './SubmitStyle';
import challengeSubmissionSubmit from '../../api/challengeSubmissionSubmit';
import SubmitInput from '../../components/generic/SubmitInput';

const Submit = (props) => {
  const [submissionFile, setSubmissionFile] = React.useState();
  const [submissionResult, setSubmissionResult] = React.useState();

  React.useEffect(() => {
    if (submissionResult) {
      alert(submissionResult);
    }
  }, [submissionResult]);

  return (
    <SubmitStyle as="section">
      <H2 as="h2" className="SubmitStyle__header">
        Submit a solution to the challenge
      </H2>
      <SubmitInput
        label="Submission Zip File"
        type="file"
        accept='accept="zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed"'
        handler={(e) => {
          setSubmissionFile(e.target.files[0]);
        }}
      />
      <Button width="122px" height="44px" handler={() => challengeSubmissionSubmit(submissionFile, setSubmissionResult)}>
        <Menu color={theme.colors.white}>Submit</Menu>
      </Button>
    </SubmitStyle>
  );

};

export default Submit;
