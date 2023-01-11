/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, forwardRef, useMemo} from 'react';
import {
  TextInput,
  Animated,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import colors from '../../../constants/colors';
import {scale, appFonts, scaleVertical} from '../../../constants/scale';
import IconGenerator from '../../shared/IconGenerator';
import {useNavigation} from '@react-navigation/native';
import { URL_VOICE_CAPTURE } from '../../../constants/navigations';

const AchievementInput= forwardRef((props, ref) => {
  const navigation = useNavigation();

  const [state, setState] = useState({
    isFocused: false,
    secureTextInput: props.secureTextEntry,
  });

  let _animatedIsFocused = useMemo(
    () => new Animated.Value(props.value === '' ? 0 : 1),
    [props.value],
  );
  const handleFocus = () => setState(state => ({...state, isFocused: true}));
  const handleBlur = () => setState(state => ({...state, isFocused: false}));

  const focusInput = () => {
    if (props.editable !== false) {
      ref.current ? ref.current.focus() : null;
    }
  };

  useEffect(() => {
    Animated.timing(_animatedIsFocused, {
      toValue: state.isFocused || props.value !== '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [state.isFocused, props.value, _animatedIsFocused]);

  const {label, icon, visibility} = props;
  const {secureTextInput} = state;
  const outputRange = [
    Platform.OS === 'ios' ? scale(10) : scale(12),
    scale(-15),
  ];
  const labelStyle = {
    marginVertical: scaleVertical(-20),
    position: 'absolute',

    fontFamily: appFonts.Medium.fontFamily,
    fontSize: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [scale(appFonts.h5.fontSize), scale(appFonts.h5.fontSize)],
    }),
    color: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.bodyText, colors.bodyText],
    }),
  };
  return (
    <TouchableWithoutFeedback onPress={focusInput}>
      <View
        style={{
          marginVertical: scaleVertical(10),
          // flex: 1,
          marginHorizontal: props.width ? props.width : null,
        }}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <View
          style={{
            paddingHorizontal: scale(5),
            marginHorizontal:scale(2),
            marginVertical: scaleVertical(10),
            backgroundColor: props.editable === false ? colors.gray5 : "white",
            // borderWidth: scale(1),
            elevation:10,
            borderRadius: scale(7),
            minHeight: scale(45)*2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderColor: props.error
              ? colors.error
              : state.isFocused
              ? colors.success
              : colors.gray5,
          }}>
          <TextInput
            {...props}
            placeholderTextColor={colors.gray4}
            multiline = {true}
            numberOfLines={4}
            ref={ref}
            secureTextEntry={
              props.secureTextEntry ? props.secureTextEntry : false
            }
            enablesReturnKeyAutomatically={true}
            style={[styles.inputStyle]}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {icon ? (
            <TouchableOpacity
            onPress={() => navigation.navigate(URL_VOICE_CAPTURE)}
              style={{
                marginHorizontal: scale(10),
                position: 'absolute',

        bottom: 0,
        right: 0,
        marginVertical:scale(10),

//   backgroundColor:'green',
//   flexDirection:'row',
// //   height:80,
  alignItems:'center',
              }}>
              <IconGenerator tagName={'VoiceSvg'} color={state.isFocused ? colors.success : colors.gray5} />
            </TouchableOpacity>
          ) : null}
        </View>
        <Text
          style={{
            color: colors.error,
            // fontFamily: appFonts.regularText.fontFamily,
            fontSize: scale(appFonts.h6.fontSize),
            // paddingLeft: scale(10),
            marginVertical: scaleVertical(1),
          }}>
          {props.error}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = {
  inputStyle: {
    flex: 1,
    // fontFamily: appFonts.regularText.fontFamily,
    fontSize: scale(appFonts.h5.fontSize),
    color: colors.lightPrimary,
    // paddingBottom: 0,
    paddingHorizontal: scale(10),
    // paddingVertical:scale(10),
    // paddingTop: scaleVertical(10),
    
    fontFamily:appFonts.regularText.fontFamily,
//    textAlignVertical: 'top',
  },
};

export default AchievementInput;
