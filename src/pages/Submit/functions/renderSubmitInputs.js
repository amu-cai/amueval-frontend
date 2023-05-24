import { SUBMIT_INPUTS } from '../utils';
import SubmitInput from '../../../components/generic/SubmitInput';

const renderSubmitInputs = (dispatch) => {
  return SUBMIT_INPUTS.map((input, index) => {
    return (
      <SubmitInput
        key={`submit-input-${index}`}
        label={input.label}
        handler={(value) => {
          dispatch({ type: input.action, payload: value });
        }}
      />
    );
  });
};

export default renderSubmitInputs;
