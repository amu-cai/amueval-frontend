import LOCAL_STORAGE from '../utils/localStorage';
import {API} from '../utils/globals';

const getProfileInfo = async (setResult) => {
    fetch(`${API}/auth/profile-info`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)}`,
        },
        method: 'get',
    })
        .then(
            (res) => {
                return res.json();
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

export default getProfileInfo;
