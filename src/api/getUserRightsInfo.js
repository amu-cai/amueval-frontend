import {API} from '../utils/globals';
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

export default getUserRightsInfo;
