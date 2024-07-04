import {API} from '../utils/globals';
import LOCAL_STORAGE from '../utils/localStorage';

const getMySubmissions = (challenge, setDataStates, setLoading) => {
    fetch(`${API}/evaluation/${challenge}/my-submissions`, {
        headers: {Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)}`},
    })
        .then((response) => response.json(),
            (error) => {
                if (!alert('Oops, something went wrong!')) {
                    window.location.replace('/');
                }
            })
        .then((data) => {
            for (let setDataState of setDataStates) setDataState(data);
            if (setLoading) {
                setLoading(false);
            }
        });
};

export default getMySubmissions;
