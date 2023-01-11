import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Header from '../shared/HeaderNav/Header';
import RightHeader from '../shared/HeaderNav/RightHeader';
import HeaderAvatar from '../shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import { URL_PROFILE, URL_VOICE_CAPTURE, URL_INDUSTRY_TAGS, URL_NEW_PROJECTS } from '../../constants/navigations';
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
// import { Checkbox } from 'react-native-paper'
import useGetProjects from '../../hooks/projects/useGetProjects';
import { useIsFocused } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import useFinalCaptureAchievement from '../../hooks/captureAchievement/useFinalCaptureAcievement';



const AddCaptureToExisting = (props) => {
    console.log(props?.route?.params, "afinishCapture");
    const finishCapture = props?.route?.params


    const isFocused = useIsFocused()
    const navigation = useNavigation();
    const [skillTags, setSkillTags] = useState([])
    const [nSkills, setNSkills] = useState([])
    const [summaryData, setsummaryData] = useState({})
    const [checked, setChecked] = React.useState({})
    // const [isSelected, setSelection] = useState(false);
    console.log(checked, "kolaa");

    const { handleGetProjects, isLoading, error, data, reset } = useGetProjects()
   const  {handleFinalCaptureAchievement, onload} =useFinalCaptureAchievement()


    console.log(data);
    const getUserProjects = () => {
        handleGetProjects()
    }


    useEffect(() => {
        getUserProjects()
    }, [isFocused])


    const handleAddSkills = async (val) => {

        let formattedNSkills = nSkills.filter((item) => item != val)
        console.log(formattedNSkills, '...jol');
        nSkills.includes(val) ? setNSkills([...formattedNSkills]) : setNSkills([...nSkills, val])

    }

    
    console.log(nSkills, '...nskill');

    const handleSubmit = async () => {

        // for(select in checked){
        //     console.log();
        // }
        let projectId = [];

        for (const [key, value] of Object.entries(checked)) {
            if (value) {
                projectId.push(key)
                // console.log(key, value);

            }
        }

        const body = {
            situation: finishCapture?.finishCapture?.userinput_1,
            task: finishCapture?.finishCapture?.userinput_2,
            achievements: finishCapture?.finishCapture?.userinput_3,
            results: finishCapture?.finishCapture?.userinput_4,
            skillTags: finishCapture?.finishCapture?.skills_tags?.replace(/(^"|"$)/g, '').split(","),
            industryTags: finishCapture?.finishCapture?.industry_tags?.split(","),
            resumeSummary: finishCapture?.finishCapture?.summary_2?.replace(/(^"|"$)/g, '').split(","),
            projects: projectId
        }

    

        console.log(body, '...babody');
      await  handleFinalCaptureAchievement(body);
// alert('dkdkk')
        // return


        // let res = await handleSkillsTags(body)
    }

    return (

        <View style={styles.container}>
            <View style={{padding: scale(20)}}>
        <Header
title={"Add to Existing Projects"}
leftIcon={'BackArrow'}
          onLeftIconPress={() => navigation.goBack()}
          iconColor={colors.white}
        />
        {/* <Text> Add to Existing Project</Text> */}
        
      </View>
            <View style={styles.layout}>
                <View style={{ elevation: 10, backgroundColor: '#fff', flex: 1, borderRadius: scale(20), padding: scale(20) }}>
                    <VerticalScroll bgColor={colors.white}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            marginBottom: 36,
                            flexGrow: 1,
                        }}>
                            {
                                data?.length > 0 ?
                                    <FlatList
                                        // horizontal={true}
                                        showsHorizontalScrollIndicator={true}
                                        data={data}
                                        keyExtractor={item => item.id}
                                        renderItem={({ item, index }) => (
                                            <View key={item._id} style={{ marginVertical: scale(10), marginHorizontal: scale(10) }}>
                                                <View style={styles.summaryHeader}>
                                                    {/* <Text style={styles.summaryTextHeader}> Resumè Summary 1</Text> */}
                                                    <View style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center'
                                                    }}>
                                                        <Text style={[styles.projectList]}> {item?.name}
                                                        </Text>
                                                        <CheckBox
                                                            style={{
                                                                borderRadius: 20
                                                            }}
                                                            // onCheckColor={'red'}

                                                            tintColors={{ true: '#000', false: '#5A5A5A' }}
                                                            disabled={false}
                                                            value={checked[item._id]}
                                                            onValueChange={(newValue) => {

                                                                setChecked({ ...checked, [item._id]: newValue })
                                                                console.log(newValue);
                                                            }}
                                                        />
                                                    </View>
                                                </View>

                                            </View>
                                        )}
                                    /> :
                                    <View>


                                        <Text style={{
                                            fontFamily: appFonts.regularText.fontFamily,
                                            alignSelf: 'center'
                                        }}> No Project Yet</Text>

                                        <Button
                                            capture={true}
                                            text={'Create New Project'}
                                            buttonStyle={styles.capture}
                                            onPress={() => navigation.navigate(URL_NEW_PROJECTS)}
                                            loading={isLoading}

                                        />
                                    </View>
                            }
                         

                        </View>
                    </VerticalScroll>
                    

                                <Button
                                style={{
                                    position: 'absolute',
                                    bottom:0,
                                    justifyContent:'center',
                                    alignItems:'center'
                                    // left:0,
                                }}
                                    text={'Save Achievement'}
                                    buttonStyle={styles.capture}
                                    onPress={handleSubmit}
                                    loading={onload}
                                />
                </View>
            </View>

        </View>




    );
};

export default AddCaptureToExisting;
