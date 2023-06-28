import KeyCloakService from '../services/KeyCloakService';
import { API } from '../utils/globals';

const deleteSubmission = async (submissionId) => {
  fetch(`${API}/delete-submission/${submissionId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Authorization: `Bearer ${KeyCloakService.getToken()}`,
    },
  })
    .then((resp) => resp.text())
    .then((data) => {
      console.log(data);
    });
};

export default deleteSubmission;
