import {API} from '../utils/globals';

const getChallengeLeaderboard = (setDataState, challengeName, setLoading) => {
    fetch(`${API}/leaderboard/${challengeName}`)
        .then(response => response.json())
        .then(data => {
            setDataState(data.entries);
            if (setLoading) {
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            }
        });
};

export default getChallengeLeaderboard;