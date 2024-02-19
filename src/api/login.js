import { API } from '../utils/globals';

const login = async (data, setResult) => {
  fetch(`${API}/auth/login`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'post',
    body: `grant_type=&username=${data.username}&password=${data.password}&scope=&client_id=&client_secret=`,
  })
    .then(
      (res) => {
        if (res.ok) {
          console.log('login ok');
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

export default login;
