import { API } from '../utils/globals';

const getChallenges = (setLoading, setResult) => {
  fetch(`${API}/challenges/get-challenges`)
    .then((response) => response.json())
    .then((data) => {
      setResult(data);
      setLoading(false);
    });
};

export default getChallenges;
