import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/shared/HeaderNav/Header';
import HeaderAvatar from '../../components/shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import { URL_TAB, URL_SKILL_CAREER_MATCH } from '../../constants/navigations';
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
import TopMatch from '../CareerMatch/TopMatchCard';
import useGetSkilsMatched from '../../hooks/skillsMatch/useGetSkillsMatched';

const CareerSkillMap = () => {

  const {handleGetSkillsMatched, error, isLoading, data, reset} = useGetSkilsMatched()

console.log(data, 'csmap');

  const getMatchedSkills = ()=>{
handleGetSkillsMatched() 
  }

  useEffect(() => {
    getMatchedSkills()
  },[])

  console.log(data, '...Msk');

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
            <View style={styles.uploadInput}>
              {/* <UploadInput /> */}
            </View>
            <Banner
              bannerBackground={skillMapBanner}
              title={"Explore your circle to grow your skill"}
              btnText={"learn more"}
              btnStyle={styles.btnStyles}
              onBtnPress={() => navigation.goBack()}

            />
            <SearchInput />
            <MapList />

            <View style={[styles.cardHeader,{marginVertical:scale(20)}]}>
              <Text style={styles.txtLeft}> Skills Matched</Text>
              <TouchableOpacity style={{ justifyContent: 'center' }} 
              
              // onPress={() => navigation.navigate("skill-see-all")}
              onPress={() => navigation.navigate(URL_SKILL_CAREER_MATCH, {TopMatched:data})}

              
              
              >
                <Text style={styles.txtRight}> See All</Text>


              </TouchableOpacity>

            </View>
            {/* <CSMapCard /> */}
<TopMatch skillsData={data}/>
          </View>
        </VerticalScroll>
      </View>
    </View>
  );
};

export default CareerSkillMap;
