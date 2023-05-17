import SUBMIT_ACTION from '../pages/Submit/model/SubmitActionEnum';
import { API } from '../utils/globals';

const getTags = (dispatch) => {
  fetch(`${API}/list-tags`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: SUBMIT_ACTION.LOAD_TAGS, payload: data });
    });
};

export default getTags;
