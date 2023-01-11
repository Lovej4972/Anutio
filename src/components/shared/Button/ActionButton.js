import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import PropTypes from 'prop-types';
import {View} from 'react-native-animatable';
import {scale, appFonts, scaleVertical} from '../../../constants/scale';
import colours from '../../../constants/colors';
import IconGenerator from '../IconGenerator';
const ActionButton = ({
  text,
  desc,
  iconName,
  Component,
  onPress,
  showNext,
  buttonStyle,
  textStyle,
  active = false,
  navAction = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.containerStyle, buttonStyle]}>
      <View style={styles.wrap}>
        {iconName ? (
          <View style={styles.icon}>
            <IconGenerator
              tagName={iconName}
              color={colours.headerText}
              height={scaleVertical(20)}
            />
          </View>
        ) : null}
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
      <View style={styles.arrowText}>
        {desc ? <Text style={styles.word}>{desc}</Text> : null}
        {Component ? (
          Component
        ) : active ? (
          <IconGenerator tagName="ActiveMark" height={scaleVertical(18)} />
        ) : navAction ? (
          <IconGenerator
            tagName="Next"
            color={colours.secondary}
            height={scaleVertical(18)}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scale(5),
    paddingVertical: scale(5),
    borderBottomWidth: scale(1),
    borderBottomColor: '#CDE1FF',
  },
  containerStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scale(10),
    paddingVertical: scale(10),
  },
  wrap: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: scale(10),
    borderRadius: scale(5),
    paddingHorizontal: scale(5),
    paddingVertical: scaleVertical(4),
    marginTop: scaleVertical(-5),
  },
  text: {
    color: colours.secondary,
    fontSize: appFonts.h5.fontSize,
    fontFamily:appFonts.Medium.fontFamily

    // fontFamily: appFonts.regularText.fontFamily,
  },
  arrowText: {
    flexDirection: 'row',
  },
  word: {
    color: colours.gray4,
    fontSize: appFonts.h5.fontSize,
    // fontFamily: appFonts.regularText.fontFamily,
  },
});

ActionButton.defaultProps = {
  text: '',
  showNext: true,
  ...styles, // this would spread the styles object
};

const stylePropsType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.object),
  PropTypes.object,
]);

ActionButton.propTypes = {
  containerStyle: stylePropsType,
  textStyle: stylePropsType,
};

export default ActionButton;
