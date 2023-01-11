import React, {createRef, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';
import {useNavigation} from '@react-navigation/native';
import BgImage from '../assets/images/bgAuth.png';
import Logo from '../assets/images/Logo.png';
import {
  URL_LOGIN,
} from '../constants/navigations';
import useChangePassword from '../hooks/auth/useChangePassword';
import {appFonts, scale, scaleVertical, width} from '../constants/scale';
import colors from '../constants/colors';

const ResetPasswordScreen = (props) => {
  const {email, resetCode} = props.route.params;
  const navigation = useNavigation();
  const passwordRef = createRef();
  const CpasswordRef = createRef();
  const [password, setPassword] = useState('');
  const [Cpassword, setCPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [CpasswordError, setCPasswordError] = useState('');
  const [isHidden, setIsHidden] = useState(true);
  const [hidden, setHidden] = useState(true);
  const {handleChangePassword, isLoading, error, reset} = useChangePassword();

  const handleTextChange = (name, value) => {
    if (name === 'password') {
      setPassword(value);
      setPasswordError('');
    }
    if (name === 'Cpassword') {
      setCPassword(value);
      setCPasswordError('');
    }
  };


  const handlePasswordVisibility = () => {
    setIsHidden(!isHidden);
  };

  
  const handleVisibility = () => {
    setHidden(!hidden);
  };

  const handleSubmit = () => {
    if (!password) {
      setPasswordError('Enter you new password!');
      return;
    }
    if (password !== Cpassword) {
      setCPasswordError('Password field do not match!');
      return;
    }
    const formData = {
      email: email,
      resetCode: resetCode,
      password: password,
    };
    // console.log(formData)
    handleChangePassword(formData);
  };
  return (
    <ImageBackground source={BgImage} style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <View style={styles.holder}>
        <View style={styles.inputLayout}>
          <Input
            ref={passwordRef}
            editable
            maxLength={40}
            label="New Password"
            autoCapitalize="none"
            name="passwordInput"  
            returnKeyType="next"
            autoCorrect={false}
            onSubmitEditing={() => {
              if (CpasswordRef && CpasswordRef.current) {
                CpasswordRef.current.focus();
              }
            }}
            placeholder="Enter new password"
            value={password}
            onChangeText={text => handleTextChange('password', text)}
            blurOnSubmit={false}
            icon={isHidden ? 'EyeClose' : 'EyeOpen'}
            error={passwordError}
            visibility={handlePasswordVisibility}
            secureTextEntry={isHidden}
          />
        </View>
        <View style={styles.inputLayout}>
          <Input
            ref={CpasswordRef}
            editable
            maxLength={40}
            label="Confirm Password"
            autoCapitalize="none"
            name="CpasswordInput"
            returnKeyType="done"
            autoCorrect={false}
            placeholder="Confirm new password"
            value={Cpassword}
            onChangeText={text => handleTextChange('Cpassword', text)}
            blurOnSubmit={false}
            icon={hidden ? 'EyeClose' : 'EyeOpen'}
            error={CpasswordError}
            visibility={handleVisibility}
            secureTextEntry={hidden}
          />
        </View>
        <View style={{marginTop: scaleVertical(10)}}>
          <Button
            text="Reset Password"
            loading={isLoading}
            onPress={handleSubmit}
          />
          <TouchableOpacity style={{marginTop: scaleVertical(20)}} onPress={() => navigation.navigate(URL_LOGIN)}>
            <Text style={{textAlign: 'center', color: colors.black, fontSize: appFonts.h5.fontSize}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ResetPasswordScreen;

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
