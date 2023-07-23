import KeyCloakService from '../services/KeyCloakService';
import { API } from '../utils/globals';

const editSubmission = (
  submisssion,
  tags,
  description
) => {
  // tags = tags.map((tag) => tag.name).join(',');
  tags = tags.replaceAll(',', '%2C');
  fetch(`${API}/edit-submission/${submisssion}/${tags}/${description}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Authorization: `Bearer ${KeyCloakService.getToken()}`,
    }
  })
    .then((resp) => resp.text())
    .then((data) => {
      console.log(data);
    });
};

export default editSubmission;
// http://localhost:3000/api/edit-submission/4/1%2C2/abc