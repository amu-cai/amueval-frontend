import {API} from '../utils/globals';
import KeyCloakService from '../services/KeyCloakService';

const getMyEntries = (challengeName, setDataOriginalState, setDataStateForSearch, setDataState, setLoadingState, setScoreSorted) => {
    fetch(`${API}/challenge-my-submissions/${challengeName}`, {
        headers: {'Authorization': `Bearer ${KeyCloakService.getToken()}`}
    })
        .then(response => response.json())
        .then(data => {
            setDataOriginalState(data);
            let item = {};
            let result = [];
            let initSetScoreSorted = [];
            let tests = data.tests;
            for (let submission of data.submissions) {
                for (let evaluation of submission.evaluations) {
                    item = {
                        ...item,
                        evaluations: {
                            ...item.evaluations,
                            [`${evaluation.test.metric}.${evaluation.test.name}`]: evaluation.score
                        }
                    };
                }
                for (let test of tests) {
                    if (item.evaluations) {
                        if (!Object.hasOwn(item.evaluations, `${test.metric}.${test.name}`)) {
                            item = {
                                ...item,
                                evaluations: {
                                    ...item.evaluations,
                                    [`${test.metric}.${test.name}`]: '-1'
                                }
                            };
                        }
                    }
                }
                item = {
                    ...item,
                    id: submission.id,
                    submitter: submission.submitter,
                    when: submission.when,
                };
                result.push(item);
                item = {};
            }
            // eslint-disable-next-line no-unused-vars
            for (let _ of tests) {
                initSetScoreSorted.push(false);
            }
            setScoreSorted(initSetScoreSorted);
            setDataStateForSearch(result);
            setDataState(result);
            setLoadingState(false);
        });
};

export default getMyEntries;