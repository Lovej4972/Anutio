import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../shared/HeaderNav/Header';
import RightHeader from '../shared/HeaderNav/RightHeader';
import HeaderAvatar from '../shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import { URL_PROFILE, URL_VOICE_CAPTURE } from '../../constants/navigations';
import colors from '../../constants/colors';
import asyncStorageService from '../../services/asyncStorageService';
import { appFonts, scale, scaleVertical } from '../../constants/scale';
import { useNavigation } from '@react-navigation/native';
import ActionButton from '../shared/Button/ActionButton';
import styles from './styles';
import BottomSheet from '../shared/BottomSheet';
import Input from '../shared/Input';
import CaptureAchievementInput from './CaptureAchievementInput'

const CaptureAchievement = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: scale(20),
        }}>
        <HeaderAvatar
          iconColor={colors.white}
          imageIconPress={() => navigation.navigate(URL_PROFILE)}
        />
        <RightHeader
          rightIcon={'Notification'}
          iconColor={colors.white}
          onRightIconPress={() => { }}
        />
      </View>
      <View style={styles.layout}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.capture}>Start capturing your achievement </Text>
          <BottomSheet />


        </View>

        <VerticalScroll bgColor={colors.background2}>

<CaptureAchievementInput {...props} imageIconPress={() => navigation.navigate(URL_VOICE_CAPTURE)}/>


        </VerticalScroll>
      </View>
    </View>
  );
};

export default CaptureAchievement;
