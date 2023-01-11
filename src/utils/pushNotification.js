/* eslint-disable no-shadow */
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

export async function GetFCMToken() {
  let fcmtoken = await AsyncStorage.getItem('fcmtoken');
  console.log('Old fcmtoken', fcmtoken);

  if (!fcmtoken) {
    try {
      const fcmtoken = await messaging().getToken();
      if (fcmtoken) {
        console.log('New fcmtoken', fcmtoken);
        await AsyncStorage.setItem('fcmtoken', fcmtoken);
      }
    } catch (error) {
      console.log('Error in fcmtoken', error);
    }
  }
}

export const NotificationListiner = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log('Notification on forground state... ', remoteMessage);
  });
};
