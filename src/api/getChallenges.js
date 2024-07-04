import {API} from '../utils/globals';

const getChallenges = (setResult, setLoading) => {
    fetch(`${API}/challenges/get-challenges`)
        .then((response) => response.json(),
            (error) => {
                if (!alert('Oops, something went wrong!')) {
                    window.location.replace('/');
                }
            })
        .then((data) => {
            setResult(data);
            if (setLoading) setLoading(false);
        });
};

export default getChallenges;
