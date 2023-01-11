import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import colors from '../../constants/colors'
import { appFonts, scale, scaleVertical } from '../../constants/scale'
// import Header from '../shared/HeaderNav/Header'
import Header from '../shared/HeaderNav/Header';
import { useNavigation } from '@react-navigation/native';

import HeaderAvatar from '../shared/HeaderNav/HeaderAvatar'
import IconGenerator from '../shared/IconGenerator'
import Banner from '../shared/Banner'
import goalBanner from '../../assets/images/goalBanner.jpeg'
import styles from './styles'
import { MyGoals } from './MyGoals';
import Button from '../shared/Button';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import { URL_NEW_GOAL } from '../../constants/navigations';
import useGetGoal from '../../hooks/goal/useGetGoal';
import { useIsFocused } from '@react-navigation/native';

export const GoalType = ({ title, goalDate, status, iconName, goalStyle, addGoal, textStyle }) => {

    const navigation = useNavigation()
    console.log(goalStyle, 'stylse');
    return (

        <View style={[styles.cardView, goalStyle]}>


            <View style={{
                marginBottom: scale(10)
            }}>
                <IconGenerator tagName={iconName} tintColor={"white"}/>


            </View>
            {addGoal &&
                <Button
                    text={'Add Goals'}
                    buttonStyle={styles.btnGoal}
                    onPress={() => navigation.navigate(URL_NEW_GOAL)}

                />
            }
            <Text style={[styles.header, {color:textStyle } ]}>{title}</Text>
            <Text style={[styles.time,{color:textStyle }]}>{goalDate}</Text>
            <Text style={[styles.footerText,{color:textStyle }]}>{status}
            </Text>
        </View>
    )
}





export default function Goal() {
    // const goals = [
        // {
        //     id: 1,
        //     title: "Learn a new skill",
        //     description: "start a course on web development ",
        //     iconName: "",
        //     sideColor: colors.lightPurple

        // },
        // {
        //     id: 2,
        //     title: "Apply to 20 Jobs",
        //     description: "Apply to minimum of 20 jobs ",
        //     iconName: "",
        //     sideColor: colors.lightPink
        // },
        // {
        //     id: 3,
        //     title: "New Design",
        //     description: "start a course on web development ",
        //     deadLine: "Deadline     06 October 2022",
        //     iconName: "",
        //     sideColor: colors.black
        // },
    // ]
const isFocused = useIsFocused()
    const navigation = useNavigation();
    const [goals, setGoals]= useState([])
    console.log(goals, '...thegoals');

    const  {handleGetGoal, error, isLoading, data, reset}= useGetGoal()

const getUserGoal = async()=>{
await handleGetGoal()
setGoals(data)

// set
}
const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        {/* <Text style={styles.item}>No data found</Text>
     */}
     <ActivityIndicator color={colors.primary}/>
      </View>
    );
  };

    useEffect(() => {
    //   return () => {
        // effect
        getUserGoal()
    //   };
    }, [isFocused])

    const sideColors = ['colors.lightPink', 'colors.lightPurple', 'colors.orangeYellow']

    return (

        <View style={styles.container}>
            <View style={{ paddingHorizontal: scale(20), marginTop: scale(30) }}>
                <Header
                    leftIcon={'BackArrow'}
                    onLeftIconPress={() => navigation.goBack()}
                    title={'Goals'}
                    rightIcon={'Notification'}
                    iconColor={colors.black}
                />

            </View>
            <View>

            </View>
            <View style={styles.containerCard}>

                <Banner
                    bannerBackground={goalBanner}
                    title={"Setting Smart Goals"}
                    btnText={"Read more"}
                    btnStyle={styles.btnStyles}
                    body={"How to set goals and achieve them"}
                    onBtnPress={() => {}}

                />


            </View>

            <View style={styles.layout}>

                <VerticalScroll>

                    <View style={styles.card}>
                        <GoalType title={"Goals Achieved"} addGoal={true} goalDate={"Add your new goals \n here"}  goalStyle={styles.goalType1} />
                        <GoalType title={"Weekly Goals"} goalDate={"Sep 19 to Sep 25"} status={"Your weekly goals\n here"} iconName={"Clock"} goalStyle={styles.goalType2} textStyle={'white'} />

                    </View>

                    {/* <MyGoals goals={goals} goalTitle={"My Goals"}
select={true}

/> */}


                    <FlatList
                        vertical
                        showsHorizontalScrollIndicator={true}
                        ListEmptyComponent={myListEmpty}
                        data={data}
                        extraData={sideColors}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => (
                            <View key={index} style={[styles.leftBar, { borderLeftColor:`${sideColors[index]}`}]}>

                                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={styles.cardTitle}>
                                    {item?.title}
                                </Text>
                                <IconGenerator tagName={"Dot"}/>

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


                </VerticalScroll>
            </View>
        </View>

    )
}


