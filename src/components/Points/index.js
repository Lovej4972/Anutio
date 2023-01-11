import React, { useState, useEffect } from 'react';
// const layout = useWindowDimensions();
import { View, Text, TouchableOpacity, Image, FlatList, Alert, ActivityIndicator, Dimensions } from 'react-native';
import Header from '../shared/HeaderNav/Header';
// import HeaderAvatar from '../shared/HeaderNav/HeaderAvatar';
// import VerticalScroll from '../shared/scroll/VerticalScroll';
// import Ellipse from '../../assets/images/Ellipse.png';
import { URL_TAB, URL_NEW_PROJECTS_STATUS } from '../../constants/navigations';
// import Button from '../shared/Button';
import colors from '../../constants/colors';
import styles from './styles';
import { scale } from '../../constants/scale';
// import { appFonts, scale, scaleVertical } from '../../constants/scale';
import { useIsFocused, useNavigation } from '@react-navigation/native';
// import Banner from '../shared/Banner'
// import skillMapBanner from '../../assets/images/skillMapBanner.png'


import { URL_NEW_PROJECTS } from '../../constants/navigations';
import useGetProjects from '../../hooks/projects/useGetProjects';
import VerticalScroll from '../shared/scroll/VerticalScroll';
// import { useNavigation } from '@react-navigation/native';
// import { TabView,  } from 'react-native-tab-view';
import { TabView, SceneMap, TabBar, } from 'react-native-tab-view';
import Banner from '../shared/Banner'
import PointsBanner1 from '../../assets/images/pointBanner1.png'
import PointsBanner2 from '../../assets/images/pointBanner2.png'
import * as Progress from 'react-native-progress';
import PointCards from './components/pointCards';
import Rewards from './components/rewards';
import Badges from './components/Badges';
import History from './components/history';
import useGetPointHistory from '../../hooks/points/useGetPointHistory'
// import { useIsFocused } from '@react-navigation/native';



export default function Projects() {
const isFocused = useIsFocused()
  const { handleGetPointHistory, error, isLoading, data, reset } = useGetPointHistory()
  const totalPoints = data?.reduce((total, item) => total + (item?.point), 0)

  console.log(data, "....bhisto");
  const getPointHistory = () => {
    handleGetPointHistory()
  }
  useEffect(() => {
    getPointHistory()

  }, [isFocused])


  const FirstRoute = () => (
    <View style={{ backgroundColor: colors.white }} >

      <Rewards />
    </View>
  );

  const SecondRoute = () => (

    <View style={{ flex: 1, justifyContent: 'center' }}>
      {/* <View style={{ flex: 1, backgroundColor: 'transparent' }} /> */}
      <Badges />

    </View>
  );

  const ThirdRoute = () => (

    <View style={{ flex: 1, justifyContent: 'center' }}>
      {/* <View style={{ flex: 1, backgroundColor: 'transparent' }} /> */}
      <History />


    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  });

  // const renderScene = ({ route, }) => {
  //   switch (route.key) {
  //     case 'first':
  //       return <FirstRoute  pointsData={data}/>;
  //     case 'second':
  //       return <SecondRoute pointsData={data}/>;
  //       case 'third':
  //         return <ThirdRoute pointsData={data}/>
  //     default:
  //       return null;
  //   }
  // };

  const navigation = useNavigation()
  // const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Rewards' },
    { key: 'second', title: 'Badges' },
    { key: 'third', title: 'History' },
    // 
  ]);



  const renderTabBar = props => (


    <TabBar
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      labelStyle={{ color: colors.black, fontSize: scale(10) }}
      {...props}
      indicatorStyle={{ backgroundColor: colors.primary, height: scale(3) }}
      style={{ backgroundColor: colors.background2, borderColor: 'transparent', color: colors.black }}
    />


  );


  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: scale(20) }}>
        <Header
          leftIcon={'BackArrow'}
          onLeftIconPress={() => navigation.goBack()}
          title={'Career'}
          // rightIcon={'Notification'}
          iconColor={colors.white}
        />

        <View style={styles.culve}>
        </View>
      </View>

      <View style={styles.layout}>
        {/* <VerticalScroll bgColor={colors.background2}> */}
        <View style={{ marginVertical: scale(10) }}>

          <Banner
            bannerBackground={PointsBanner1}
            title={"Balance:"}
            btnText={"Redeem Points"}
            btnStyle={styles.btnStyles}
            point={totalPoints}
          // body={"How to set goals and achieve them"}
          // onBtnPress={() => navigation.goBack()}

          />

        </View>

        {/* </VerticalScroll> */}
        <View style={{ flex: 1, }}>

          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: scale(200) }}
            renderTabBar={renderTabBar}
          />  

        </View>


        {/* <BottomSheet openSheet={goalSuccess}/> */}

      </View>

    </View>
  )
}

