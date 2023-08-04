import KeyCloakService from '../services/KeyCloakService';
import { API } from '../utils/globals';
import SUBMIT_ACTION from '../pages/Submit/model/SubmitActionEnum';

const challengeSubmission = (
  challengeName,
  repoUrl,
  repoBranch,
  description,
  submissionTags,
  dispatch
) => {
  const tagNames = submissionTags.map((tag) => tag.name).join(',');
  const details = {
    f1: description,
    f2: tagNames,
    f3: repoUrl,
    f4: repoBranch,
  };
  let formBody = [];
  for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    if (property === 'f2')
      encodedValue = encodedValue.replaceAll('%2C', '%2C+');
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  fetch(`${API}/challenge-submission/${challengeName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Authorization: `Bearer ${KeyCloakService.getToken()}`,
    },
    body: formBody,
  })
    .then((resp) => resp.json())
    .then((data) => {
      dispatch({ type: SUBMIT_ACTION.TOGGLE_SUBMISSION_LOADING });
      const processUrl = API.replace('/api', '');
      if (Number.isInteger(Number(data))) {
        console.log(`${processUrl}/open-view-progress/${data}#form`);
        window.location.replace(
          `${processUrl}/open-view-progress/${data}#form`
        );
      }
      // console.log(data);

      // fetch(`${API}/view-progress-with-web-sockets/${data}`)
      //   .then((response) => response.text())
      //   .then((data) => {
      //     console.log(data);
      //   });

      // const viewLog = () => {
      //   fetch(`${API}/view-progress-log/${data}`)
      //     .then((response) => response.text())
      //     .then((data) => {
      //       console.log(data);
      //     });
      // };

      // for (let i = 0; i < 20; i++) {
      //   setInterval(() => {
      //     viewLog();
      //   }, 1000);
      // }

      // clearInterval();
    });
};

export default challengeSubmission;
