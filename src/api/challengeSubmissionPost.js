import KeyCloakService from '../services/KeyCloakService';
import {API} from '../utils/globals';

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${KeyCloakService.getToken()}`
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

const challengeSubmission = (challengeName, repoUrl, repoBranch, description) => {
    postData(`${API}/challenge-submission/${challengeName}`,
        {f1: description, f3: repoUrl, f4: repoBranch})
        .then((data) => {
            console.log(data);
        });
};

export default challengeSubmission;
