import React, {createRef, useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';
import {URL_LOGIN} from '../constants/navigations';
import BgImage from '../assets/images/bgAuth.png';
import Logo from '../assets/images/Logo.png';
import useForgotPassword from '../hooks/auth/useForgotPassword';
import {appFonts, scale, scaleVertical, width} from '../constants/scale';
import colors from '../constants/colors';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const emailRef = createRef();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const handleTextChange = (name, value) => {
    if (name === 'email') {
      setEmail(value);
      setEmailError('');
    }
  };
  const {handleForgotPassword, isLoading, error, reset} = useForgotPassword({email});


  const handleSubmit = () => {
    if (!email) {
      setEmailError('Provide a valid email');
      return;
    }
    const formData = {
      email: email,
    };
    handleForgotPassword(formData);
  };
  return (
    <ImageBackground source={BgImage} style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <View style={styles.holder}>
        <View style={styles.inputLayout}>
          <Input
            ref={emailRef}
            editable
            maxLength={40}
            label="Email"
            autoCapitalize="none"
            name="firstNamenput"
            icon={'Email'}
            autoCorrect={false}
            returnKeyType="done"
            autoCompleteType="email"
            placeholder="example@domain.com"
            value={email.trim()}
            onChangeText={text => handleTextChange('email', text)}
            blurOnSubmit={false}
            error={emailError}
          />
        </View>
        <View style={{marginTop: scaleVertical(10)}}>
          <Button text=" Send Reset Code" loading={isLoading} onPress={handleSubmit} />
        </View>
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: scaleVertical(3),
        }}>
        <Text style={{
          fontFamily:appFonts.regularText.fontFamily
        }}>Click the sign in link to exit screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate(URL_LOGIN)}>
          <Text style={{textAlign: 'right', color: colors.error}}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: scaleVertical(80),
  },
  image: {
    width: width,
    resizeMode: 'contain',
  },
  holder: {
    justifyContent: 'center',
    paddingVertical: scaleVertical(30),
    paddingHorizontal: scale(30),
  },
  inputLayout: {
    marginVertical: scaleVertical(5),
  },
});
