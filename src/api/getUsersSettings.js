import { API } from '../utils/globals';
import LOCAL_STORAGE from '../utils/localStorage';

const getUsersSettings = (setResult, setLoading) => {
  fetch(`${API}/admin/users-settings`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setResult(
        data.sort((a, b) =>
          a.username.toLowerCase() < b.username.toLowerCase()
            ? 1
            : b.username.toLowerCase() < a.username.toLowerCase()
            ? -1
            : 0
        )
      );
      if (setLoading) setLoading(false);
    });
};

export default getUsersSettings;
