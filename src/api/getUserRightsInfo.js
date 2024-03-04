import { API } from '../utils/globals';
import LOCAL_STORAGE from '../utils/localStorage';

const getUserRightsInfo = async (setResult) => {
  fetch(`${API}/auth/user-rights-info`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)}`,
    },
    method: 'get',
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

export default getUserRightsInfo;
