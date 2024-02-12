const challengeUpload = async (challengeFile, setResult) => {
  const formData = new FormData();
  formData.append('challenge_file', challengeFile);
  fetch(`http://localhost:8000/challenges/create-challenge-details`, {
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
