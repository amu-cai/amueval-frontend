import { API } from '../utils/globals';

const getChallenges = (setResult) => {
  fetch(`${API}/challenges/get-challenges`)
    .then((response) => response.json())
    .then((data) => {
      setResult(data);
    });
};

export default getChallenges;
