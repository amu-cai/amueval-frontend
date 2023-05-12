import React from 'react';
import { FlexRow, Grid } from '../../../../utils/containers';
import { Medium } from '../../../../utils/fonts';
import ImageButton from '../../../../components/generic/ImageButton';
import pencilIco from '../../../../assets/pencil_ico.svg';
import TagsChoosePopUp from '../TagsChoosePopup/TagsChoosePopUp';
import { createPortal } from 'react-dom';
import TagsChooseStyle from './TagsChooseStyle';

const TagsChoose = (props) => {
  const [tagsPopUp, setTagsPopUp] = React.useState(false);

  return (
    <TagsChooseStyle
      onClick={() => {
        if (!tagsPopUp) setTagsPopUp(true);
      }}
    >
      <Medium as="label" htmlFor={props.label}>
        {props.label}
      </Medium>
      <Grid
        className="TagsChooseStyle__grid"
        onChange={(e) => props.handler(e.target.value)}
      >
        <FlexRow className="TagsChooseStyle__tags-container">tags</FlexRow>
        <ImageButton src={pencilIco} width="20px" height="20px" />
      </Grid>
      {tagsPopUp &&
        createPortal(
          <TagsChoosePopUp tags={props.tags} setTagsPopUp={setTagsPopUp} />,
          document.body
        )}
    </TagsChooseStyle>
  );
};

export default TagsChoose;
