import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {scale, scaleVertical} from '../../../constants/scale';
import colors from '../../../constants/colors';
import IconGenerator from '../IconGenerator';

const SocialAuth = props => {
  const {
    text = 'Sign in',
    googleAuth = () => {},
    linkedInAuth = () => {},
  } = props;
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: colors.gray4}} />
        <View>
          <Text style={{width: scale(110), textAlign: 'center'}}>
            Or {text} with
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: colors.gray4}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: scaleVertical(10),
        }}>
        <TouchableOpacity onPress={googleAuth}>
          <View style={styles.SocialButton}>
            <IconGenerator tagName={'Google'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={linkedInAuth}>
          <View style={styles.SocialButton}>
            <IconGenerator tagName={'LinkedIn'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialAuth;

const styles = StyleSheet.create({
  container: {
    paddingTop: scaleVertical(15),
  },
  SocialButton: {
    backgroundColor: colors.gray1,
    paddingHorizontal: scale(17),
    paddingVertical: scaleVertical(14),
    borderRadius: scale(50),
  },
});
