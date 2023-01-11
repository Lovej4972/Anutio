import React, {createRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import SocialAuth from '../../shared/SocialAuth';
import ToastMessage from '../../shared/ToastMessage';
import Toast from 'react-native-toast-message';

import {
  URL_SIGN_UP,
  URL_FORGET_PASSWORD,
  URL_TAB,
} from '../../../constants/navigations';
import {appFonts, scale, scaleVertical} from '../../../constants/scale';
import colors from '../../../constants/colors';
import styles from '../styles';
import useLogin from '../../../hooks/auth/useLogin';

const LoginForm = props => {
  const {handleLogin, isLoading, error, reset} = useLogin();
  const navigation = useNavigation();
  const emailRef = createRef();
  const passwordRef = createRef();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  const handleSubmit = () => {
 


    if (!email) {
      setEmailError('Provide a valid email');
    }
    if (!password) {
      setPasswordError('Provide a valid password');
      return;
    }
    const formData = {
      email: email,
      password: password,
    };
    handleLogin(formData);
    // if (!error) {
    //   setEmail('');
    //   setPassword('');
    // }
  };

  const handleTextChange = (name, value) => {
    if (name === 'email') {
      setEmail(value);


      // Toast.show({
      //   type: 'error',
      //   text1: 'Error',
      //   text2: 'Valid Email is required'
      // });
      setEmailError('');
    }
    if (name === 'password') {
      setPassword(value);
      setPasswordError('');
    }
  };

  const handlePasswordVisibility = () => {
    setIsHidden(!isHidden);
  };
  return (
    <View>
      <View style={styles.inputLayout}>
        <ToastMessage
          message={error}
          type={'error'}
          autoHide={true}
          onClose={reset}
        />
        <Input
          ref={emailRef}
          editable
          maxLength={40}
          label="Email"
          autoCapitalize="none"
          name="firstNamenput"
          icon={'Email'}
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => {
            if (passwordRef && passwordRef.current) {
              passwordRef.current.focus();
            }
          }}
          autoCompleteType="email"
          placeholder="example@domain.com"
          value={email.trim()}
          onChangeText={text => handleTextChange('email', text)}
          blurOnSubmit={false}
          error={emailError}
        />
      </View>
      <View style={styles.inputLayout}>
        <Input
          ref={passwordRef}
          editable
          maxLength={40}
          label="Password"
          autoCapitalize="none"
          name="passwordInput"
          returnKeyType="done"
          autoCorrect={false}
          placeholder="* * * * * * * * *"
          value={password}
          onChangeText={text => handleTextChange('password', text)}
          blurOnSubmit={false}
          icon={isHidden ? 'EyeClose' : 'EyeOpen'}
          error={passwordError}
          visibility={handlePasswordVisibility}
          secureTextEntry={isHidden}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(URL_FORGET_PASSWORD)}
        style={{marginTop: scaleVertical(-15)}}>
        <Text style={{textAlign: 'right', color: colors.error}}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <View style={{marginTop: scaleVertical(20)}}>
        <Button text="Sign In" loading={isLoading} onPress={handleSubmit} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: scaleVertical(3),
          marginBottom: scaleVertical(20),
        }}>
        <Text>I don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(URL_SIGN_UP)}>
          <Text style={{textAlign: 'right', color: colors.error}}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <SocialAuth />
      </View>
    </View>
  );
};

export default LoginForm;
