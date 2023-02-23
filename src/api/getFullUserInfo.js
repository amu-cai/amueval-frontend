import {API} from '../utils/globals';
import KeyCloakService from '../services/KeyCloakService';

const getFullUser = (setDataState, setLoadingState) => {
    fetch(`${API}/full-user-info`, {
        headers: {'Authorization': `Bearer ${KeyCloakService.getToken()}`}
    })
        .then(response => response.json())
        .then(data => {
            console.log('getFullUser');
            console.log(data);
            setDataState(data);
            if (setLoadingState)
                setLoadingState(false);
        });
};

export default getFullUser;