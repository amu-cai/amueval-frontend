import { API } from '../utils/globals';
import LOCAL_STORAGE from '../utils/localStorage';

const getUsersSettings = (setResult) => {
  fetch(`${API}/admin/users-settings`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setResult(data);
    });
};

export default getUsersSettings;
