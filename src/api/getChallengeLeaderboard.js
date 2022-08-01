import {API} from '../utils/globals';

const getChallengeLeaderboard = (setDataState, challengeName, setLoading) => {
    fetch(`${API}/leaderboard/${challengeName}`)
        .then(response => response.json())
        .then(data => {
            setDataState(data.entries);
            if (setLoading)
                setLoading(false);
        });
};

export default getChallengeLeaderboard;