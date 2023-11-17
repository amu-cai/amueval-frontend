// import { API } from '../utils/globals';

const getChallengeFullDescription = (
  setDataState,
  setLoading,
  challengeName
) => {
  // TODO: insert challenge repos on our server to use API variable
  fetch(`https://gonito.net/api/challenge-readme/${challengeName}/markdown`)
    .then((response) => response.text())
    .then((data) => {
      setDataState(data);
      if (setLoading) setLoading(false);
    });
};

export default getChallengeFullDescription;
