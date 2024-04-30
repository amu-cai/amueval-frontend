import {API} from "../utils/globals";
import LOCAL_STORAGE from "../utils/localStorage";

const editProfile = async (profile) => {
    console.log(profile);
    fetch(`${API}/auth/profile/edit`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)}`,
        },
    })
        .then((response) => response.text(),
            (error) => {
                console.log(error);
                if (!alert('Oops, something went wrong!')) {
                    window.location.replace('/');
                }
            })
        .then((data) => {
            return data;
        });
};

export default editProfile;
