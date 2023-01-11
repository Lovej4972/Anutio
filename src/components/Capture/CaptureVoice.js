import React from 'react'
import { View, Text, Image } from 'react-native';
import Header from '../shared/HeaderNav/Header';
import RightHeader from '../shared/HeaderNav/RightHeader';
import HeaderAvatar from '../shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import VoiceCapture from '../../assets/images/VoiceCapture.png';

import { URL_PROFILE } from '../../constants/navigations';
import colors from '../../constants/colors';
import asyncStorageService from '../../services/asyncStorageService';
import { appFonts, scale, scaleVertical } from '../../constants/scale';
import { useNavigation } from '@react-navigation/native';
import ActionButton from '../shared/Button/ActionButton';
import styles from './styles';
import BottomSheet from '../shared/BottomSheet';
import Input from '../shared/Input';
import CaptureAchievementInput from './CaptureAchievementInput'

export default function CaptureVoice() {
  return (
    <VerticalScroll bgColor={colors.background2}>
   <View style={styles.VoiceContainer}>
   <Image source={Ellipse} style={styles.userAvatar} />
        <Text style={styles.textBody}>Hit record to capture achievement</Text>
      <View style={styles.voiceIcon}> 
      <Image source={VoiceCapture} />


      </View>
      
        </View>

    </VerticalScroll>
  )
}
