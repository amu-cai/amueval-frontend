import {API} from '../utils/globals';
import KeyCloakService from '../services/KeyCloakService';

const getUser = (setDataState, setLoadingState) => {
    fetch(`${API}/user-info`, {
        headers: {'Authorization': `Bearer ${KeyCloakService.getToken()}`}
    })
        .then(response => response.json())
        .then(data => {
            setDataState(data);
            if (setLoadingState)
                setLoadingState(false);
        });
};

export default getUser;