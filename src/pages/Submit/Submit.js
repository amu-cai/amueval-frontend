import React from 'react';
import { createPortal } from 'react-dom';
import { FlexColumn } from '../../utils/containers';
import { H2, Menu } from '../../utils/fonts';
import SubmitInput from '../../components/generic/SubmitInput';
import Button from '../../components/generic/Button';
import theme from '../../utils/theme';
import challengeSubmission from '../../api/challengeSubmissionPost';
import getTags from '../../api/getTags';
import TagsChoose from './components/TagsChoose';
import SubmitReducer from './model/SubmitReducer';
import SUBMIT_ACTION from './model/SubmitActionEnum';
import SubmitStyle from './SubmitStyle';
import SubmissionLoading from './components/SubmissionLoading/SubmissionLoading';

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

  const challengeSubmissionSubmit = React.useCallback(() => {
    dispatch({ type: SUBMIT_ACTION.TOGGLE_SUBMISSION_LOADING });
    challengeSubmission(
      props.challengeName,
      state.repoUrl,
      state.repoBranch,
      state.description,
      state.submissionTags,
      dispatch
    );
  }, [
    props.challengeName,
    state.description,
    state.repoBranch,
    state.repoUrl,
    state.submissionTags,
  ]);

  if (!state.submissionLoading) {
    return (
      <SubmitStyle as="section">
        <H2 as="h2" className="SubmitStyle__header">
          Submit a solution to the challenge
        </H2>
        <FlexColumn className="SubmitStyle__form">
          <SubmitInput
            label="Submission description"
            handler={(value) => {
              dispatch({ type: SUBMIT_ACTION.SET_DESCRIPTION, payload: value });
            }}
          />
          <SubmitInput
            label="Submission repo URL"
            handler={(value) => {
              dispatch({ type: SUBMIT_ACTION.SET_REPO_URL, payload: value });
            }}
          />
          <SubmitInput
            label="Submission repo branch"
            handler={(value) => {
              dispatch({ type: SUBMIT_ACTION.SET_REPO_BRANCH, payload: value });
            }}
          />
          <TagsChoose
            label="Submission tags"
            updateTags={(submissionTags, tags) => {
              dispatch({
                type: SUBMIT_ACTION.UPDATE_TAGS,
                payload: { submissionTags: submissionTags, tags: tags },
              });
            }}
            tags={state.tags}
            submissionTags={state.submissionTags}
          />
        </FlexColumn>
        <Button width="122px" height="44px" handler={challengeSubmissionSubmit}>
          <Menu color={theme.colors.white}>Submit</Menu>
        </Button>
      </SubmitStyle>
    );
  } else {
    return createPortal(<SubmissionLoading />, document.body);
  }
};

export default Submit;
