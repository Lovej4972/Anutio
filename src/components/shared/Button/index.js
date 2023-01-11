import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import colors from '../../../constants/colors';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = ({
  text,
  onPress,
  containerStyle,
  loading,
  disabled,
  indicatorColor,
  buttonStyle,
  textStyle,
  capture,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.containerStyle, buttonStyle,{backgroundColor:capture?'#D93962':colors.primary}]}>
      {loading ? (
        <ActivityIndicator color={indicatorColor} />
      ) : (
        <Text style={[styles.text, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  text: '',
  loading: false,
  indicatorColor: colors.bg,
  ...styles, // this would spread the styles object
};

const stylePropsType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.object),
  PropTypes.object,
]);

Button.propTypes = {
  containerStyle: stylePropsType,
  textStyle: stylePropsType,
};

export default Button;
