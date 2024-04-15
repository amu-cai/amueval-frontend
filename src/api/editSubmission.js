import { API } from '../utils/globals';
import theme from '../utils/theme';
import LOCAL_STORAGE from '../utils/localStorage';

// Not currently using
const editSubmission = async (
  submisssion,
  tags,
  description,
  popUpMessageHandler
) => {
  tags = tags.replaceAll(',', '%2C');
  fetch(`${API}/edit-submission/${submisssion}/${tags}/${description}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)}`,
    },
  })
    .then((resp) => resp.text())
    .then((data) => {
      console.log(data);
      if (data === 'Submission changed') {
        popUpMessageHandler(
          'Submission changed!',
          `Submission ${submisssion} edited`,
          null,
          theme.colors.green
        );
      } else if (data === 'Only owner can edit a submission!') {
        popUpMessageHandler('Error', data, null, theme.colors.red);
      } else if (data.includes('<!doctype html>') && data.includes('Login')) {
        popUpMessageHandler(
          'Error',
          'You have to be login in to edit submission!',
          null,
          theme.colors.red
        );
      } else {
        if (data.length > 650) {
          data = `${data.slice(0, 650)}...`;
        }
        popUpMessageHandler('Error', data, null, theme.colors.red);
      }
    });
};

export default editSubmission;
