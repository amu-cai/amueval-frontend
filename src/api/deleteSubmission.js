import KeyCloakService from '../services/KeyCloakService';
import { API } from '../utils/globals';

const deleteSubmission = async (
  item,
  deletedItems,
  setDeletedItems,
  popUpMessageHandler,
  theme
) => {
  fetch(`${API}/delete-submission/${item.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Authorization: `Bearer ${KeyCloakService.getToken()}`,
    },
  })
    .then((resp) => resp.text())
    .then((data) => {
      if (data === 'deleted') {
        let newDeletedItems = deletedItems.slice();
        newDeletedItems.push(item);
        setDeletedItems(newDeletedItems);
        popUpMessageHandler('Complete', `Submission "${item.id}" deleted`);
      } else {
        popUpMessageHandler(
          'Error',
          "You can't delete this submission!",
          null,
          theme.colors.red
        );
      }
    });
};

export default deleteSubmission;
