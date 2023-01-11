import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/shared/HeaderNav/Header';
import HeaderAvatar from '../../components/shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import { URL_TAB } from '../../constants/navigations';
import Button from '../shared/Button';
import colors from '../../constants/colors';
import { appFonts, scale, scaleVertical } from '../../constants/scale';
import { useNavigation } from '@react-navigation/native';
import Banner from '../shared/Banner'
import skillMapBanner from '../../assets/images/skillMapBanner.png'

// import ProfileForm from './component/ProfileForm';
import styles from './styles';
import UploadInput from '../shared/UploadInput/uploadInput';
import Input from '../shared/Input';
import SearchInput from '../shared/SearchInput/searchInput';
import MapList from './list';
import CSMapCard from './CSMapCard';
import SeeAllCard from './SeeAllCard';

const SeeAllSkill = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <View style={{ paddingHorizontal: scale(20) }}>
      <Header
        leftIcon={'BackArrow'}
        onLeftIconPress={() => navigation.goBack()}
        title={'Career'}
        rightIcon={'Notification'}
        iconColor={colors.white}
      />

      <View style={styles.culve}>
      </View>
    </View>
    <View style={styles.layout}>
      <VerticalScroll bgColor={colors.background2}>
        <View style={{}}>
        
       
          <SearchInput />

          <View style={styles.seeAllTitle}>
            <Text style={styles.txtLeftSeeAll}>Select a skill from the list to see the {"\n"}details</Text>
          

          </View>
          <SeeAllCard/>

        </View>
      </VerticalScroll>
    </View>
  </View>
  );
};

export default SeeAllSkill;
