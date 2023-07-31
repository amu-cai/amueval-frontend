import { API } from '../utils/globals';

const getTags = (setState) => {
  fetch(`${API}/list-tags`)
    .then((response) => response.json())
    .then((data) => {
      setState(data);
    });
};

export default getTags;
