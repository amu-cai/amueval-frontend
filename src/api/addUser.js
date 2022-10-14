import {API} from '../utils/globals';
import KeyCloakService from '../services/KeyCloakService';

const addUser = () => {
    fetch(`${API}/add-user`, {
        headers: {'Authorization': `Bearer ${KeyCloakService.getToken()}`}
    })
        .then(response => response.json())
        .then(data => {
            console.log('add user');
            console.log(data);
        });
};

export default addUser;