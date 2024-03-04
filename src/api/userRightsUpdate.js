import { API } from '../utils/globals';
import LOCAL_STORAGE from '../utils/localStorage';

const userRightsUpdate = async (newUserRights, setResult) => {
  console.log(newUserRights);
  fetch(`${API}/admin/user-rights-update`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)}`,
    },
    method: 'post',
    body: JSON.stringify(newUserRights),
  })
    .then(
      (res) => {
        if (res.ok) {
          console.log('request ok');
          return res.json();
        } else {
          console.log('something went wrong');
          return res.json();
        }
      },
      (error) => {
        console.log(error);
        console.error('failed due to network error or cross domain');
      }
    )
    .then((json) => {
      console.log('json response processing');
      console.log(json);
      setResult(json);
    });
};

export default userRightsUpdate;
