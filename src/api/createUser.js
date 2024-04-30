import { API } from '../utils/globals';

const createUser = async (data, setResult) => {
  fetch(`${API}/auth/create-user`, {
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(data),
  })
    .then(
      (res) => {
        if (res.ok) {
          console.log('create user ok');
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

export default createUser;
