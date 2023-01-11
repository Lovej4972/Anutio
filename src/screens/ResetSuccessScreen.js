import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/shared/Button';
import {URL_LOGIN} from '../constants/navigations';
import BgImage from '../assets/images/bgAuth.png';
import Logo from '../assets/images/Logo.png';
import {appFonts, scale, scaleVertical, width} from '../constants/scale';
import colors from '../constants/colors';

const ResetSuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={BgImage} style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <View style={styles.holder}>
        <Text style={styles.title}>Congratulations!</Text>
        <Text style={styles.desc}>
        You have successfully changed your password
        </Text>
        <View style={{marginTop: scaleVertical(10)}}>
          <Button text="Proceed to Login" onPress={() => navigation.navigate(URL_LOGIN)} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ResetSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: scaleVertical(120),
  },
  image: {
    width: width,
    resizeMode: 'contain',
  },
  holder: {
    justifyContent: 'center',
    paddingTop: scaleVertical(30),
    paddingHorizontal: scale(30),
  },
  title: {
    textAlign: 'center',
    color: colors.primaryFade,
    fontWeight: 'bold',
    fontSize: appFonts.h4.fontSize,
    paddingBottom: scaleVertical(10),
  },
  desc: {
    textAlign: 'center',
    color: colors.secondary,
    fontSize: appFonts.h6.fontSize,
    paddingBottom: scaleVertical(20),
    paddingHorizontal: scale(30),
  },
});
