import React from 'react';
import PopupMessage from '../../components/generic/PopupMessage';
import { useSelector, useDispatch } from 'react-redux';
import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';

const PopUpMessageManager = (props) => {
  const dispatch = useDispatch();
  const { popUpHeader, popUpMessage, borderColor, confirmPopUpHandler } =
    useSelector((state) => state.popUpMessage);

  const popUpMessageRender = () => {
    if (popUpHeader !== '' || popUpMessage !== '') {
      return (
        <PopupMessage
          header={popUpHeader}
          message={popUpMessage}
          confirmHandler={confirmPopUpHandler}
          borderColor={borderColor}
          popUpMessageHandler={(header, message, borderColor, confirmHandler) =>
            dispatch(
              popUpMessageHandler({
                header: header,
                message: message,
                borderColor: borderColor,
                confirmHandler: confirmHandler,
              })
            )
          }
        />
      );
    }
  };

  return (
    <>
      {popUpMessageRender()}
      {props.children}
    </>
  );
};

export default PopUpMessageManager;
