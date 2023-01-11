import React , { useRef, useEffect } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import RightHeader from '../../components/shared/HeaderNav/RightHeader';
import HeaderAvatar from '../../components/shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Button from '../shared/Button';
import colors from '../../constants/colors';
import {URL_PROFILE_COMPLETION, URL_PROFILE, URL_CAPTURE, URL_ADD_EXISTING} from '../../constants/navigations'
import {useNavigation} from '@react-navigation/native';
import AchievementProgress from './components/AchievementProgress';
import styles from './styles';
import useGetProjects from '../../hooks/projects/useGetProjects';

import BottomSheet from '../shared/BottomSheet';
import { useIsFocused } from '@react-navigation/native';

const homeScreen = () => {
  const isFocused = useIsFocused()
  const refRBSheet = useRef();

  const navigation = useNavigation();

const openRBSheet = ()=>{
  refRBSheet.current.open()
}
const closeRBSheet = ()=>{
  refRBSheet.current.close()
}

const { handleGetProjects, error, isLoading, data, reset } = useGetProjects()
const getUserProjects = () => {

    handleGetProjects()
}


useEffect(() => {
    getUserProjects()
}, [isFocused])

  return (
    <VerticalScroll bgColor={colors.background2}>
      <View style={styles.container}>
        <RightHeader
          rightIcon={'Notification'}
          iconColor={colors.black}
          onRightIconPress={() => navigation.navigate(URL_PROFILE_COMPLETION)}
        />
        <HeaderAvatar imageIconPress={() => navigation.navigate(URL_PROFILE)} />
        <View style={styles.holder}>
          <AchievementProgress data={data||[]} />
          <View style={styles.layout}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.text}>You do not have any activity yet</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.help}>GET HELP</Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                
                <Button
                  text={'Capture Achievements'}
                  buttonStyle={styles.capture}
                  onPress={() => navigation.navigate(URL_CAPTURE)}
                  
                  // onPress={() => navigation.navigate(URL_CAPTURE)}
                />
                <TouchableOpacity onPress={openRBSheet}> 

                <BottomSheet RBSheet={refRBSheet} closeRBSheet={closeRBSheet}/>


                </TouchableOpacity>
                
              </View>
            </View>
          </View>
        </View>

      </View>
      
    </VerticalScroll>
  );
};

export default homeScreen;
