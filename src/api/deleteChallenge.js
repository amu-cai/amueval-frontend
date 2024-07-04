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

export default deleteChallenge;
