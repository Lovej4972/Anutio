import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, Alert, ActivityIndicator } from 'react-native';
import Header from '../../components/shared/HeaderNav/Header';
import HeaderAvatar from '../../components/shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import { URL_EDUCATIONDETAILS, URL_TAB } from '../../constants/navigations';
import Button from '../shared/Button';
import colors from '../../constants/colors';
import { appFonts, scale, scaleVertical } from '../../constants/scale';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Banner from '../shared/Banner'
import skillMapBanner from '../../assets/images/skillMapBanner.png'

// import ProfileForm from './component/ProfileForm';
import styles from './styles';
import UploadInput from '../shared/UploadInput/uploadInput';
import Input from '../shared/Input';
import SearchInput from '../shared/SearchInput/searchInput';
import IconGenerator from '../shared/IconGenerator';
import { color } from 'react-native-reanimated';
import { MyGoals } from '../Goals/MyGoals';
// import goalBanner from '../../assets/images/goalBanner.jpeg'
import goalBanner from '../../assets/images/banner.png'
import useGetGoal from '../../hooks/goal/useGetGoal';


// import TopMatch from './TopMatchCard';



const Education = () => {
  const navigation = useNavigation()

const [open, setOpen] = useState(false)
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        {/* <Text style={styles.item}>No data found</Text>
   */}
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  };

  const isFocused = useIsFocused()
  // const navigation = useNavigation();
  const [goals, setGoals] = useState([])
  console.log(goals, '...thegoals');

  const { handleGetGoal, error, isLoading, data, reset } = useGetGoal()

  const getUserGoal = async () => {
    await handleGetGoal()
    setGoals(data)

    // set
  }
  useEffect(() => {
    //   return () => {
    // effect
    getUserGoal()
    //   };
  }, [isFocused])

  const sideColors = [colors.lightPink, colors.lightPurple, colors.orangeYellow]


  const MatchedJobCard = [

    {
      id: 1,
      title: "Get Matched",
      iconName: "getMatched"

    },

    {
      id: 2,
      title: "My Jobs",
      iconName: "JobCardIcon"

    },

  ]

  const cardList = [

    {
      id: 1,
      iconName: "EduIcon",
      title: "Education",
    },
    {
      id: 2,
      iconName: "ProjIcon",
      title: "Peojects",

    },
    {
      id: 3,
      iconName: "CareerSkiilMapIcon",
      title: "Skills & Career \n Map",
    },
    {
      id: 4,
      iconName: "JobIcon",
      title: "Jobs",
    },
  ]


  return (

    <View style={styles.container}>
      <View style={{ paddingHorizontal: scale(20) }}>
        <Header
          leftIcon={'BackArrow'}
          onLeftIconPress={() => navigation.goBack()}
          title={'Education'}
          iconColor={colors.white}
        />


      </View>
      <View style={{
        borderTopRightRadius: scale(40),
        borderTopLeftRadius: scale(40),
        paddingHorizontal: scale(20),
        zIndex: 1000,
        paddingTop: scale(30),
        flex: 1
      }}>
        <Banner
          // style={{width:scale(100),}}
          bannerBackground={goalBanner}
          title={"Setting Smart Goals"}
          btnText={"Read more"}
          btnStyle={styles.btnStyles}
          body={"Increase your marketability and pool of opportunities with certifications"}
          onBtnPress={() => navigation.navigate(URL_EDUCATIONDETAILS)}
        />
      </View>


      <View style={styles.layout}>
      <View>
            <Text style={{
              paddingTop: scale(80),
              fontFamily: appFonts.Medium.fontFamily, color: colors.black,
              fontSize: scale(16)
            }} >Credentials
            </Text>
          </View>
        
 

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: scale(20) }}>
            <TouchableOpacity style={{ backgroundColor: colors.primary, padding: scale(10), borderRadius: scale(20), paddingHorizontal: scale(20) }}>
              <Text style={{ color: colors.white }}>Sync Linkedin</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>setOpen(true)} style={{ elevation: 2, backgroundColor: open? colors.white: colors.primary, padding: scale(10), borderRadius: scale(20), paddingHorizontal: scale(20) }}>
              <Text style={{ color:open? colors.primary:colors.white }}>Upload File</Text>
            </TouchableOpacity>

          </View>
        <VerticalScroll bgColor={colors.background2}>
         
          <View>
            <Text style={{
              paddingTop: scale(10),
              fontFamily: appFonts.Medium.fontFamily, color: colors.black,
              fontSize: scale(16)
            }} >My Education & Trainings
            </Text>
          </View>

          <FlatList
            // maxToRenderPerBatch={2}
            vertical
            showsHorizontalScrollIndicator={true}
            ListEmptyComponent={myListEmpty}
            data={data}
            extraData={sideColors}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <View key={index} style={[styles.leftBar, { borderLeftColor: `${sideColors[index]}` }]}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.cardTitle}>
                    {item?.title}
                  </Text>
                  <IconGenerator tagName={"Dot"} />

                </View>

                <Text style={styles.cardStatus}>
                  {item?.description}
                </Text>
                <Text style={[styles.cardStatus]}>
                  {new Date(item?.deadline).toDateString()}
                  {/* {(item?.deadline).toLocaleDateString()} */}
                  {/* {sideColors[index]} */}
                </Text>
              </View>
            )}
          />


          <View>
            <Text style={{
              paddingTop: scale(10),
              fontFamily: appFonts.Medium.fontFamily, color: colors.black,
              fontSize: scale(16)
            }} >Recommendation
            </Text>
            <Text style={{
               padding: scale(5),
              fontFamily: appFonts.regularText.fontFamily, color: colors.black,
              fontSize: scale(16)
            }} >
              Recommended based on your recent activities
            </Text>
          </View>




        </VerticalScroll>
      </View>

    </View>
  )
}

export default Education;