import {API} from "../utils/globals";

const getChallenges = (setState) => {
    fetch(`${API}/list-challenges`)
        .then(response => response.json())
        .then(data => {
            setState(data);
        });
}

export default getChallenges;