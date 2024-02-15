import { API } from "../utils/globals";

const challengeSubmissionSubmit = (submissionInputModel, setResult) => {
  const formData = new FormData();
  formData.append('submission_file', submissionInputModel.submission_zip);
  formData.append('description', submissionInputModel.description);
  formData.append('challenge_title', submissionInputModel.challenge_title);
  formData.append('submitter', submissionInputModel.submitter);

  fetch(`${API}/evaluation/submit`, {
    method: 'post',
    body: formData
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
