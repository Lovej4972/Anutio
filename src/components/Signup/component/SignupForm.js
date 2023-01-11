import React, {createRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import SocialAuth from '../../shared/SocialAuth';
import {URL_LOGIN, URL_TAB} from '../../../constants/navigations';
import {appFonts, scale, scaleVertical} from '../../../constants/scale';
import colors from '../../../constants/colors';
import ToastMessage from '../../shared/ToastMessage';
import styles from '../styles';
import useSignup from '../../../hooks/auth/useSignup';

const SignupForm = props => {
  const {handleSignup, isLoading, error, reset} = useSignup();
  const navigation = useNavigation();
  const nameRef = createRef();
  const emailRef = createRef();
  const phoneRef = createRef();
  const passwordRef = createRef();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isHidden, setIsHidden] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const nameLength = name?.split(' ').length;
    if (!name || nameLength <= 1) {
      setNameError('Provide your full name');
      return;
    }
    if (!email) {
      setEmailError('Provide a valid email');
      return;
    }
    if (!phone) {
      setPhoneError('Provide a valid phone number');
      return;
    }
    if (!password) {
      setPasswordError('Provide a valid password');
      return;
    }
    const formData = {
      fullName: name,
      email: email,
      phone: phone,
      password: password,
    };
    handleSignup(formData);
    // if (!error) {
    //   setName('');
    //   setEmail('');
    //   setPhone('');
    //   setPassword('');
    // }
  };

  const handleTextChange = (name, value) => {
    if (name === 'name') {
      setName(value);
      setNameError('');
    }
    if (name === 'email') {
      setEmail(value);
      setEmailError('');
    }
    if (name === 'phone') {
      setPhone(value);
      setPhoneError('');
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
      <ToastMessage
        message={error}
        type={'error'}
        autoHide={true}
        onClose={reset}
      />
      <View style={styles.inputLayout}>
        <Input
          ref={nameRef}
          editable
          maxLength={40}
          label="Name"
          autoCapitalize="none"
          name="firstNamenput"
          icon={'User'}
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => {
            if (emailRef && emailRef.current) {
              emailRef.current.focus();
            }
          }}
          autoCompleteType="email"
          placeholder="John Smith"
          value={name}
          onChangeText={text => handleTextChange('name', text)}
          blurOnSubmit={false}
          error={nameError}
        />
      </View>
      <View style={styles.inputLayout}>
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
            if (phoneRef && phoneRef.current) {
              phoneRef.current.focus();
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
          ref={phoneRef}
          editable
          maxLength={40}
          label="Phone Number"
          autoCapitalize="none"
          name="firstNamenput"
          icon={'Phone'}
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => {
            if (passwordRef && passwordRef.current) {
              passwordRef.current.focus();
            }
          }}
          autoCompleteType="email"
          placeholder="+1 (817) 586-6535"
          value={phone.trim()}
          onChangeText={text => handleTextChange('phone', text)}
          blurOnSubmit={false}
          error={phoneError}
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
      <View style={{marginTop: scaleVertical(-10)}}>
        <Button
          text="Sign Up"
          loading={isLoading}
          onPress={() => handleSubmit()}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: scaleVertical(3),
        }}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(URL_LOGIN)}>
          <Text style={{textAlign: 'right', color: colors.error}}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <SocialAuth text={'Sign Up'} />
    </View>
  );
};

export default SignupForm;
