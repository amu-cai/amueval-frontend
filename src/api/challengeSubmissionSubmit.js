import {API} from '../utils/globals';

const challengeSubmissionSubmit = (submissionInputModel, setResult, token) => {
    const formData = new FormData();
    formData.append('submission_file', submissionInputModel.submission_zip);
    formData.append('description', submissionInputModel.description);
    formData.append('challenge_title', submissionInputModel.challenge_title);

    fetch(`${API}/evaluation/submit`, {
        method: 'post',
        body: formData,
        headers: {Authorization: `Bearer ${token}`},
    })
        .then(
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

export default challengeSubmissionSubmit;
