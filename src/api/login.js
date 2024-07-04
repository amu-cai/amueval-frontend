import {API} from '../utils/globals';

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
                    return res.json();
                } else {
                    return res.json();
                }
            },
            (error) => {
                if (!alert('Oops, something went wrong!')) {
                    window.location.replace('/');
                }
            }
        )
        .then((json) => {
            setResult(json);
        });
};

export default login;
