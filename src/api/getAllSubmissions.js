// import { API } from '../utils/globals';

const getAllSubmissions = (challenge, setResult) => {
  fetch(`http://localhost:8000/evaluation/${challenge}/all-submissions`)
    .then((response) => response.json())
    .then((data) => {
      setResult(data);
    });
};

export default getAllSubmissions;
