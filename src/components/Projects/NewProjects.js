import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import Header from '../shared/HeaderNav/Header';
// import HeaderAvatar from '../shared/HeaderNav/HeaderAvatar';
// import VerticalScroll from '../shared/scroll/VerticalScroll';
// import Ellipse from '../../assets/images/Ellipse.png';
// import { URL_TAB } from '../../constants/navigations';
// import Button from '../shared/Button';
import colors from '../../constants/colors';
import styles from './styles';
import { scale } from '../../constants/scale';
// import { appFonts, scale, scaleVertical } from '../../constants/scale';
import { useNavigation } from '@react-navigation/native';
// import Banner from '../shared/Banner'
// import skillMapBanner from '../../assets/images/skillMapBanner.png'

// import ProfileForm from './component/ProfileForm';
// import styles from './styles';
// import UploadInput from '../shared/UploadInput/uploadInput';
// import Input from '../shared/Input';
// import SearchInput from '../shared/SearchInput/searchInput';
// import IconGenerator from '../shared/IconGenerator';
// import { color } from 'react-native-reanimated';
// import TopMatch from './TopMatchCard';

import { cardStyles } from '../../constants/scale';
import ProjectCard from './components/ProjectCard';
import NewProjectsForm from './components/NewProjectsForm';
export default function NewProjects() {
    const navigation = useNavigation()




    const progress = [
        {
            id: 1,
            title: 'Gather resource materials',
            checked: true,
            color: colors.green,
            percentage: 1
        },


    ]

    return (


        <View style={styles.container}>

            <View style={{ paddingHorizontal: 20 }}>

                <Header
                    leftIcon={'BackArrow'}
                    onLeftIconPress={() => navigation.goBack()}
                    title={'Career'}
                    rightIcon={'Notification'}
                    iconColor={colors.white}
                />
                <View style={{
                    height: scale(50),
                    width: scale(80),
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                </View>






            </View>



            <View style={styles.layout}>
{/* 
                <View style={styles.header}>

                    <Text style={styles.headerTxt}> Track your projects here</Text>

                    <Text style={styles.headerTxtRight}> Create New </Text>
                </View> */}

<NewProjectsForm/>



           

            </View>









        </View>
    )
}

