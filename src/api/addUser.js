import { API } from '../utils/globals';
import KeyCloakService from '../services/KeyCloakService';
import LOCAL_STORAGE from '../utils/localStorage';

const addUser = () => {
  fetch(`${API}/add-user`, {
    headers: { Authorization: `Bearer ${KeyCloakService.getToken()}` },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('adding user to server');
      if (result) {
        console.log('user succesful added to server');
        localStorage.setItem(
          LOCAL_STORAGE.USER_ADDED_TO_SERVER,
          LOCAL_STORAGE.STATIC_VALUE.YES
        );
      } else {
        console.log('user adding to server failure or user already exist');
      }
    });
};

export default addUser;
