import React, {createRef, useState} from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity, Alert,  ToastAndroid,} from 'react-native';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import BgImage from '../../assets/images/bgAuth.png';
import Logo from '../../assets/images/Logo.png';
import LoginForm from './component/LoginForm';
import styles from './styles';
import Toast from 'react-native-toast-message';
import Button from '../shared/Button';

const LoginScreen = () => {

  return (
    <VerticalScroll>
      <ImageBackground source={BgImage} style={styles.container}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.holder}>
          <LoginForm />
          
        </View>
      </ImageBackground>


    </VerticalScroll>
  );
};

export default LoginScreen;
