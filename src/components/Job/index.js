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
import { MyGoals } from '../Goals/MyGoals';
import goalBanner from '../../assets/images/goalBanner.jpeg'


// import TopMatch from './TopMatchCard';

const Job = () => {
   const navigation = useNavigation()

const MatchedJobCard=[

{
    id:1,
    title:"Get Matched",
    iconName: "getMatched"

},

{
    id:2,
    title:"My Jobs",
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


return(

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
<SearchInput/>

<View style={{flexDirection:'row', justifyContent:'space-between'}}>

{
    MatchedJobCard.map((item, index)=>
    <View key={index} style={styles.flexCard}>  

<IconGenerator tagName={item.iconName}/>

    <Text style={styles.jobText}> {item.title}</Text>
</View>
    )
}

</View>

<View style={styles.titleTxt}>
<Text style={styles.txt}> Jobs For You</Text>

<FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={cardList}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <View style={{ alignItems: 'center', marginHorizontal:scale(10)  }}>

                    <Banner
                    bannerBackground={goalBanner}
                    title={"Setting Smart Goals"}
                    btnText={"Read more"}
                    btnStyle={styles.btnStyles}
                    body={"How to set goals and achieve them"}
                    onBtnPress={() => navigation.goBack()}

                />
                    </View>
                )}
            />
</View>

        </VerticalScroll>
      </View>
    </View>
)
}

export default Job;