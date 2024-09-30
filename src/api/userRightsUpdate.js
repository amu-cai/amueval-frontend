import {API} from '../utils/globals';
import LOCAL_STORAGE from '../utils/localStorage';

const userRightsUpdate = async (newUserRights, setResult) => {
    console.log(newUserRights);
    fetch(`${API}/admin/user-rights-update`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)}`,
        },
        method: 'post',
        body: JSON.stringify(newUserRights),
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

export default userRightsUpdate;
