import KeyCloakService from '../services/KeyCloakService';
import { API } from '../utils/globals';

const deleteSubmission = (submissionId) => {
  fetch(`${API}/delete-submission/${submissionId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Authorization: `Bearer ${KeyCloakService.getToken()}`,
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    });
};

export default deleteSubmission;
