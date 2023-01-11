import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import IconGenerator from '../../../components/shared/IconGenerator';

function Header({
  title,
  onLeftIconPress = () => {},
  rightIcon,
  navigation,
  leftIcon,
  iconColor,
  hasShadow = true,
  onRightIconPress = () => {},
  imageLogo,
  imageIconPress = () => {},
  children,
}) {

  console.log(title, 'title');
  return (
    <View style={[styles.header, hasShadow && styles.shadow]}>
      
      <View style={styles.headerIcons}>
        {leftIcon && (
          <TouchableOpacity style={styles.leftIcon} onPress={onLeftIconPress}>
            <IconGenerator tagName={leftIcon} color={iconColor} />
          </TouchableOpacity>
        )}
        {title && <Text style={styles.headertxt}>{title}</Text>}
      </View>
      <View style={styles.rowView}>
        {rightIcon ? (
          <TouchableOpacity onPress={onRightIconPress}>
            <IconGenerator tagName={rightIcon} color={iconColor} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={imageIconPress}>
            <Image source={imageLogo} style={styles.image} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default Header;
