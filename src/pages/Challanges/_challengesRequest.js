import {API} from "../../utils/globals";

const _challengesRequest = (setChallengesFromAPI, setChallenges) => {
    fetch(`${API}/list-challenges`)
        .then(response => response.json())
        .then(data => {
            setChallengesFromAPI(data);
            setChallenges(data);
        });
}

export default _challengesRequest;