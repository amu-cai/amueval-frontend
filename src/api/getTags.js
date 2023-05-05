import { API } from '../utils/globals';

const getTags = (setTags) => {
  fetch(`${API}/list-tags`)
    .then((response) => response.json())
    .then((data) => {
      setTags(data);
    });
};

export default getTags;
