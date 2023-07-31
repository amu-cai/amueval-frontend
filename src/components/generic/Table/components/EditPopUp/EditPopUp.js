import { createPortal } from 'react-dom';
import PopUp from '../../../PopUp';
import Button from '../../../Button';
import { H3 } from '../../../../../utils/fonts';
import { FlexColumn, FlexRow } from '../../../../../utils/containers';
import theme from '../../../../../utils/theme';
import SubmitInput from '../../../SubmitInput';
import TagsChoose from '../../../../../pages/Submit/components/TagsChoose/TagsChoose';
import editSubmission from '../../../../../api/editSubmission';
import getTags from '../../../../../api/getTags';
import React from 'react';

const EditPopUp = ({ editPopUp, setEditPopUp, item }) => {
  const [tags, setTags] = React.useState([]);
  const [tagsToEdit, setTagsToEdit] = React.useState(item?.tags?.slice());
  const [description, setDescription] = React.useState(item?.description?.slice());

  React.useMemo(() => {
    getTags(setTags);
  }, []);

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
            defaultValue={item.description}
            handler={(value) => {
              setDescription(value);
            }}
          />
          <TagsChoose
            label="Submission tags"
            updateTags={(submissionTags, globalTags) => {
              setTagsToEdit(submissionTags);
              setTags(globalTags);
            }}
            tags={tags ? tags : []}
            submissionTags={tagsToEdit?.length ? tagsToEdit : item.tags}
          />
          <FlexRow gap="48px">
            <Button
              width="100px"
              height="32px"
              handler={() => {
                setEditPopUp(false);
                editSubmission(item.id, tagsToEdit.join(','), description);
              }}
            >
              Confirm
            </Button>
            <Button
              width="100px"
              height="32px"
              handler={() => {
                setTagsToEdit([]); 
                setEditPopUp(false);
              }}
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
