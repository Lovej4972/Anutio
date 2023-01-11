import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {scale} from '../../../constants/scale';
import useGetUser from '../../../hooks/user/useGetUser';
import Ellipse from '../../../assets/images/Ellipse.png';
import IconGenerator from '../../../components/shared/IconGenerator';
import styles from './styles';

function HeaderAvatar({
  iconColor,
  imageIconPress = () => {},
  hasShadow = true,
}) {
  const {data} = useGetUser();
  // const {email, fullName} = data
  return (
    <View style={[styles.header, hasShadow && styles.shadow]}>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.leftIcon} onPress={imageIconPress}>
            <View style={styles.culve}>
                <Image source={Ellipse} style={styles.userAvatar} />
            </View>
        </TouchableOpacity>
        <View>
          <Text style={[styles.userName, iconColor? {color: iconColor} : null]}>Hi,  
           {" "} {data?.fullName}
          </Text>
          <View style={{flexDirection: 'row',  alignItems: 'center', paddingHorizontal: scale(10)}}>
            <IconGenerator tagName={'Location'} color={iconColor} />
            <Text style={[styles.location, iconColor? {color: iconColor} : null]}>Standford</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default HeaderAvatar;
