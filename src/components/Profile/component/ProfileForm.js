import React, {createRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import {scaleVertical} from '../../../constants/scale';
import ToastMessage from '../../shared/ToastMessage';
import Toast from 'react-native-toast-message'

import styles from '../styles';
import useProfileUpdate from '../../../hooks/profile/useProfileUpdate';
import useGetUser from '../../../hooks/user/useGetUser';

const ProfileForm = props => {
  const {data} = useGetUser();
  const userId = data?._id
  const {handleProfileUpdate, isLoading, error, reset} = useProfileUpdate(userId);
  const countryRef = createRef();
  const stateRef = createRef();
  const fullNameRef = createRef();
  const phoneRef = createRef();
  const emailRef = createRef()

  const [country, setCountry] = useState('');
  const [countryError, setCountryError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [state, setState] = useState('');
  const [stateError, setStateError] = useState('');
  const [fullName, setFullName] = useState(data?.fullName||"");
  const [fullNameError, setFullNameError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [message, setMessage] = useState({})

  const handleSubmit = () => {
    if (!country || !state || !fullName || !phone) {

      // Toast.show({
      //   type: 'error',
      //   text1: 'Error',
      //   text2: 'Fill in all the fields'
      // });

      ToastMessage({type:"error", message:'Fill in all the fields', autoHide:true})
      // return;
    }

    const formData = {
      country: country ?? "",
      state: state ?? "",
      fullName: fullName ?? "",
      phone: phone ?? "",
  
    };
    console.log(formData, '...formDar');
    handleProfileUpdate(formData);
  };

  const handleTextChange = (name, value) => {
    if (name === 'country') {
      setCountry(value);
      setCountryError('');
    }
    if (name === 'state') {
      setState(value);
      setStateError('');
    }
    if (name === 'fullName') {
      setFullName(value);
      setFullNameError('');
    }
    if (name === 'phone') {
      setPhone(value);
      setPhoneError('');
    }
    // if (name === 'position') {
    //   setPosition(value);
    //   setPositionError('');
    // }
    // if (name === 'experience') {
    //   setExperience(value);
    //   setExperienceError('');
    // }
  };

  return (
    <View>
      {/* <ToastMessage
        message={message?.msg}
        type={message?.type}
        autoHide={true}
        onClose={reset}
      /> */}


      <TouchableOpacity onPress={()=> {}}>
        <View style={styles.linkedIn}>
            <Text style={styles.linkedInText}>Autofill with LinkedIn</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.inputLayout}>
        <Input
          ref={fullNameRef}
          editable
          maxLength={40}
          label="Full Name"
          autoCapitalize="none"
          name="fullName"
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => {
            if (emailRef && emailRef.current) {
              emailRef.current.focus();
            }
          }}
          value={fullName}
          onChangeText={text => handleTextChange('fullName', text)}
          blurOnSubmit={false} 
          error={fullNameError}
        />
      </View>
      <View style={styles.inputLayout}>
        <Input
          ref={emailRef}
          editable={false}
          maxLength={40}
          label="Email"
          autoCapitalize="none"
          name="emailInput"
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => {
            if (countryRef && countryRef.current) {
              countryRef.current.focus();
            }
          }}
          value={data?.email}
          onChangeText={text => handleTextChange('email', text)}
          blurOnSubmit={false}
          error={emailError}
        />
      </View>

      <View style={styles.inputLayout}>
        <Input
          ref={countryRef}
          editable
          maxLength={40}
          label="Country"
          autoCapitalize="none"
          name="countryInput"
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => {
            if (stateRef && stateRef.current) {
              stateRef.current.focus();
            }
          }}
          value={country}
          onChangeText={text => handleTextChange('country', text)}
          blurOnSubmit={false}
          error={countryError}
        />
      </View>
      <View style={styles.inputLayout}>
        <Input
          ref={stateRef}
          editable
          maxLength={40}
          label="State"
          autoCapitalize="none"
          name="stateInput"
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => {
            if (phoneRef && phoneRef.current) {
              phoneRef.current.focus();
            }
          }}
          value={state}
          onChangeText={text => handleTextChange('state', text)}
          blurOnSubmit={false}
          error={stateError}
        />
      </View>

      <View style={styles.inputLayout}>
        <Input
          ref={phoneRef}
          editable
          maxLength={40}
          label="Phone Number"
          autoCapitalize="none"
          name="phoneInput"
          returnKeyType="next"
          autoCorrect={false}
        
          value={phone}
          onChangeText={text => handleTextChange('phone', text)}
          blurOnSubmit={false}
          error={phoneError}
        />
      </View>
      {/* <View style={styles.inputLayout}>
        <Input
          ref={goalsRef}
          editable
          maxLength={40}
          label="Goals/Interest"
          autoCapitalize="none"
          name="goalsInput"
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => {
            if (educationRef && educationRef.current) {
              educationRef.current.focus();
            }
          }}
          value={goals}
          onChangeText={text => handleTextChange('goals', text)}
          blurOnSubmit={false}
          error={goalsError}
        />
      </View> */}
      {/* <View style={styles.inputLayout}>
        <Input
          ref={educationRef}
          editable
          maxLength={40}
          label="Education/Training"
          autoCapitalize="none"
          name="educationInput"
          returnKeyType="next"
          onSubmitEditing={() => {
            if (positionRef && positionRef.current) {
              positionRef.current.focus();
            }
          }}
          autoCorrect={false}
          value={education}
          onChangeText={text => handleTextChange('education', text)}
          blurOnSubmit={false}
          error={educationError}
        />
      </View> */}
      {/* <View style={styles.inputLayout}>
        <Input
          ref={positionRef}
          editable
          maxLength={40}
          label="Current Position"
          autoCapitalize="none"
          name="positionInput"
          returnKeyType="next"
          onSubmitEditing={() => {
            if (experienceRef && experienceRef.current) {
              experienceRef.current.focus();
            }
          }}
          autoCorrect={false}
          value={position}
          onChangeText={text => handleTextChange('position', text)}
          blurOnSubmit={false}
          error={positionError}
        />

      </View> */}
        {/* <View style={styles.inputLayout}>
          <Input
            ref={experienceRef}
            editable
            maxLength={40}
            label="Work Experience (Years)"
            autoCapitalize="none"
            name="experienceInput"
            returnKeyType="done"
            autoCorrect={false}
            value={experience}
            onChangeText={text => handleTextChange('experience', text)}
            blurOnSubmit={false}
            error={experienceError}
          />
        </View> */}
      <View style={{marginTop: scaleVertical(-10)}}>
        <Button
          text="Update"
          loading={isLoading}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default ProfileForm;
