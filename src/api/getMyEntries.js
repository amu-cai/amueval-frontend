import {API} from '../utils/globals';
import KeyCloakService from '../services/KeyCloakService';

const getMyEntries = (challengeName, setDataState, setLoadingState) => {
    fetch(`${API}/challenge-my-submissions/${challengeName}`, {
        headers: {'Authorization': `Bearer ${KeyCloakService.getToken()}`}
    })
        .then(response => response.json())
        .then(data => {
            setDataState(data);
            if (setLoadingState)
                console.log(data);
            setLoadingState(false);
        });
};

export default getMyEntries;