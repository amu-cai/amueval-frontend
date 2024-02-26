import React from 'react';
import { H2, Menu } from '../../utils/fonts';
import Button from '../../components/generic/Button';
import theme from '../../utils/theme';
import SubmitStyle from './SubmitStyle';
import challengeSubmissionSubmit from '../../api/challengeSubmissionSubmit';
import SubmitInput from '../../components/generic/SubmitInput';
import { useDispatch, useSelector } from 'react-redux';
import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';

const Submit = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [description, setDescription] = React.useState(null);
  const [submissionZip, setSubmissionZip] = React.useState(null);
  const [submissionResult, setSubmissionResult] = React.useState(null);

  React.useEffect(() => {
    if (submissionResult?.submission && submissionResult?.message) {
      dispatch(
        popUpMessageHandler({
          header: 'Adding submission success',
          message: `${submissionResult.submission}: ${submissionResult.message}`,
          borderColor: theme.colors.green,
        })
      );
    } else if (submissionResult?.detail) {
      dispatch(
        popUpMessageHandler({
          header: 'Adding submission error',
          message: `Error: ${submissionResult.detail}`,
          borderColor: theme.colors.red,
        })
      );
    }
  }, [submissionResult, dispatch]);

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
              submitter: user,
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
