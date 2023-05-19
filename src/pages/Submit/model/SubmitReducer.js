import SUBMIT_ACTION from './SubmitActionEnum';

const SubmitReducer = (state, action) => {
  console.log(`SubmitReducer: ${action.type}`);
  let newTags = state.tags;
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
      if (state.tags.length === 0) newTags = action.payload;
      return { ...state, tags: newTags };
    case SUBMIT_ACTION.UPDATE_TAGS:
      return {
        ...state,
        submissionTags: action.payload.submissionTags,
        tags: action.payload.tags,
      };
    default:
      throw new Error('Undefined action in SubmitReducer!');
  }
};

export default SubmitReducer;
