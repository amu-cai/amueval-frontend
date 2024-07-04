import {API} from '../utils/globals';

const auth = (token, setResult) => {
    fetch(`${API}/auth`, {
        headers: {Authorization: `Bearer ${token}`},
    })
        .then((response) => {
                return response.json();
            },
            (error) => {
            }
        )
        .then((data) => {
            setResult(data);
        });
};

export default auth;
