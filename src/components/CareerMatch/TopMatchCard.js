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
import Logo from '../../assets/images/Logo.png'
import {  Dialog, Portal, Provider, } from 'react-native-paper';
const TopMatch = ({ skillsData }) => {
    const navigation = useNavigation();
    const [toggle, setToggle] = useState(null);
    const [show, setShow] = useState(false)
    console.log(skillsData, '..llol');


    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);
  
    const hideDialog = () => setVisible(false);

    const openDropdown = (item) => {
        setShow(!show)
        setToggle(item.id)

        // Alert.alert(JSON.stringify(item))
        // console.log(item);
        // const nItem = JSON.stringify(item)

    }

    const DropDownComp = ({ data }) => {
        console.log("data", data);
        return (
            <View>
                <View style={styles.topMatchCardDesign}>
                    <View >
                        <View style={styles.section1}>
                        </View>
                        <View style={styles.headerTitle}>
                            <Text style={styles.seeAllcardTitle}>Projects that helped you build these skills  </Text>

                            {/* <Text style={[styles.cardStatus, { color: colors.error }]} >Achieved</Text> */}
                        </View>


                        <View style={styles.seeAllbody1}>

                            <Text style={styles.body1Title}>Project:</Text>
                            {data?.projects?.map((detail, id) =>


                                <View key={id}>
                                    <Text style={styles.seeAllbody1Body}>{detail}</Text>
                                </View>
                            )


                            }

                        </View>
                    </View>
                    <View style={styles.section1}>
                    </View>
                    <View style={styles.section2}>
                        <View style={styles.headerTitle}>
                            <Text style={styles.seeAllcardTitle}>These Trainings and courses got you the skills </Text>
                        </View>

                        <View style={styles.seeAllbody1}>

                            {/* <Text style={styles.body1Title}>Project:</Text> */}
                            {data?.trainings?.map((detail, id) =>


                                <View key={id}>
                                    <Text style={styles.seeAllbody1Body}>{detail}</Text>
                                </View>
                            )


                            }

                        </View>
                        <View style={styles.section1}>
                        </View>
                        {
                            data?.percentage > 50 &&
                            <Text style={styles.cardFooterText}>Your skills matched to this career is more than 50% we
                                encourage you to explore this job role. </Text>
                        }



                        <View style={styles.actionButton}>

                            {/* <View style={styles.btnApply}>
    <Button  text="Apply Now" />

    </View> */}

                            {/* <TouchableOpacity style={ styles.btn2}>
    <Text style={styles.btnText}> Opportunities</Text>
</TouchableOpacity> */}



                        </View>
                    </View>
                </View>

            </View>

        )

    }


    return (
     

        <View>

            <FlatList
                // horizontal
                showsHorizontalScrollIndicator={false}
                data={skillsData}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <View>
                        <View style={[styles.TopMatchSeeAllCard, { backgroundColor: "#ffffff" }]}>


                            <View style={styles.headerTitle}>

                                <Image source={Logo} style={styles.logoStyle} />

                                <View style={{
                                    marginTop:scale(8)
                                }}>
                                    <Text style={[styles.cardTitle, { textTransform: 'capitalize' }]}>{item?.title}</Text>
                                    <Text style={[styles.cardTitleBody]}></Text>


                                    <View style={styles.headerFooter}>
                                        <Text style={[styles.cardTitle]}></Text>
                                        <Text style={[styles.footerText, { textTransform: 'capitalize' }]}>Industry: {item?.industry}</Text>

                                    </View>

                                </View>
                                <View style={styles.percentageView}>
                                    <View style={styles.percentage}>

                                        <Text style={styles.percentageText}>{item?.percentage}%</Text>

                                    </View>
                                </View>


                                <TouchableOpacity onPress={

                                  showDialog

                                }

                                    style={styles.arrowIcon}>

                                    <Text style={[styles.footerText]}> Matched</Text>
                                    <IconGenerator tagName={"ArrowDown"} />

                                </TouchableOpacity>


                            </View>
                        </View>
                        {/* {
                            item.id === toggle &&

                                show ? */}


                        <DropDownComp data={item} />

                        <Portal
                        
                        >
          <Dialog
        style={{
            // height:'50%',
            backgroundColor:'white',

        }}
        // contentContainerStyle={{
        //     backgroundColor:'white',
        //     padding:20,
        //     width:'10%',
        //     flex: 1,
        //     height:100,

        //     alignItems: 'center',
        //     justifyContent: 'center'
        // }}
          visible={visible} onDismiss={hideDialog}>
            <Dialog.Title 
            style={{
                fontSize:scale(14),
                fontFamily:appFonts.BoldText.fontFamily
            }}
            >These skills/ Trainings made you a match for the role</Dialog.Title>
            <Dialog.Content>
{
    item?.matched[0]?.split(",").map((match, index)=>
    <View
    key={index}
    style={{
        borderBottomWidth:0.2,
        borderBottomColor:colors.primary,
        
        // borderWidth:0.2,
        marginVertical:scale(5),
        padding: scale(5),
    }} 
    >

<Text style={{
        fontFamily:appFonts.regularText.fontFamily,
    }}variant="bodyMedium">{match} </Text>
    </View> 
  
    
    )
}

            </Dialog.Content>
            <Dialog.Actions>
            </Dialog.Actions>
        
          </Dialog>
        </Portal>

                        {/* } */}
                    </View>
                )}
            />






        </View>
     

    )

}

export default TopMatch;