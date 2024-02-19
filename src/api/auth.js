import { API } from '../utils/globals';

const auth = (token, setResult) => {
  fetch(`${API}/auth`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => response.json())
    .then((data) => {
      setResult(data);
    });
};

export default auth;
