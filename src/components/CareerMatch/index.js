import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
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
import IconGenerator from '../shared/IconGenerator';
import { color } from 'react-native-reanimated';
import TopMatch from './TopMatchCard';
import { Provider } from 'react-native-paper';
const CareerMatch = (props) => {
  const TopMatched = props?.route?.params

  console.log(TopMatched?.TopMatched[0]?.matched, '.....aoSkills');
   const navigation = useNavigation()
return(
  <Provider> 
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
            {/* <MapList /> */}

            <View style={styles.cardHeader}>
              <Text style={styles.txtLeft}> Top Matches</Text>
              <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => navigation.navigate("skill-see-all")}>
                {/* <Text style={styles.txtRight}> See All</Text> */}

              </TouchableOpacity>

            </View>
        <TopMatch skillsData={TopMatched.TopMatched}/>


          </View>
        </VerticalScroll>
      </View>
    </View>
    </Provider>
)
}

export default CareerMatch;