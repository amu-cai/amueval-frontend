const challengeMetaDataSubmit = async (challengeInput) => {
    fetch(`http://localhost:8000/challenges/create-challenge`, {
      method: 'post',
      body: JSON.stringify(challengeInput),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(
        (res) => {
          if (res.ok) {
            console.log('adding challenge data ok');
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
      });
  };

  export default challengeMetaDataSubmit;