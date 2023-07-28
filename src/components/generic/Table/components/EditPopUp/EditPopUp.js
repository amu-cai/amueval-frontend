import { createPortal } from 'react-dom';
import PopUp from '../../../PopUp';
import Button from '../../../Button';
import { H3 } from '../../../../../utils/fonts';
import { FlexColumn, FlexRow } from '../../../../../utils/containers';
import theme from '../../../../../utils/theme';
import SubmitInput from '../../../SubmitInput';
import TagsChoose from '../../../../../pages/Submit/components/TagsChoose/TagsChoose';

const EditPopUp = ({ editPopUp, setEditPopUp, editItem, item }) => {
  if (editPopUp) {
    return createPortal(
      <PopUp
        width="30%"
        height="50vh"
        padding="32px"
        backgroundColor={theme.colors.dark003}
        closeHandler={() => setEditPopUp(false)}
      >
        <FlexColumn width="100%" height="100%" gap="48px">
          <H3>Editing submission</H3>
          <SubmitInput
            label="Description"
            handler={(value) => {
              console.log(value);
            }}
          />
          <TagsChoose
            label="Submission tags"
            updateTags={() => console.log('siema')}
            tags={[]}
            submissionTags={[]}
          />
          <FlexRow gap="48px">
            <Button
              width="100px"
              height="32px"
              handler={() => {
                setEditPopUp(false);
                editItem(item);
              }}
            >
              Confirm
            </Button>
            <Button
              width="100px"
              height="32px"
              handler={() => setEditPopUp(false)}
              backgroundColor={theme.colors.dark}
            >
              Cancel
            </Button>
          </FlexRow>
        </FlexColumn>
      </PopUp>,
      document.body
    );
  }
};

export default EditPopUp;
