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
import CSMapCard from './CSMapCard';
import { color } from 'react-native-reanimated';

const SeeAllCard = () => {
    const navigation = useNavigation();
    const [toggle, setToggle] = useState(null);
    const [show, setShow] = useState(false)

    const [skills, setskills] = useState([
        {
            id: 1,
            title: 'Administrative',
            details: {
                header1: "Administrative Projects ",
                body1: ["Product Management for P&G", "Technician Supervision at P&G"],
                header2: "Your skill came from this training",

                body2: ["Google Project Management - Cousera", "Technician Supervision at P&G"],
            }
        },
        {
            id: 2,
            title: 'Critical Thinking',
            details: {
                header1: "Critical Thinking Projects",
                body1: ["Product Management for P&G", "Technician Supervision at P&G"],
                header2: "Your skill came from this training",
                body2: ["Google Project Management - Cousera", "Technician Supervision at P&G"],
            }
        },
        {
            id: 3,
            title: 'Leadership',
            details: {
                header1: "Leadership Projects ",
                body1: ["Product Management for P&G", "Technician Supervision at P&G"],
                header2: "Your skill came from this training",
                body2: ["Google Project Management - Cousera", "Technician Supervision at P&G"],
            }
        },
        {
            id: 4,
            title: 'Microsoft excel',
            details: {
                header1: "Microsoft excel Projects ",
                body1: ["Product Management for P&G", "Technician Supervision at P&G"],
                header2: "Your skill came from this training",
                body2: ["Google Project Management - Cousera", "Technician Supervision at P&G"],
            }
        },
        {
            id: 5,
            title: 'Negotiation',
            details: {
                header1: "Negotiation Projects ",
                body1: ["Product Management for P&G", "Technician Supervision at P&G"],
                header2: "Your skill came from this training",
                body2: ["Google Project Management - Cousera", "Technician Supervision at P&G"],
            }
        },
        {
            id: 6,
            title: 'PM tools',
            details: {
                header1: " PM tools Projects ",
                body1: ["Product Management for P&G", "Technician Supervision at P&G"],
                header2: "Your skill came from this training",
                body2: ["Google Project Management - Cousera", "Technician Supervision at P&G"],
            }
        },
    ])


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
                <View style={styles.cardDesign}>
                    <View >
                        <View style={styles.headerTitle}>
                            <Text style={styles.seeAllcardTitle}>{data?.details?.header1}  </Text>

                            {/* <Text style={[styles.cardStatus, { color: colors.error }]} >Achieved</Text> */}
                        </View>
                        <View style={styles.seeAllbody1}>

                            {/* <Text style={styles.body1Title}>Project:</Text> */}
                            {data?.details?.body1?.map((detail, id) =>


                                <View key={id}>
                                    <Text style={styles.seeAllbody1Body}> {detail}</Text>
                                </View>
                            )


                            }

                        </View>
                    </View>
                    <View style={styles.section1}>
                    </View>
                    <View style={styles.section2}>
                        <View style={styles.headerTitle}>
                            <Text style={styles.seeAllcardTitle}> {data?.details.header2} </Text>
                        </View>

                        <View style={styles.seeAllbody1}>

                            {/* <Text style={styles.body1Title}>Project:</Text> */}
                            {data?.details?.body2?.map((detail, id) =>


                                <View key={id}>
                                    <Text style={styles.seeAllbody1Body}> {detail}</Text>
                                </View>
                            )


                            }

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
                data={skills}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <View>
                        <TouchableOpacity onPress={
                            
                            () => openDropdown(item)
                         
                            } style={[styles.seeAllCard, {backgroundColor:item.id===toggle &&show?colors.primary:"#ffffff"}]}>


                            <View style={styles.headerTitle}>
                                <Text style={[styles.cardTitle,{color:item.id===toggle &&show?colors.white:colors.textDark}]}>{item.title}</Text>

                                <IconGenerator tagName={show?"ArrowUp":"ArrowDown"} />
                            </View>
                        </TouchableOpacity>
                        {
                            item.id === toggle &&
                           
                           show?
                            <DropDownComp data={item}/>:null

                        }
                    </View>
                )}
            />






        </View>
    )

}

export default SeeAllCard;