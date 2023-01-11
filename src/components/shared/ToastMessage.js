import React, {useEffect} from 'react';
import Toast from 'react-native-toast-message';
import { ToastAndroid } from 'react-native';

const ToastMessage = ({type, message, autoHide = false, onClose}) => {
  

    if (message) {
      Toast.show({
        // position: 'bottom',

        type: type,
        text1:type,
        text2: message,
        topOffset: 20,
        autoHide: autoHide,
        visibilityTime: 4000,
        onHide: () => {
          if (onClose) {
            onClose();
          }
        },
        bottomOffset: 40,
      });
    }
;
  return <></>;
};

export default ToastMessage;
