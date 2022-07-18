import {API} from "../utils/globals";

const getChallengeSubmissions = (setState, challengeName) => {
    fetch(`${API}/challenge-all-submissions/${challengeName}`)
        .then(response => response.json())
        .then(data => {
            setState(data);
        });
}

export default getChallengeSubmissions;