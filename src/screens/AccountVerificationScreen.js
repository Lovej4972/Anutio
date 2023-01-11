import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Button from '../components/shared/Button';
import BoxInput from '../components/shared/BoxInput';
import BgImage from '../assets/images/bgAuth.png';
import useVerifyAccount from '../hooks/auth/useVerifyAccount';
import useGetResendAccount from '../hooks/auth/useGetResendAccount';
import Logo from '../assets/images/Logo.png';
import {appFonts, scale, scaleVertical, width} from '../constants/scale';
import colors from '../constants/colors';

const AccountVerificationScreen = props => {
  const {email} = props.route.params;
  const [code, setCode] = useState('');
  const [isCodeValid, setCodeValid] = useState(true);

  // const {data} = useGetResendAccount();
  const {handleVerifyAccount, isLoading, error, reset} = useVerifyAccount();

  const onFulfill = token => {
    reset();
    if (token.length !== 5) {
      return;
    }
    // setToken(token)
    // const formData = {
    //   email: email,
    //   resetCode: token,
    // };
    // handleVerifyCode(formData);
  };

  const handleSubmit = () => {
    reset();
    if (code.length !== 5) {
      return;
    }
    const formData = {
      email: email,
      verificationCode: code,
    };
    handleVerifyAccount(formData);
  };

  const handleResend = () => {
    const {data} = useGetResendAccount();
    useGetResendAccount()
    console.log('data')
  };
  return (
    <ImageBackground source={BgImage} style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <View style={styles.holder}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.desc}>
          Enter the 5 digit OTP has been sent to your email
          <Text style={{color: colors.error}}>{" "} {email}</Text>
        </Text>
        <View style={styles.inputLayout}>
          <BoxInput
            value={code}
            onChangeText={setCode}
            secureTextEntry={false}
            isValid={code.length === 5 ? isCodeValid : false}
            onFulfill={onFulfill}
            loading={isLoading}
            error={error}
          />
        </View>
        <View style={{marginTop: scaleVertical(10)}}>
          <Button
            text="Verify Account"
            loading={isLoading}
            onPress={handleSubmit}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: scaleVertical(3),
          }}>
          <Text>Did not receive OTP?</Text>
          <TouchableOpacity onPress={handleResend}>
            <Text style={{textAlign: 'right', color: colors.error}}>
              Resend OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AccountVerificationScreen;

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
    paddingVertical: scaleVertical(20),
    paddingHorizontal: scale(30),
  },
  inputLayout: {
    marginVertical: scaleVertical(5),
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
    paddingHorizontal: scale(20),
  },
});
