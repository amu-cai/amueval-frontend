import React from 'react';
import { H2, Menu } from '../../utils/fonts';
import Button from '../../components/generic/Button';
import theme from '../../utils/theme';
import SubmitStyle from './SubmitStyle';
import challengeSubmissionSubmit from '../../api/challengeSubmissionSubmit';
import SubmitInput from '../../components/generic/SubmitInput';

const Submit = (props) => {
  const [description, setDescription] = React.useState();
  const [repoUrl, setRepoUrl] = React.useState();

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
      <SubmitInput
        label="Submission repo URL"
        handler={(value) => {
          setRepoUrl(value);
        }}
      />
      <Button
        width="122px"
        height="44px"
        handler={() =>
          challengeSubmissionSubmit(
            {
              submitter: '',
              description: description,
              repo_url: repoUrl,
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
