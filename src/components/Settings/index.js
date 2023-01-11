import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../shared/HeaderNav/Header';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import ProfileStar from '../../assets/images/ProfileStar.png';

import {URL_LOGIN,URL_PROFILE_COMPLETION,URL_GOALS, URL_PROJECTS, URL_PASSWORD_SETTINGS, URL_ADD_CARD } from '../../constants/navigations';
import colors from '../../constants/colors';
import useGetUser from '../../hooks/user/useGetUser';
import asyncStorageService from '../../services/asyncStorageService';
import {appFonts, scale, scaleVertical} from '../../constants/scale';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import ActionButton from '../shared/Button/ActionButton';
import styles from './styles';
import IconGenerator from '../shared/IconGenerator';
import Button from '../shared/Button';

const Settings= () => {

  const isFocused = useIsFocused();

  const [profileData, setProfileData] = useState([]);
 
  const navigation = useNavigation();
  const {data}=  useGetUser();


// useEffect(() => {

// const {data}=  useGetUser()

// }, [isFocused])


  const handleLogout = async () => {
    await asyncStorageService.removeToken();
    navigation.navigate(URL_LOGIN);
  };
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: scale(20)}}>
        <Header
          leftIcon={'BackArrow'}
          title={'Projects'}
          onLeftIconPress={() => navigation.goBack()}
          iconColor={colors.black}
        />
        
      </View>
   

      <View style={styles.layout2}>
     
  
     
        <VerticalScroll bgColor={colors.background2}>
          <View style={{marginVertical: scaleVertical(10)}}>
            <ActionButton
              text={'Password'}
              iconName={'User'}
              navAction={true}
              onPress={() => {navigation.navigate(URL_PASSWORD_SETTINGS)}}
            />
            <ActionButton
              text={'Manage Plans'}
              iconName={'CareerMap'}
              navAction={true}
              onPress={() => {}}
            />
            <ActionButton
              text={'Add/Change Card'}
              iconName={'GoalIcon'}
              navAction={true}
              onPress={() => {navigation.navigate(URL_ADD_CARD)}}
            />
            <ActionButton
              text={'Notification'}
              iconName={'getHelp'}
              navAction={true}
              onPress={() => {}}
            />
            <ActionButton
              text={'Sync Accounts'}
              iconName={'ProjectsIcon'}
              navAction={true}
              onPress={() => {}}
            />
            <ActionButton
              text={'Security'}
              iconName={'YourCirle'}
              navAction={true}
              onPress={() => {}}
            />
            <ActionButton
              text={'Privacy'}
              iconName={'AddFriend'}
              navAction={true}
              onPress={() => {}}
            />

          </View>
        </VerticalScroll>
      </View>
    </View>
  );
};

export default Settings;
