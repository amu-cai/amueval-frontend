const challengeSubmissionSubmit = (submissionInputModel, setResult) => {
    fetch(`http://localhost:8000/evaluation/submit`, {
        method: 'post',
        body: JSON.stringify(submissionInputModel),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(
            (res) => {
                if (res.ok) {
                    console.log('upload submission ok');
                    return res.json();
                } else {
                    console.log('something went wrong');
                    console.log(res);
                }
            },
            (error) => {
                console.log(error);
                console.error('failed due to network error or cross domain');
            }
        )
        .then((json) => {
            console.log('json response processing');
            console.log(json);
            setResult(json);
        });
};

export default challengeSubmissionSubmit;