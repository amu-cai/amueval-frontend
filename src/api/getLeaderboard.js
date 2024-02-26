import { API } from '../utils/globals';

const getLeaderboard = (challenge, setResult, setLoading) => {
  fetch(`${API}/evaluation/${challenge}/leaderboard`)
    .then((response) => response.json())
    .then((data) => {
      setResult(data);
      if (setLoading) {
        setLoading(false);
      }
    });
};

export default getLeaderboard;
