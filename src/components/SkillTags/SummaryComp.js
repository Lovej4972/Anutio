import React, { useState, useEffect } from 'react';
import { View, Text, Image, } from 'react-native';
import Header from '../shared/HeaderNav/Header';
import RightHeader from '../shared/HeaderNav/RightHeader';
import HeaderAvatar from '../shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import { URL_PROFILE, URL_VOICE_CAPTURE, URL_INDUSTRY_TAGS } from '../../constants/navigations';
import colors from '../../constants/colors';
import asyncStorageService from '../../services/asyncStorageService';
import { appFonts, scale, scaleVertical } from '../../constants/scale';
import { useNavigation } from '@react-navigation/native';
import ActionButton from '../shared/Button/ActionButton';
import styles from './styles';
import BottomSheet from '../shared/BottomSheet';
import Input from '../shared/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import CaptureAchievementInput from './CaptureAchievementInput'
import Button from '../shared/Button';
import useSkillsTags from '../../hooks/captureAchievement/useSkillsTags';
import ToastMessage from '../shared/ToastMessage';
import Toast from 'react-native-toast-message';
import { URL_ADD_EXISTING } from '../../constants/navigations';


const SummaryComp = (props) => {
    let finishCaptureData = props.route.params;
    console.log(props.route.params, "ayesm");

   
   
    const navigation = useNavigation();
    const [skillTags, setSkillTags] = useState([])
    const [nSkills, setNSkills] = useState([])
    const [summaryData, setsummaryData] = useState({})

    const body = {
        skills_tags: nSkills.toString()
    }


const getSummary=async()=>{
    const dataSummary = props.route.params
   await setsummaryData(dataSummary)
    console.log(summaryData.summary_1, 'mpropsData');
}

useEffect(()=>{
    getSummary() 
})

    const { handleSkillsTags, error, isLoading, data, reset } = useSkillsTags(body)

    const handleAddSkills = async (val) => {

        let formattedNSkills = nSkills.filter((item) => item != val)
        console.log(formattedNSkills, '...jol');
        nSkills.includes(val) ? setNSkills([...formattedNSkills]) : setNSkills([...nSkills, val])

    }
    console.log(nSkills, '...nskill');

    const handleSubmit = async () => {
navigation.navigate(URL_ADD_EXISTING, {finishCapture: finishCaptureData})
        return

        await asyncStorageService.setSkillsTg(body.skills_tags);
        if (nSkills?.length < 1) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Choose skills from the tags to proceed'
            });

            return  
        }

        let res = await handleSkillsTags(body)
    }

    return (

        <View style={{ elevation: 10, backgroundColor: '#fff', flex: 1, borderRadius: scale(20) }}>

            <View style={styles.summaryHeader}>
<Text style={styles.summaryTextHeader}>Resumè Summary 1</Text>


<Text style={styles.summaryTextBody}>{summaryData?.summary_1}</Text>

<Text style={styles.summaryTextHeader}>Resumè Summary 2</Text>


<Text style={styles.summaryTextBody}>{summaryData?.summary_2?.replace(/['"]+/g, '')}</Text>

            </View>
            

            <VerticalScroll bgColor={colors.white}>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginBottom: 36,
                    flexGrow: 1,
                }}>

                    <Button
                        text={'Next'}
                        buttonStyle={styles.capture}
                        onPress={handleSubmit}
                        loading={isLoading}
                    />

                </View>
            </VerticalScroll>
        </View>

    );
};

export default SummaryComp;
