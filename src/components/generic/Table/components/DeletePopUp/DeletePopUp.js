import { createPortal } from 'react-dom';
import PopUp from '../../../PopUp';
import Button from '../../../Button';
import { Medium, H3 } from '../../../../../utils/fonts';
import { FlexColumn, FlexRow } from '../../../../../utils/containers';
import theme from '../../../../../utils/theme';
import deleteSubmission from '../../../../../api/deleteSubmission';
import { useDispatch } from 'react-redux';
import { popUpMessageHandler } from '../../../../../redux/popUpMessegeSlice';

const deleteItem = async (
  item,
  setDeletePopUp,
  deletedItems,
  setDeletedItems,
  popUpMessageHandler
) => {
  setDeletePopUp(false);
  await deleteSubmission(
    item,
    deletedItems,
    setDeletedItems,
    popUpMessageHandler
  );
};

const DeletePopUp = ({
  deletePopUp,
  setDeletePopUp,
  item,
  deletedItems,
  setDeletedItems,
}) => {
  const dispatch = useDispatch();

  if (deletePopUp) {
    return createPortal(
      <PopUp
        width="30%"
        height="30vh"
        padding="32px"
        backgroundColor={theme.colors.dark003}
        closeHandler={() => setDeletePopUp(false)}
      >
        <FlexColumn width="100%" height="100%" gap="48px">
          <H3>Warning</H3>
          <Medium>
            Are you sure want to delete submission with id: {item.id}?
          </Medium>
          <FlexRow gap="48px">
            <Button
              handler={() =>
                deleteItem(
                  item,
                  setDeletePopUp,
                  deletedItems,
                  setDeletedItems,
                  (header, message, borderColor, confirmHandler) => {
                    dispatch(
                      popUpMessageHandler({
                        header: header,
                        message: message,
                        borderColor: borderColor,
                        confirmHandler: confirmHandler,
                      })
                    );
                  }
                )
              }
            >
              Yes
            </Button>
            <Button
              handler={() => setDeletePopUp(false)}
              backgroundColor={theme.colors.dark}
            >
              No
            </Button>
          </FlexRow>
        </FlexColumn>
      </PopUp>,
      document.body
    );
  }
};

export default DeletePopUp;
