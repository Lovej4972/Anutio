import React, {useRef, useEffect} from 'react';
import {View, Image, Animated, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import asyncStorageService from '../services/asyncStorageService';
// import AnimateGif from '../assets/images/Animated.gif';
import Splash from '../assets/images/Splash.png';
import {
  appFonts,
  scale,
  scaleVertical,
  width,
  height,
} from '../constants/scale';
import colors from '../constants/colors';
import {URL_LOGIN, URL_TAB, URL_LOGO_ANIMATION} from '../constants/navigations';

const SplashScreen = () => {
  const navigation = useNavigation();
  const startAnimation = useRef(new Animated.Value(height - 20)).current;
  const ballSize = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const opacity1 = useRef(new Animated.Value(0)).current;

  const navigate = async () => {
    const token = await asyncStorageService.getToken();
   
      navigation.navigate(URL_LOGO_ANIMATION);
 
  };
  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity1, {
        toValue: 1,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    let timer1 = setTimeout(
      () => navigate(),
      3000,
    );
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
      }}>
      <Animated.View
        style={{
          opacity: opacity1,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image  source={Splash} style={{height: height, width: width}} />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
