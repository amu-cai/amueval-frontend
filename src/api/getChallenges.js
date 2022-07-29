import {API} from '../utils/globals';

const getChallenges = (setDataState, setLoadingState) => {
    fetch(`${API}/list-challenges`)
        .then(response => response.json())
        .then(data => {
            setDataState(data);
            if (setLoadingState)
                setLoadingState(false);
        });
};

export default getChallenges;