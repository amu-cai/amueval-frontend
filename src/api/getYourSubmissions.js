import {API} from '../utils/globals';
import LOCAL_STORAGE from "../utils/localStorage";

const getYourSubmissions = (challenge, setResult, setLoading) => {
    fetch(`${API}/evaluation/${challenge}/all-submissions`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)}`,
        }
    })
        .then((response) => response.json(),
            (error) => {
                if (!alert('Oops, something went wrong!')) {
                    window.location.replace('/');
                }
            })
        .then((data) => {
            setResult(data);
            if (setLoading) {
                setLoading(false);
            }
        });
};

export default getYourSubmissions;
