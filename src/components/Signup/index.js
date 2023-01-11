import React, {createRef, useState} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import BgImage from '../../assets/images/bgAuth.png';
import Logo from '../../assets/images/Logo.png';
import SignupForm from './component/SignupForm';
import styles from './styles';

const SignupScreen = () => {
  return (
    <VerticalScroll>
      <ImageBackground source={BgImage} style={styles.container}>
          <Image source={Logo} style={styles.image} />
          <View style={styles.holder}>
            <SignupForm />
          </View>
      </ImageBackground>
    </VerticalScroll>
  );
};

export default SignupScreen;
