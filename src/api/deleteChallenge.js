import {API} from '../utils/globals';
import LOCAL_STORAGE from '../utils/localStorage';

const deleteChallenge = async (challenge, setResult) => {
    fetch(`${API}/admin/delete-challenge/${challenge}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)}`,
        },
        method: 'post',
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
                if (!alert('Oops, something went wrong!')) {
                    window.location.replace('/');
                }
            }
        )
        .then((json) => {
            console.log('json response processing');
            console.log(json);
            setResult(json);
        });
};

export default deleteChallenge;
