import { API } from '../utils/globals';

const challengeEdit = async (
    data,
    token
) => {
    const formData = new FormData();

    formData.append('challenge_title', data.challenge_title);
    formData.append('description', data.description);
    formData.append('deadline', data.deadline);

    try {
        const response = await fetch(`${API}/challenges/edit-challenge`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData
        });

        if (!response.ok) {
            new Error(`HTTP error! Status: ${response.status}`);
        }

    } catch (error) {
        console.log(error);
    }
};

export default challengeEdit;
