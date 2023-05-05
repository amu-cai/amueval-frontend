import CHALLENGES_ACTION from '../pages/Challanges/ChallengesActionEnum';
import { API } from '../utils/globals';

const getChallenges = (dispatch) => {
  fetch(`${API}/list-challenges`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: CHALLENGES_ACTION.LOAD_CHALLENGES_FROM_API,
        payload: data,
      });
    });
};

export default getChallenges;
