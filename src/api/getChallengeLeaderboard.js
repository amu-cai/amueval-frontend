import { API } from '../utils/globals';

const getChallengeLeaderboard = async (
  setDataState,
  challengeName,
  setLoading
) => {
  await fetch(`${API}/leaderboard/${challengeName}`)
    .then((response) => response.json())
    .then((data) => {
      setDataState(data.entries);
    });

  if (setLoading) {
    setLoading(false);
  }
};

export default getChallengeLeaderboard;
