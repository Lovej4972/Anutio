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
const AddCardDetails= (props) => {

    const {email, resetCode} = 10
    const navigation = useNavigation();
    const cardNumberRef = createRef();
    const cardExpiryRef = createRef();
    const cardCvvRef = createRef();

    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardNumberError, setCardNumberError] = useState('');
    const [cardCvv, setCardCvv] = useState('');

    const [cardExpiryError, setCardExpiryError] = useState('');
    const [cardCvvError, setCardCvvError] = useState('');

    const [isHidden, setIsHidden] = useState(false);
    const [hidden, setHidden] = useState(false);
    const {handleChangePassword, isLoading, error, reset} = useChangePassword();
  


    const handleTextChange = (name, value) => {
        if (name === 'cardNumber') {
          setCardNumber(value);
          setCardNumberError('');
        }
        if (name === 'cardExpiry') {
          setCardExpiry(value);
          setCardExpiryError('');
        }
        if (name === 'cardCvv') {
          setCardCvv(value);
          setCardCvvError('');
        }
      };
    
  
  
    const handlePasswordVisibility = () => {
      setIsHidden(!isHidden);
    };
  
    
    const handleVisibility = () => {
      setHidden(!hidden);
    };

    const handleSubmit = () => {
        if (!cardNumber) {
          setCardNumberError('Enter Card Number');
          return;
        }
        if (!cardExpiry) {
          setCardExpiryError('Enter Card Expiry');
          return;
        }
        if (!cardCvv) {
          setCardCvvError('Enter Card CVV');
          return;
        }
        // if (password !== Cpassword) {
        //   setCPasswordError('Enter Card Expiry!');
        //   return;
        // }

        // const formData = {
        //   email: email,
        //   resetCode: resetCode,
        //   password: password,
        // };
        // // console.log(formData)
        // handleChangePassword(formData);
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
     
    <View style={styles.cardTextContainer}>

   <Text style={styles.cardText1}> Enter your card details to Pay </Text>
   </View>

     
      <View style={styles.holder}>
        <View style={styles.inputLayout}>
          <Input
            ref={cardNumberRef}
            editable
            maxLength={40}
            label="Card Number"
            autoCapitalize="none"
            name="cardNumber"  
            returnKeyType="next"
            autoCorrect={false}
            onSubmitEditing={() => {
              if (cardExpiryRef && cardExpiryRef.current) {
                cardExpiryRef.current.focus();
              }
            }}
            placeholder="0000 0000 0000 0000"
            value={cardNumber}
            onChangeText={text => handleTextChange('cardNumber', text)}
            blurOnSubmit={false}
            // icon={isHidden ? 'EyeClose' : 'EyeOpen'}
            error={cardNumberError}
            visibility={handlePasswordVisibility}
            secureTextEntry={isHidden}
          />
        </View>
     <View style={{flexDirection:'row', justifyContent:'space-between'}}> 

     <View style={styles.inputLayout1}>
          <Input
            ref={cardExpiryRef}
            editable
            maxLength={40}
            label="Card Expiry"
            autoCapitalize="none"
            name="cardExpiry"
            returnKeyType="done"
            autoCorrect={false}
            placeholder="MM/YY"
            value={cardExpiry}
            onChangeText={text => handleTextChange('cardExpiry', text)}
            blurOnSubmit={false}
            // icon={hidden ? 'EyeClose' : 'EyeOpen'}
            error={cardExpiryError}
            visibility={handleVisibility}
            secureTextEntry={hidden}
          />
        </View>

        <View style={styles.inputLayout1}>
          <Input
            ref={cardCvvRef}
            editable
            maxLength={40}
            label="CVV"
            autoCapitalize="none"
            name="cardCvv"
            returnKeyType="done"
            autoCorrect={false}
            placeholder="123"
            value={cardCvv}
            onChangeText={text => handleTextChange('cardCvv', text)}
            blurOnSubmit={false}
            // icon={hidden ? 'EyeClose' : 'EyeOpen'}
            error={cardCvvError}
            visibility={handleVisibility}
            secureTextEntry={hidden}
          />
        </View>
        
     </View>


      </View>



    </View>

        </View>
        
      </VerticalScroll>
    </View>

    <View style={{marginTop: scaleVertical(10), bottom:0, marginHorizontal:scale(50)}}>
          <Button
            text="Add"
            loading={isLoading}
            onPress={handleSubmit}
          />
          {/* <TouchableOpacity style={{marginTop: scaleVertical(20)}} onPress={() => navigation.navigate(URL_LOGIN)}>
          </TouchableOpacity> */}
        </View>
  </View>



  );
};

export default AddCardDetails;

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