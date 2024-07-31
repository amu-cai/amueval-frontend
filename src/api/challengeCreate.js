import {API} from '../utils/globals';

const challengeCreate = async (
    challengeFile,
    challengeInput,
    setResult,
    token
) => {
    const formData = new FormData();

    formData.append('challenge_file', challengeFile);
    formData.append('challenge_title', challengeInput.title);
    formData.append('challenge_source', challengeInput.source);
    formData.append('description', challengeInput.description);
    formData.append('deadline', challengeInput.deadline);
    formData.append('award', challengeInput.award);
    formData.append('type', challengeInput.type);
    formData.append('metric', challengeInput.main_metric);
    formData.append('sorting', challengeInput.sorting);

    if (challengeInput?.main_metric_parameters) {
        formData.append('parameters', challengeInput.main_metric_parameters);
    }

    if (challengeInput?.additional_metrics) {
        formData.append('additional_metrics', challengeInput.additional_metrics);
    }

    fetch(`${API}/challenges/create-challenge`, {
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

export default challengeCreate;
