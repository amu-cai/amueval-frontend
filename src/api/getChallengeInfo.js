import {API} from "../utils/globals";

const getChallengeInfo = (setState, challengeName) => {
    fetch(`${API}/challenge-info/${challengeName}`)
        .then(response => response.json())
        .then(data => {
            setState(data);
        });
}

export default getChallengeInfo;