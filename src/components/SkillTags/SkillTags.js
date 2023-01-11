import React, { useState, useEffect } from 'react';
import { View, Text, Image, } from 'react-native';
import Header from '../shared/HeaderNav/Header';
import RightHeader from '../shared/HeaderNav/RightHeader';
import HeaderAvatar from '../shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import { URL_PROFILE, URL_VOICE_CAPTURE, URL_INDUSTRY_TAGS, URL_ADD_EXISTING } from '../../constants/navigations';
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


const SkillTags = (props) => {
  console.log(props.route.params, "yesm");

  const { captureStrings, skills } = props.route.params
  console.log(skills, 'propsData');
  const navigation = useNavigation();

  const [skillTags, setSkillTags] = useState([])

  const [addSkills, setAddSkills] = useState([])
  const [addSkillsColor, setAddSkillsColor] = useState('')
  const [nSkills, setNSkills] = useState([])
  // console.log(skillTags, '...tag');

  const aiSkills = () => {
    let skillTags = []

    skills.map(() =>
      skillTags.push({ theSkills: skills, bgColor: 'yellow' })
    )


    console.log(skillTags, '..tags');



  }
const body ={
  skills_tags:nSkills.toString()
}

const {handleSkillsTags, error, isLoading, data, reset} = useSkillsTags(body)
  useEffect(() => {
    // skills.map((skill) =>
    // skillTags.push()
    //   setSkillTags([{ }])
    // )
    // setSkillTags(skills)

  }, [skills])




  const handleAddSkills = async (val) => {

    let formattedNSkills = nSkills.filter((item) => item != val)
    console.log(formattedNSkills, '...jol');
    nSkills.includes(val) ? setNSkills([...formattedNSkills]) : setNSkills([...nSkills, val])

  }
  console.log(nSkills, '...nskill');


const handleSubmit=async()=>{

  await asyncStorageService.setSkillsTg(body.skills_tags);
if(nSkills?.length<1){
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: 'Choose skills from the tags to proceed'
  });

  return
}

let res = await handleSkillsTags(body)

// console.log(data, "...industry");

}


  return (



    <View style={{ elevation: 10, backgroundColor: 'white', flex: 1, borderRadius: scale(20) }}>

      <View style={styles.headerText}>




        <Text style={styles.title}>Select skills tags</Text>
        <Text style={styles.caption}>Choose up to 5 skills from the tags below</Text>



      </View>

      <VerticalScroll bgColor={colors.white}>

        <View style={{ marginVertical: scale(20), flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: scale(10) }}>

          {(skills)?.map((skillTag, i) => {
            console.log(skillTag, 'yeh');
            // addSkills.find((addSkill)=>addSkill===skillTag?setAddSkillsColor('red'):{} );

            return <TouchableOpacity key={i} style={[styles.skillBox, { backgroundColor: nSkills.includes(skillTag) ? colors.primary : 'white' }]}>
              <TouchableOpacity onPress={() => handleAddSkills(skillTag)} style={{
                // backgroundColor: skillTag?.bgColor

              }}>

                <Text style={[styles.skill, { color: nSkills.includes(skillTag) ? 'white' : 'black' }]}>{skillTag}</Text>

              </TouchableOpacity>

            </TouchableOpacity>

          }
          )}

        </View>
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

export default SkillTags;
