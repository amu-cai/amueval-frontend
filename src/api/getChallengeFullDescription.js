import {API} from "../utils/globals";

const getChallengeFullDescription = (setState, challengeName) => {
    fetch(`${API}/challenge-readme/${challengeName}/markdown`)
        .then(response => response.text())
        .then(data => {
            setState(data);
        });
}

export default getChallengeFullDescription;