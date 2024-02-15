import { API } from "../utils/globals";

const challengeUpload = async (challengeFile, challengeInput, setResult) => {
  const formData = new FormData();
  formData.append('challenge_file', challengeFile);

  formData.append('challenge_title', challengeInput.title);
  formData.append('description', challengeInput.description);
  formData.append('deadline', challengeInput.deadline);
  formData.append('award', challengeInput.award);
  formData.append('type', challengeInput.type);
  formData.append('metric', challengeInput.main_metric);

  fetch(`${API}/challenges/create-challenge`, {
    method: 'post',
    body: formData,
  })
    .then(
      (res) => {
        if (res.ok) {
          console.log('upload challenge ok');
          return res.json();
        } else {
          console.log('something went wrong');
          return res.json();
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

export default challengeUpload;
