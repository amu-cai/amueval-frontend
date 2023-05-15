import SUBMIT_ACTION from './SubmitActionEnum';

const SubmitReducer = (state, action) => {
  console.log('SubmitReducer');
  let initTags = state.tags;
  let newSubmissionTags = state.submissionTags;
  switch (action.type) {
    case SUBMIT_ACTION.SET_DESCRIPTION:
      return { ...state, description: action.payload };
    case SUBMIT_ACTION.SET_REPO_BRANCH:
      return { ...state, repoBranch: action.payload };
    case SUBMIT_ACTION.SET_REPO_URL:
      return { ...state, repoUrl: action.payload };
    case SUBMIT_ACTION.TOGGLE_SUBMISSION_LOADING:
      return { ...state, submissionLoading: !state.submissionLoading };
    case SUBMIT_ACTION.LOAD_TAGS:
      if (state.tags.length === 0) initTags = action.payload;
      return { ...state, tags: initTags };
    case SUBMIT_ACTION.ADD_SUBMISSION_TAG:
      if (!newSubmissionTags.includes(action.payload))
        newSubmissionTags.push(action.payload);
      return { ...state, submissionTags: newSubmissionTags };
    case SUBMIT_ACTION.CLEAR_SUBMISSION_TAGS:
      return { ...state, submissionTags: [] };
    default:
      throw new Error('Undefined action in SubmitReducer!');
  }
};

export default SubmitReducer;
