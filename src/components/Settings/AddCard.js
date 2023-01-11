import React, {useState, useEffect,createRef,} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../shared/HeaderNav/Header';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import ProfileStar from '../../assets/images/ProfileStar.png';
import useChangePassword from '../../hooks/auth/useChangePassword';

import {URL_LOGIN,URL_PROFILE_COMPLETION,URL_GOALS, URL_PROJECTS, URL_ADD_CARD_DETAILS } from '../../constants/navigations';
import colors from '../../constants/colors';
import useGetUser from '../../hooks/user/useGetUser';
import asyncStorageService from '../../services/asyncStorageService';
import {appFonts, scale, scaleVertical, width} from '../../constants/scale';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import ActionButton from '../shared/Button/ActionButton';
import styles from './styles';
import IconGenerator from '../shared/IconGenerator';
import Button from '../shared/Button';
import Input from '../../components/shared/Input'
import Card from '../../assets/images/card.png';


// import Input from '../../'
const AddCard= (props) => {
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
       navigation.navigate(URL_ADD_CARD_DETAILS)

    }

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
     
     <View style={{marginBottom:scale(20), justifyContent:'center', alignItems:'center'}}>
     <Image source={Card} />


     </View>
   <View style={styles.cardTextContainer}>

   <Text style={styles.cardText}> You’re yet to add any
card</Text>
   </View>


     
      <View style={styles.holder}>
       
    


        <View style={{marginTop: scaleVertical(10)}}>
          <Button
            text="Add Cards"
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

export default AddCard;

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