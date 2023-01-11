import React, {useState, useEffect,createRef,} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../shared/HeaderNav/Header';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import ProfileStar from '../../assets/images/ProfileStar.png';
import useChangePassword from '../../hooks/auth/useChangePassword';

import {URL_LOGIN,URL_PROFILE_COMPLETION,URL_GOALS, URL_PROJECTS } from '../../constants/navigations';
import colors from '../../constants/colors';
import useGetUser from '../../hooks/user/useGetUser';
import asyncStorageService from '../../services/asyncStorageService';
import {appFonts, scale, scaleVertical, width} from '../../constants/scale';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import ActionButton from '../shared/Button/ActionButton';
import styles from './styles';
import IconGenerator from '../shared/IconGenerator';
import Button from '../shared/Button';
import Input from '../../components/shared/Input';

// import Input from '../../'
const PasswordSettings= (props) => {

    const {email, resetCode} = 10
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


    <View style={styles.container}>
    <View style={{paddingHorizontal: scale(20)}}>
      <Header
        leftIcon={'BackArrow'}
        title={'Projects'}
        onLeftIconPress={() => navigation.goBack()}
        iconColor={colors.black}
      />
      
    </View>
 

    <View style={styles.layout2}>
   

   
      <VerticalScroll bgColor={colors.background2}>
        <View style={{marginVertical: scaleVertical(10)}}>
          
    <View style={styles.container}>
     
   

     
      <View style={styles.holder}>
        <View style={styles.inputLayout}>
          <Input
            ref={passwordRef}
            editable
            maxLength={40}
            label="Current Password"
            autoCapitalize="none"
            name="passwordInput"  
            returnKeyType="next"
            autoCorrect={false}
            onSubmitEditing={() => {
              if (CpasswordRef && CpasswordRef.current) {
                CpasswordRef.current.focus();
              }
            }}
            placeholder="Enter Current password"
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
            label="New Password"
            autoCapitalize="none"
            name="CpasswordInput"
            returnKeyType="done"
            autoCorrect={false}
            placeholder="Enter New password"
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
            text="Save"
            loading={isLoading}
            onPress={handleSubmit}
          />
          <TouchableOpacity style={{marginTop: scaleVertical(20)}} onPress={() => navigation.navigate(URL_LOGIN)}>
          </TouchableOpacity>
        </View>
      </View>



    </View>

        </View>
      </VerticalScroll>
    </View>
  </View>



  );
};

export default PasswordSettings;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: colors.background,
//       paddingTop: scaleVertical(80),
//     },
//     image: {
//       width: width,
//       resizeMode: 'contain',
//     },
//     holder: {
//       justifyContent: 'center',
//       paddingVertical: scaleVertical(30),
//       paddingHorizontal: scale(30),
//     },
//     inputLayout: {
//       marginVertical: scaleVertical(5),
//     },
//   });