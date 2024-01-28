// import { API } from '../utils/globals';

const getAllEntriesNew = (challenge, setResult) => {
  fetch(`http://localhost:8000/evaluation/${challenge}/all-entries`)
    .then((response) => response.json())
    .then((data) => {
      setResult(data);
    });
};

export default getAllEntriesNew;
