import { API } from "../utils/globals";

const getChallengeInfo = (setDataState, setLoadingState, challengeTitle) => {
    fetch(`${API}/challenges/challenge/${challengeTitle}`)
        .then(response => response.json())
        .then(data => {
            setDataState(data);
            if (setLoadingState)
                setLoadingState(false);
        });
};

export default getChallengeInfo;