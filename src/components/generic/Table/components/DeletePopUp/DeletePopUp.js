import { createPortal } from 'react-dom';
import PopUp from '../../../PopUp';
import Button from '../../../Button';
import { Medium, H3 } from '../../../../../utils/fonts';
import { FlexColumn, FlexRow } from '../../../../../utils/containers';
import theme from '../../../../../utils/theme';

const DeletePopUp = ({ deletePopUp, setDeletePopUp, deleteItem, item }) => {
  if (deletePopUp) {
    return createPortal(
      <PopUp
        width="30%"
        height="30vh"
        padding="32px"
        closeHandler={() => setDeletePopUp(false)}
      >
        <FlexColumn width="100%" height="100%" gap="48px">
          <H3>Warning</H3>
          <Medium>
            Are you sure want to delete submission with id: {item.id}?
          </Medium>
          <FlexRow gap="48px">
            <Button
              handler={() => {
                setDeletePopUp(false);
                deleteItem(item);
              }}
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
