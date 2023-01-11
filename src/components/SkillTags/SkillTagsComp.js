import React, { useState, useEffect } from 'react';
import { View, Text, Image, } from 'react-native';
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
import { TouchableOpacity } from 'react-native-gesture-handler';
// import CaptureAchievementInput from './CaptureAchievementInput'
import Button from '../shared/Button';
import SkillTags from './SkillTags';
import IndustryTags from './IndustryTags';

const SkillTagsComp = (props) => {


  const capturefromStore = async()=>{
    const captureData=  await asyncStorageService.getCapture();
    // const ncaptureData =  JSON.stringify(captureData)
    console.log(captureData, "niz");
    // console.log(props,"my props");
  }
 
  // JSON.stringify()


  useEffect(() => {
    capturefromStore()
  })
  const navigation = useNavigation();
  const [skill, setSkill]= useState(false)

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
<SkillTags {...props} />
      </View>

    </View>
  );
};

export default SkillTagsComp;
