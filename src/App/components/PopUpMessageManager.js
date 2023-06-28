import React from 'react';
import PopupMessage from '../../components/generic/PopupMessage';
import { CHILDREN_WITH_PROPS } from '../../utils/globals';

const PopUpMessageManager = (props) => {
  const [popUpHeader, setPopUpHeader] = React.useState('');
  const [popUpMessage, setPopUpMessage] = React.useState('');
  const [borderColor, setBorderColor] = React.useState(null);
  const [confirmPopUpHandler, setConfirmPopUpHandler] = React.useState(null);

  const popUpMessageHandler = (header, message, confirmHandler=null, borderColor=null) => {
    setPopUpHeader(header);
    setPopUpMessage(message);
    setBorderColor(borderColor);
    if (confirmHandler !== null && confirmHandler !== undefined) {
      setConfirmPopUpHandler(() => confirmHandler());
    } else {
      setConfirmPopUpHandler(null);
    }
  };

  const popUpMessageRender = () => {
    if (popUpHeader !== '' || popUpMessage !== '') {
      return (
        <PopupMessage
          header={popUpHeader}
          message={popUpMessage}
          confirmHandler={confirmPopUpHandler}
          borderColor={borderColor}
          popUpMessageHandler={popUpMessageHandler}
        />
      );
    }
  };

  return (
    <>
      {popUpMessageRender()}
      {CHILDREN_WITH_PROPS(props.children, { popUpMessageHandler })}
    </>
  );
};

export default PopUpMessageManager;
