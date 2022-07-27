import {API} from "../utils/globals";

const getChallengeSubmissions = (setDataState, setLoading, challengeName) => {
    fetch(`${API}/challenge-all-submissions/${challengeName}`)
        .then(response => response.json())
        .then(data => {
            setDataState(data);
            if (setLoading)
                setLoading(false);
        });
}

export default getChallengeSubmissions;