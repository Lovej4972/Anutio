import React, {useEffect} from 'react';
import {LogBox, SafeAreaView, Platform, View, Text} from 'react-native';
import Routes from './Routes';
import SplashScreen from 'react-native-splash-screen';
import colors from './src/constants/colors';
// import {height} from './src/constants/scale';
import {QueryClientProvider} from 'react-query';
import Toast from 'react-native-toast-message';
import {queryClient} from './src/services/queryClient';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider as PaperProvider } from 'react-native-paper';

import {
  requestUserPermission,
  GetFCMToken,
  NotificationListiner,
} from './src/utils/pushNotification';


const App = () => {
  LogBox.ignoreLogs(['Setting a timer for a long period of time']);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  if (Platform.OS === 'android') {
    useEffect(() => {
      requestUserPermission();
      GetFCMToken();
      NotificationListiner();
    }, []);
    
  }


  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{flex: 1}}>
      <PaperProvider>

        <Routes /> 
      </PaperProvider>

      </SafeAreaView>

    </QueryClientProvider>
  );



};

export default App;
