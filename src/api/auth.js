import {API} from '../utils/globals';

const auth = (token, setResult) => {
    if (!token || token === "undefined") {
        console.log('Token is undefined or null');
        setResult({ detail: 'Authentication token is missing' });
        return;
    }
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
