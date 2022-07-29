import {API} from '../utils/globals';

const getChallengeFullDescription = (setDataState, setLoading, challengeName) => {
    fetch(`${API}/challenge-readme/${challengeName}/markdown`)
        .then(response => response.text())
        .then(data => {
            setDataState(data);
            if (setLoading)
                setLoading(false);
        });
};

export default getChallengeFullDescription;