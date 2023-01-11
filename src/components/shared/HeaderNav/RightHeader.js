import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import IconGenerator from '../../../components/shared/IconGenerator';

function RightHeader({
  rightIcon,
  hasShadow = true,
  onRightIconPress = () => {},
  imageLogo,
  iconColor = 'white',
  imageIconPress = () => {},
  children,
}) {
  return (
    <View style={[styles.header, hasShadow && styles.shadow]}>
      <View
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            <IconGenerator tagName={rightIcon} color={iconColor} />
          </TouchableOpacity>
        )}
        {imageLogo && (
          <TouchableOpacity onPress={imageIconPress}>
            <Image source={imageLogo} style={styles.image} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default RightHeader;
