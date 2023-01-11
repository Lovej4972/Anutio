import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Alert, ActivityIndicator } from 'react-native';
import Header from '../shared/HeaderNav/Header';
// import HeaderAvatar from '../shared/HeaderNav/HeaderAvatar';
// import VerticalScroll from '../shared/scroll/VerticalScroll';
// import Ellipse from '../../assets/images/Ellipse.png';
import { URL_TAB, URL_NEW_PROJECTS_STATUS } from '../../constants/navigations';
// import Button from '../shared/Button';
import colors from '../../constants/colors';
import styles from './styles';
import { appFonts, scale } from '../../constants/scale';
// import { appFonts, scale, scaleVertical } from '../../constants/scale';
import { useIsFocused, useNavigation } from '@react-navigation/native';
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
import { URL_NEW_PROJECTS } from '../../constants/navigations';
import useGetProjects from '../../hooks/projects/useGetProjects';

import { cardStyles } from '../../constants/scale';
import ProjectCard from './components/ProjectCard';
import VerticalScroll from '../shared/scroll/VerticalScroll';
export default function Projects() {
    const navigation = useNavigation()
    const isFocused = useIsFocused()

    const progressLoader = [
        {
            id: 1,
            title: 'Gather resource materials',
            checked: true,
            color: colors.green,
            percentage: 0.8
        },
        {
            id: 2,
            title: 'Sketch out Wireframes',
            checked: true,
            color: colors.green,
            percentage: 0.5
        },
        {
            id: 3,
            title: 'Design screen Mockups',
            checked: true,
            color: colors.green,
            percentage: 0.4
        }
    ]





    const { handleGetProjects, error, isLoading, data, reset } = useGetProjects()
    const getUserProjects = () => {

        handleGetProjects()
    }


    useEffect(() => {
        getUserProjects()
    }, [isFocused])

    const progress = [
        {
            id: 1,
            title: 'Gather resource materials',
            checked: true,
            color: colors.green,
            percentage: 1
        },


    ]
    const myListEmpty = () => {
        return (
            <View style={{ alignItems: "center" }}>
                {/* <Text style={styles.item}>No data found</Text>
     */}
                <ActivityIndicator color={colors.primary} />
            </View>
        );
    };


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
                <View style={styles.header}>

                    <Text style={styles.headerTxt}> Track your projects here</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(URL_NEW_PROJECTS)}>

                        <Text style={styles.headerTxtRight}> Create New </Text>

                    </TouchableOpacity>

                </View>


                <VerticalScroll>

                    <ProjectCard
                        title={data ? data[0]?.name : ""}
                        others={true}
                        caption={data ? data[0]?.description : ""}
                        status="Timeline"
                        sProg={data ? data[0]?.status : ""}
                        date={data ? `${new Date(data[0]?.date?.start).toDateString()} - ${new Date(data[0]?.date?.finish).toDateString()}` : ''}
                        style={styles.CardProjetcs}
                        progressLoader={progress}
                        icon={true} 
                        percentage={true}
                        progress={data ? data[0]?.progress : ""}
                        projId={data ? data[0]?._id : ""}
                        getProj={handleGetProjects}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: scale(10) }}>
                        <Text style={styles.headerTxt}> Others</Text>

                        <TouchableOpacity onPress={() => navigation.navigate(URL_NEW_PROJECTS_STATUS, {proData:data})}>
                            <Text style={styles.headerTxt2}> See All</Text>
                        </TouchableOpacity>


                    </View>
                    {
                        isLoading ? myListEmpty() : data?.length > 0 ?
                            <FlatList
                                vertical
                                showsHorizontalScrollIndicator={true}
                                ListEmptyComponent={myListEmpty}
                                data={data?.slice(1)}
                                // extraData={sideColors}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) => (
                                    <View
                                        key={index}

                                    >

                                        <ProjectCard
                                            title={item?.name}
                                            sProg={item?.status}

                                            caption={item?.description}
                                            others={true}
                                            style={styles.CardProjetcs}
                                            progressLoader={progress}
                                            progress={item?.progress}
                                            projId={item?._id}
                                            icon={true}
                                            date={`${new Date(item?.date?.start).toDateString()} - ${new Date(item?.date?.finish).toDateString()}`}

                                            getProj={handleGetProjects}


                                        />
                                    </View>

                                )}
                            /> : <Text style={{
                                padding: scale(10),
                                fontFamily: appFonts.regularText.fontFamily

                            }}> No Projects Yet, please create a new project </Text>


                    }





                </VerticalScroll>

            </View>









        </View>
    )
}

