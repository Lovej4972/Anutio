import React from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../components/shared/HeaderNav/Header';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import {URL_TAB} from '../../constants/navigations';
import colors from '../../constants/colors';
import useGetUser from '../../hooks/user/useGetUser';
import {appFonts, scale, scaleVertical} from '../../constants/scale';
import {useNavigation} from '@react-navigation/native';
import ProfileForm from './component/ProfileForm';
import styles from './styles';

const ProfileCompletion = () => {
  const {data} = useGetUser();
  const navigation = useNavigation();
  // const {email, fullName} = data;
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: scale(20)}}>
        <Header
          leftIcon={'BackArrow'}
          onLeftIconPress={() => navigation.goBack()}
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
            {data?.fullName}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: colors.white,
              fontSize: appFonts.h6.fontSize,
              paddingVertical: scaleVertical(5),
            }}>
            {data?.email}
          </Text>
        </View>
      </View>
      <View style={styles.layout}>
        <VerticalScroll bgColor={colors.background2}>
          <View style={{marginVertical: scaleVertical(10)}}>
            <ProfileForm />
          </View>
        </VerticalScroll>
      </View>
    </View>
  );
};

export default ProfileCompletion;
