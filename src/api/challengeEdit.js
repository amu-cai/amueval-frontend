import {API} from '../utils/globals';

const challengeEdit = async (
    data,
    token,
    setResult
) => {
    const formData = new FormData();

    formData.append('challenge_title', data.challenge_title);
    formData.append('description', data.description);
    formData.append('deadline', data.deadline);

    fetch(`${API}/challenges/edit-challenge`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData
    }).then(
        (res) => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json();
            }
        },
        (error) => {
            if (!alert('Oops, something went wrong!')) {
                window.location.replace('/');
            }
        }
    )
    .then((json) => {
        setResult(json);
    });
};

export default challengeEdit;
