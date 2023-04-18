import { API } from '../utils/globals';

const getChallenges = (setDataStates, setLoadingState) => {
  fetch(`${API}/list-challenges`)
    .then((response) => response.json())
    .then((data) => {
      for (let setState of setDataStates) setState(data);
      if (setLoadingState) setLoadingState(false);
    });
};

export default getChallenges;
