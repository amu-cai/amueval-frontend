import React from 'react';
import { createPortal } from 'react-dom';
import { FlexColumn } from '../../utils/containers';
import { H2, Menu } from '../../utils/fonts';
import SubmitInput from '../generic/SubmitInput';
import Button from '../generic/Button';
import theme from '../../utils/theme';
import challengeSubmission from '../../api/challengeSubmissionPost';
import Loading from '../generic/Loading';
import getTags from '../../api/getTags';
import DropdownWithPopup from '../generic/DropdownWithPopup';

const Submit = (props) => {
  const [description, setDescription] = React.useState('');
  const [repoUrl, setRepoUrl] = React.useState('');
  const [repoBranch, setRepoBranch] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [tags, setTags] = React.useState([]);
  // eslint-disable-next-line no-unused-vars
  const [submissionTags, setSubmissionTags] = React.useState([]);

  React.useMemo(() => {
    getTags(setTags);
  }, []);

  const challengeSubmissionSubmit = () => {
    setLoading(true);
    challengeSubmission(
      props.challengeName,
      repoUrl,
      repoBranch,
      description,
      setLoading
    );
  };

  if (!loading) {
    return (
      <FlexColumn
        margin="40px 0 0 0"
        padding="24px"
        as="section"
        gap="64px"
        maxWidth="624px"
        width="100%"
        alignmentX="flex-start"
      >
        <H2 as="h2" width="100%" textAlign="center">
          Submit a solution to the challenge
        </H2>
        <FlexColumn width="100%" gap="32px">
          <SubmitInput
            label="Submission description"
            handler={setDescription}
          />
          <SubmitInput label="Submission repo URL" handler={setRepoUrl} />
          <SubmitInput label="Submission repo branch" handler={setRepoBranch} />
          <DropdownWithPopup
            label="Submission tags"
            handler={setSubmissionTags}
            tags={tags}
          />
        </FlexColumn>
        <Button width="122px" height="44px" handler={challengeSubmissionSubmit}>
          <Menu color={theme.colors.white}>Submit</Menu>
        </Button>
      </FlexColumn>
    );
  } else {
    return createPortal(
      <FlexColumn
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100vh"
        zIndex="100"
        backgroundColor={theme.colors.white}
      >
        <H2 as="h1">Submission processing...</H2>
        <Loading />
      </FlexColumn>,
      document.body
    );
  }
};

export default Submit;
