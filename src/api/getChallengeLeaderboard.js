import {API} from '../utils/globals';

const getChallengeLeaderboard = (setDataState, setLoading, challengeName) => {
    fetch(`${API}/leaderboard/${challengeName}`)
        .then(response => response.json())
        .then(data => {
            setDataState(data);
            if (setLoading)
                setLoading(false);
        });
};

export default getChallengeLeaderboard;