import SUBMIT_ACTION from './model/SubmitActionEnum';

const SUBMIT_INPUTS = [
  { label: 'Submission description', action: SUBMIT_ACTION.SET_DESCRIPTION },
  { label: 'Submission repo URL', action: SUBMIT_ACTION.SET_REPO_URL },
  // { label: 'Submission repo branch', action: SUBMIT_ACTION.SET_REPO_BRANCH },
];

export { SUBMIT_INPUTS };
