import React from 'react';
import { H2, Menu } from '../../utils/fonts';
import Button from '../../components/generic/Button';
import theme from '../../utils/theme';
import SubmitStyle from './SubmitStyle';
import challengeSubmissionSubmit from '../../api/challengeSubmissionSubmit';
import SubmitInput from '../../components/generic/SubmitInput';

const Submit = (props) => {
  const [description, setDescription] = React.useState();
  // const [repoUrl, setRepoUrl] = React.useState();
  const [submissionZip, setSubmissionZip] = React.useState();

  const [submissionResult, setSubmissionResult] = React.useState();

  React.useEffect(() => {
    if (submissionResult) {
      alert(`${submissionResult.submission}: ${submissionResult.message}`);
    }
  }, [submissionResult]);

  return (
    <SubmitStyle as="section">
      <H2 as="h2" className="SubmitStyle__header">
        Submit a solution to the challenge
      </H2>
      <SubmitInput
        label="Submission description"
        type="textarea"
        handler={(value) => {
          setDescription(value);
        }}
      />
      {/* <SubmitInput
        label="Submission repo URL"
        handler={(value) => {
          setRepoUrl(value);
        }}
      /> */}
      <SubmitInput
        label="Submission Zip File"
        type="file"
        accept='accept="zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed"'
        handler={(e) => {
          setSubmissionZip(e.target.files[0]);
        }}
      />
      <Button
        width="122px"
        height="44px"
        handler={() =>
          challengeSubmissionSubmit(
            {
              submitter: 'x',
              description: description,
              submission_zip: submissionZip,
              challenge_title: props.challengeName,
            },
            setSubmissionResult
          )
        }
      >
        <Menu color={theme.colors.white}>Submit</Menu>
      </Button>
    </SubmitStyle>
  );
};

export default Submit;
