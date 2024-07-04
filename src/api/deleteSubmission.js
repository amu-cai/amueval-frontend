import {API} from '../utils/globals';
import theme from '../utils/theme';
import LOCAL_STORAGE from '../utils/localStorage';

// Not currently using
const deleteSubmission = async (
    item,
    deletedItems,
    setDeletedItems,
    popUpMessageHandler
) => {
    fetch(`${API}/delete-submission/${item.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)}`,
        },
    })
        .then((resp) => resp.text(),
            (error) => {
                if (!alert('Oops, something went wrong!')) {
                    window.location.replace('/');
                }
            })
        .then((data) => {
            if (data === 'deleted') {
                let newDeletedItems = deletedItems.slice();
                newDeletedItems.push(item);
                setDeletedItems(newDeletedItems);
                popUpMessageHandler(
                    'Complete',
                    `Submission "${item.id}" deleted`,
                    null,
                    null
                );
            } else if (data.includes('<!doctype html>') && data.includes('Login')) {
                popUpMessageHandler(
                    'Error',
                    'You have to be login in to edit submission!',
                    null,
                    theme.colors.red
                );
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
