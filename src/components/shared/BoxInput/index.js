/* eslint-disable react-native/no-inline-styles */
import React, {useState, forwardRef, useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {scale, appFonts, scaleVertical} from '../../../constants/scale';
import colors from '../../../constants/colors';
import styles from './styles';

const CodeInput = forwardRef((props, ref) => {
  const [state, setState] = useState({focused: false});
  const inputRef = useRef();

  const inputCode = code => {
    const {codeLength, onChangeText, onFulfill} = props;
    // Only allow numbers
    // code = code.replace(/\D/g, '');
    if (onChangeText) {
      onChangeText(code);
    }
    if (code.length === codeLength && onFulfill) {
      onFulfill(code);
    }
  };

  const onFocused = () => {
    setState({focused: true});
  };

  const onBlurred = () => {
    setState({focused: false});
  };

  const {value, codeLength, autoFocus, cellWidth} = props;
  const {focused} = state;

  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current.focus()}>
      <View
        style={{
          padding: scale(10),
        }}>
        <Animatable.View
          style={[
            {
              alignItems: 'center',
              flexDirection: 'row',
            },
          ]}>
          <View
            style={{
              position: 'absolute',
              margin: 0,
              height: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {Array.apply(null, Array(codeLength)).map((_, index) => {
              let cellFocused = focused && index === value.length;
              // Retain focus on last input
              if (value.length === codeLength && index === codeLength - 1) {
                cellFocused = true;
              }

              let cellText = value[index];

              return (
                <Animatable.View
                  key={index}
                  style={[
                    {
                      backgroundColor: props.bgColor
                        ? props.bgColor
                        : colors.white,
                      borderWidth: scale(2),
                      borderColor: props.bdColor
                        ? props.bdColor
                        : colors.borderColor,
                      borderRadius: scale(5),
                      width: scale(cellWidth - 2),
                      // height: scaleVertical(35),
                      marginHorizontal: scale(8),
                      alignItems: 'center',
                      justifyContent: 'center',
                      ...Platform.select({
                        ios: {
                          paddingVertical: scaleVertical(10),
                        },
                        android: {
                          paddingVertical: scaleVertical(0),
                          // elevation: scale(5),
                        },
                      }),
                    },
                    cellFocused ? styles.cellFocusedDefault : {},
                    props.value.length === 5 && !props.loading
                      ? props.error === null
                        ? styles.success
                        : styles.error
                      : null,
                  ]}
                  animation={index === value.length && focused ? 'pulse' : null}
                  iterationCount="infinite"
                  duration={500}>
                  <TextInput
                    value={cellText}
                    editable={false}
                    secureTextEntry={props.secureTextEntry}
                    placeholder="-"
                    style={[
                      styles.textStyleDefault,
                      props.bdColor
                        ? {color: props.bdColor}
                        : {color: colors.secondary},
                    ]}
                  />
                </Animatable.View>
              );
            })}
          </View>
          <TextInput
            ref={inputRef}
            disableFullscreenUI={true}
            value={value}
            onChangeText={inputCode}
            onFocus={onFocused}
            onBlur={onBlurred}
            spellCheck={false}
            autoFocus={autoFocus}
            keyboardType="number-pad"
            numberOfLines={1}
            maxLength={codeLength}
            selection={{
              start: value.length,
              end: value.length,
            }}
            secureTextEntry={props.secureTextEntry}
            style={{
              marginVertical: scale(10),
              // flex: 1,
              width: scale((cellWidth + 16) * codeLength),
              opacity: 0,
              textAlign: 'center',
              fontSize: scale(appFonts.h3.fontSize),
            //   fontFamily: appFonts.BoldText.fontFamily,
            }}
          />
        </Animatable.View>
        {props.value.length === 5 && !props.loading ? (
          props.error !== null ?  (
            <Text style={styles.errorMessage}>This code is not valid!</Text>
          ) : null
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
});

CodeInput.defaultProps = {
  value: '',
  codeLength: 5,
  autoFocus: false,
  secureTextEntry: true,
  cellWidth: 45,
};

export default CodeInput;
