import { API } from '../utils/globals';
import KeyCloakService from '../services/KeyCloakService';

const getChallengeLeaderboard = (
  endpoint,
  challengeName,
  setDataStates,
  setLoadingState,
  setScoreSorted
) => {
  fetch(`${API}/${endpoint}/${challengeName}`, {
    headers: { Authorization: `Bearer ${KeyCloakService.getToken()}` },
  })
    .then((response) => response.json())
    .then((data) => {
      let item = {};
      let result = [];
      let initSetScoreSorted = [];
      let tests = data.tests;
      for (let submission of data.entries) {
        for (let evaluation of submission.evaluations) {
          item = {
            ...item,
            evaluations: {
              ...item.evaluations,
              [`${evaluation.test.metric}.${evaluation.test.name}`]:
                evaluation.score,
            },
          };
        }
        for (let test of tests) {
          if (!item.evaluations) {
            item.evaluations = {};
          }
          if (!Object.hasOwn(item.evaluations, `${test.metric}.${test.name}`)) {
            item = {
              ...item,
              evaluations: {
                ...item.evaluations,
                [`${test.metric}.${test.name}`]: -999999999,
              },
            };
          }
        }
        item = {
          ...item.evaluations,
          id: submission.id,
          submitter: submission.submitter,
          when: submission.when,
          description: submission.description,
          entries: submission.times,
          tags: submission.tags,
        };
        result.push(item);
        item = {};
      }
      // eslint-disable-next-line no-unused-vars
      for (let _ of tests) {
        initSetScoreSorted.push(false);
      }
      console.log(result);
      for (let setDataState of setDataStates) setDataState(result);
      if (setScoreSorted) setScoreSorted(initSetScoreSorted);
      if (setLoadingState) setLoadingState(false);
    });
};

export default getChallengeLeaderboard;
