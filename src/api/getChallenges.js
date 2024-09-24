import { API } from '../utils/globals';
import LOCAL_STORAGE from '../utils/localStorage';

const getChallenges = (setResult, setLoading, yourChallenges = false) => {
    const endpoint = yourChallenges ? `${API}/user/challenges` : `${API}/challenges/get-challenges`;

    // Conditional fetch options based on 'yourChallenges' flag
    const fetchOptions = yourChallenges
        ? {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)}`,
            },
        }
        : {}; // If 'yourChallenges' is false, no extra options are needed.

    fetch(endpoint, yourChallenges ? fetchOptions : undefined)
        .then((response) => response.json())
        .then((data) => {
            setResult(data);
            if (setLoading) setLoading(false);
        })
        .catch((error) => {
            alert('Oops, something went wrong!');
            window.location.replace('/');
        });
};

export default getChallenges;
