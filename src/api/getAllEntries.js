import { API } from '../utils/globals';

const getAllEntries = async (setDataState, challengeName, setLoading) => {
  await fetch(`${API}/challenge-all-submissions/${challengeName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setDataState(data.entries);
    });

  if (setLoading) {
    setLoading(false);
  }
};

export default getAllEntries;
