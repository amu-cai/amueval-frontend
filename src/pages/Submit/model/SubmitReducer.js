import SUBMIT_ACTION from './SubmitActionEnum';

const SubmitReducer = (state, action) => {
  console.log(`SubmitReducer: ${action.type}`);
  let newSubmissionTags = state.submissionTags;
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
    case SUBMIT_ACTION.ADD_SUBMISSION_TAG:
      if (!newSubmissionTags.includes(action.payload)) {
        newTags = state.tags;
        newSubmissionTags.push(action.payload);
        newTags = newTags.filter((tag) => tag.name !== action.payload.name);
      }
      return { ...state, submissionTags: newSubmissionTags, tags: newTags };
    case SUBMIT_ACTION.REMOVE_SUBMISSION_TAG:
      if (newSubmissionTags.includes(action.payload)) {
        newSubmissionTags = newSubmissionTags.filter(
          (tag) => tag.name !== action.payload.name
        );
        newTags.push(action.payload);
        newTags = newTags.sort((a, b) => a.name.localeCompare(b.name));
      }
      return { ...state, submissionTags: newSubmissionTags, tags: newTags };
    case SUBMIT_ACTION.CLEAR_SUBMISSION_TAGS:
      return { ...state, submissionTags: [] };
    default:
      throw new Error('Undefined action in SubmitReducer!');
  }
};

export default SubmitReducer;
