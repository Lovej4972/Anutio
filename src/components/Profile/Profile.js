import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Header from '../shared/HeaderNav/Header';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import ProfileStar from '../../assets/images/ProfileStar.png';

import {URL_LOGIN,URL_PROFILE_COMPLETION,URL_GOALS, URL_PROJECTS, URL_SETTINGS, URL_POINTS, URL_CAPTURE, URL_ALL_CAPTURE } from '../../constants/navigations';
import colors from '../../constants/colors';
import useGetUser from '../../hooks/user/useGetUser';
import asyncStorageService from '../../services/asyncStorageService';
import {appFonts, scale, scaleVertical} from '../../constants/scale';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import ActionButton from '../shared/Button/ActionButton';
import styles from './styles';
import IconGenerator from '../shared/IconGenerator';
import Button from '../shared/Button';
// import BottomSheet from '../shared/BottomSheet';
import BottomSheet from './component/BottomSheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {

  const isFocused = useIsFocused();

  const [profileData, setProfileData] = useState([]);
 
  const navigation = useNavigation();
  const {data}=  useGetUser();
  const refRBSheet = useRef();

const openRBSheet = ()=>{
  refRBSheet.current.open()
}
const closeRBSheet = ()=>{
  refRBSheet.current.close()
}


// useEffect(() => {

// const {data}=  useGetUser()

// }, [isFocused])


  const handleLogout = async () => {
    await asyncStorageService.removeToken();
    await AsyncStorage.removeItem("first_time"),
    navigation.replace(URL_LOGIN);
  };
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: scale(20)}}>
        <Header
          leftIcon={'BackArrow'}
          onLeftIconPress={() => navigation.goBack()}
          iconColor={colors.white}
        />
        
      </View>
      <View style={styles.profileStar}> 
    
    <Image source={ProfileStar}  />

    </View>

      <View style={styles.layout2}>
        <View style={styles.profileAvatar2}>
          <View style={styles.culve}>
            <Image source={Ellipse} style={styles.userAvatar} />
          </View>
 

        </View>
        <View style={styles.editButtonContainer}> 

<Button
              text={'Edit Profile'}
              buttonStyle={styles.editButton}
              // containerStyle={styles.editButton}
              onPress={() => navigation.navigate(URL_PROFILE_COMPLETION)}
            />

</View>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: scaleVertical(20),
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: colors.secondary,
              fontWeight: '700',
              fontSize: appFonts.h4.fontSize,
            fontFamily:appFonts.BoldText.fontFamily
          
            }}>
            {data?.fullName}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: colors.secondary,
              fontWeight: '500',
              fontSize: appFonts.h6.fontSize,
              paddingVertical: scaleVertical(5),
              fontFamily: appFonts.BoldText.fontFamily
            }}>
           {data?.email}
          </Text>

          <View style={{flexDirection:'row'}}>
          <View style={{
            paddingHorizontal:scale(20)

          }}>

<Text
  style={styles.bio}>
 {data?.interest?.slice(0,15)}...
</Text>
<Text
  style={styles.bio}>
 {data?.goals?.slice(0,15)}...
</Text>
<Text
  style={styles.bio}>
 {data?.funFact?.slice(0,15)}...
</Text>
</View>

<TouchableOpacity onPress={openRBSheet} > 

<BottomSheet RBSheet={refRBSheet} closeRBSheet={closeRBSheet}/>


</TouchableOpacity>


          </View>
      
       
        </View>
        <VerticalScroll bgColor={colors.background2}>
          <View style={{marginVertical: scaleVertical(10)}}>


            <ActionButton
              text={'Account'}
              iconName={'User'}
              navAction={true}
              onPress={() => {navigation.navigate('profile-completion')}}
            />
            <ActionButton
              text={'Career and Skills Map'}
              iconName={'CareerMap'}
              navAction={true}
              onPress={() => {navigation.navigate('career-skill-map')}}
            />
          
          <ActionButton
              text={'Capture Achievements'}
              iconName={'GoalIcon'}
              navAction={true}
              onPress={() => {navigation.navigate(URL_ALL_CAPTURE)}}
            />
            <ActionButton
              text={'Projects'}
              iconName={'ProjectsIcon'}
              navAction={true}
              onPress={() => {navigation.navigate(URL_PROJECTS)}}
            />
              <ActionButton
              text={'Goals'}
              iconName={'GoalIcon'}
              navAction={true}
              onPress={() => {navigation.navigate(URL_GOALS)}}
            />
              <ActionButton
              text={'Redeem Points'}
              iconName={'ProjectsIcon'}
              navAction={true}
              onPress={() => {navigation.navigate(URL_POINTS)}}
            />
              <ActionButton
              text={'Get Help'}
              iconName={'getHelp'}
              navAction={true}
              onPress={() => {}}
            />
            <ActionButton
              text={'Your Circle'}
              iconName={'YourCirle'}
              navAction={true}
              onPress={() => {}}
            />
            <ActionButton
              text={'Invite friends'}
              iconName={'AddFriend'}
              navAction={true}
              onPress={() => {}}
            />
            <ActionButton
              text={'Settings'}
              iconName={'Setting'}
              navAction={true}
              onPress={() => {navigation.navigate(URL_SETTINGS)}}
            />
            <ActionButton
              text={'Network Map'}
              iconName={'NetworkMap'}
              navAction={true}
              onPress={() => {}}
            />
            <ActionButton
              text={'About Anutio'}
              iconName={'About'}
              navAction={true}
              onPress={() => {}}
            />
            <ActionButton
              text={'Log out'}
              iconName={'LogoutIcon'}
              navAction={true}
              onPress={handleLogout}
            />
         
          </View>
        </VerticalScroll>
      </View>
   
   

    </View>
  );
};

export default Profile;
