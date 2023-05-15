import React from 'react';
import { createPortal } from 'react-dom';
import { FlexColumn } from '../../utils/containers';
import { H2, Menu } from '../../utils/fonts';
import SubmitInput from '../../components/generic/SubmitInput';
import Button from '../../components/generic/Button';
import theme from '../../utils/theme';
import challengeSubmission from '../../api/challengeSubmissionPost';
import Loading from '../../components/generic/Loading';
import getTags from '../../api/getTags';
import TagsChoose from './components/TagsChoose';
import SubmitReducer from './model/SubmitReducer';
import SUBMIT_ACTION from './model/SubmitActionEnum';

const Submit = (props) => {
  const [state, dispatch] = React.useReducer(SubmitReducer, {
    description: '',
    repoUrl: '',
    repoBranch: '',
    submissionLoading: false,
    tags: [],
    submissionTags: [],
  });

  React.useMemo(() => {
    getTags(dispatch);
  }, []);

  const challengeSubmissionSubmit = () => {
    dispatch({ type: SUBMIT_ACTION.TOGGLE_SUBMISSION_LOADING });
    challengeSubmission(
      props.challengeName,
      state.repoUrl,
      state.repoBranch,
      state.description,
      dispatch
    );
  };

  const setDescription = (value) => {
    dispatch({ type: SUBMIT_ACTION.SET_DESCRIPTION, payload: value });
  };

  const setRepoUrl = (value) => {
    dispatch({ type: SUBMIT_ACTION.SET_REPO_URL, payload: value });
  };

  const setRepoBranch = (value) => {
    dispatch({ type: SUBMIT_ACTION.SET_REPO_BRANCH, payload: value });
  };

  const addSubmissionTag = React.useCallback((value) => {
    dispatch({ type: SUBMIT_ACTION.ADD_SUBMISSION_TAG, payload: value });
  }, []);

  if (!state.submissionLoading) {
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
          <TagsChoose
            label="Submission tags"
            addSubmissionTag={addSubmissionTag}
            tags={state.tags}
            submissionTags={state.submissionTags}
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
