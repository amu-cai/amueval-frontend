import { API } from "../utils/globals";

const getAllEntriesNew = (challenge, setResult) => {
  fetch(`${API}/evaluation/${challenge}/all-submissions`)
    .then((response) => response.json())
    .then((data) => {
      setResult(data);
    });
};

export default getAllEntriesNew;
