import { API } from "../utils/globals";

const getAllEntriesNew = (challenge, setResult, setLoading) => {
  fetch(`${API}/evaluation/${challenge}/all-submissions`)
    .then((response) => response.json())
    .then((data) => {
      setResult(data);
      if (setLoading) {
        setLoading(false);
      }
    });
};

export default getAllEntriesNew;
