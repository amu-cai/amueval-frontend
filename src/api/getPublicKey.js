import { API } from '../utils/globals';
import KeyCloakService from '../services/KeyCloakService';

const getPublicKey = () => {
  fetch(`${API}/view-public-key`, {
    headers: {
      Authorization: `Bearer ${KeyCloakService.getToken()}`,
    },
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
};

export default getPublicKey;
