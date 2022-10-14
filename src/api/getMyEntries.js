import {API} from '../utils/globals';
import KeyCloakService from '../services/KeyCloakService';

const getMyEntries = (challengeName, setDataState, setLoadingState) => {
    fetch(`${API}/challenge-my-submissions/${challengeName}`, {
        headers: {'Authorization': `Bearer ${KeyCloakService.getToken()}`}
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setDataState(data);
            if (setLoadingState)
                setLoadingState(false);
        });
};

export default getMyEntries;