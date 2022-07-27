import {API} from "../utils/globals";

const getChallengeInfo = (setDataState, setLoadingState, challengeName) => {
    fetch(`${API}/challenge-info/${challengeName}`)
        .then(response => response.json())
        .then(data => {
            setDataState(data);
            if (setLoadingState)
                setLoadingState(false);
        });
}

export default getChallengeInfo;