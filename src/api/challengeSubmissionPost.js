import KeyCloakService from '../services/KeyCloakService';
import {API} from '../utils/globals';

const challengeSubmission = (challengeName, repoUrl, repoBranch, description, setData) => {
    const details = {
        'f1': description,
        'f3': repoUrl,
        'f4': repoBranch
    };
    let formBody = [];
    for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    fetch(`${API}/challenge-submission/${challengeName}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': `Bearer ${KeyCloakService.getToken()}`
        },
        body: formBody
    }).then((resp) => resp.json())
    .then((data) => setData(data));
};

export default challengeSubmission;