import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Header from '../../components/shared/HeaderNav/Header';
import HeaderAvatar from '../../components/shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import {URL_TAB} from '../../constants/navigations';
import Button from '../shared/Button';
import colors from '../../constants/colors';
import {appFonts, scale, scaleVertical} from '../../constants/scale';
import {useNavigation} from '@react-navigation/native';
import ProfileForm from './component/ProfileForm';
import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: scale(20)}}>
        <Header
          leftIcon={'BackArrow'}
          onLeftIconPress={() => navigation.navigate(URL_TAB)}
          title={'Profile'}
          rightIcon={'Notification'}
          iconColor={colors.white}
        />
        <View style={styles.profileAvatar}>
          <View style={styles.culve}>
            <Image source={Ellipse} style={styles.userAvatar} />
          </View>
        </View>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: scaleVertical(15),
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: colors.white,
              fontSize: appFonts.h4.fontSize,
            }}>
            Etty Fidele
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: colors.white,
              fontSize: appFonts.h6.fontSize,
              paddingVertical: scaleVertical(5),
            }}>
            etty.fid@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.layout}>
        <VerticalScroll>
          <View style={{marginVertical: scaleVertical(10)}}>
            <ProfileForm />
          </View>
        </VerticalScroll>
      </View>
    </View>
  );
};

export default HomeScreen;
