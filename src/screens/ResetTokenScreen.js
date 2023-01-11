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
import useVerifyCode from '../hooks/auth/useVerifyCode';
import useForgotPassword from '../hooks/auth/useForgotPassword';
import Logo from '../assets/images/Logo.png';
import {appFonts, scale, scaleVertical, width} from '../constants/scale';
import colors from '../constants/colors';

const ResetTokenScreen = props => {
  const {email} = props.route.params;
  const [code, setCode] = useState('');
  const [token, setToken] = useState(null);
  const [isCodeValid, setCodeValid] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);
  const {handleVerifyCode, isLoading, error, reset} = useVerifyCode({
    email,
    resetCode: code,
  });

  const {handleForgotPassword} = useForgotPassword({
    email,
  });

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
      resetCode: code,
    };
    handleVerifyCode(formData);
  };

  const handleResend = () => {
    setCode("")
    handleForgotPassword({email});
  };
  return (
    <ImageBackground source={BgImage} style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <View style={styles.holder}>
        <Text style={styles.title}>Verify Code</Text>
        <Text style={styles.desc}>
            Enter the 5 digit OTP code sent to your email
          <Text style={{color: colors.error}}>
            {" "} {email}
          </Text>
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
            text="Verify Code"
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
          <Text>Did not get verification code?</Text>
          <TouchableOpacity onPress={handleResend}>
            <Text style={{textAlign: 'right', color: colors.error}}>
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ResetTokenScreen;

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
    paddingHorizontal: scale(30),
  },
});
