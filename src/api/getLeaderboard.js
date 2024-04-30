import {API} from '../utils/globals';

const getLeaderboard = (challenge, setResult, setLoading) => {
    fetch(`${API}/evaluation/${challenge}/leaderboard`)
        .then((response) => response.json(),
            (error) => {
                console.log(error);
                if (!alert('Oops, something went wrong!')) {
                    window.location.replace('/');
                }
            })
        .then((data) => {
            setResult(data);
            if (setLoading) {
                setLoading(false);
            }
        });
};

export default getLeaderboard;
