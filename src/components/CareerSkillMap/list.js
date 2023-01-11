import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Header from '../../components/shared/HeaderNav/Header';
import HeaderAvatar from '../../components/shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import { URL_TAB, URL_PROJECTS, URL_SKILL_CAREER_MATCH, URL_JOB} from '../../constants/navigations';
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

const MapList = () => {
    const navigation = useNavigation();

    const cardList = [

        {
            id: 1,
            iconName: "EduIcon",
            title: "Education",
            goTo:()=>{}
        },
        {
            id: 2,
            iconName: "ProjIcon",
            title: "Peojects",
            goTo:()=>{navigation.navigate(URL_PROJECTS)}

        },
        {
            id: 3,
            iconName: "CareerSkiilMapIcon",
            title: "Growth & Career \n         events",
            // goTo:()=>{navigation.navigate(URL_SKILL_CAREER_MATCH)}
            goTo:()=>{}

        },
        {
            id: 4,
            iconName: "JobIcon",
            title: "Jobs",
            // goTo:()=>{navigation.navigate(URL_JOB)}
            goTo:()=>{}

        },
    ]

    return (
        <View>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={cardList}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <View style={{ alignItems: 'center',  }}>

                        <TouchableOpacity 
                        onPress={item.goTo}
                        style={{
                            // flexDirection: 'row',
                            marginHorizontal: scale(14),
                            alignItems: 'center',
                            backgroundColor: colors.primary,
                            borderRadius: scale(8),
                            maxWidth: scale(50),
                            maxHeight: scale(50),
                            minWidth: scale(50),
                            minHeight: scale(50),

                            justifyContent: 'center',
                        


                        }} key={item.id}>

                            <View>
                                <IconGenerator tagName={item.iconName} />
                            </View>



                        </TouchableOpacity>

                        <View>
                            <Text style={{
                                marginVertical: scale(10),
                                fontFamily: appFonts.Medium.fontFamily,
                                color: "#000000",
                                fontSize:scale(12)
                            }}>{item.title}</Text>
                        </View>

                    </View>

                )}
            />


        </View>
    )

}

export default MapList;