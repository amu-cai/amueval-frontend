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
                    console.log('upload submission ok');
                    return res.json();
                } else {
                    console.log('something went wrong');
                    return res.json();
                }
            },
            (error) => {
                console.log(error);
                console.error('failed due to network error or cross domain');
                if (!alert('Oops, something went wrong!')) {
                    window.location.replace('/');
                }
            }
        )
        .then((json) => {
            console.log('json response processing');
            console.log(json);
            setResult(json);
        });
};

export default challengeSubmissionSubmit;
