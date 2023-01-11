import React, { useState, useEffect } from 'react';
import { View, Text, Image, } from 'react-native';
import Header from '../shared/HeaderNav/Header';
import RightHeader from '../shared/HeaderNav/RightHeader';
import HeaderAvatar from '../shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import { URL_INDUSTRY_TAGS, URL_PROFILE, URL_VOICE_CAPTURE } from '../../constants/navigations';
import colors from '../../constants/colors';
import asyncStorageService from '../../services/asyncStorageService';
import { appFonts, scale, scaleVertical } from '../../constants/scale';
import { useNavigation } from '@react-navigation/native';
import ActionButton from '../shared/Button/ActionButton';
import styles from './styles';
import BottomSheet from '../shared/BottomSheet';
import Input from '../shared/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useIndustryTags from '../../hooks/captureAchievement/useIndustryTags';
// import CaptureAchievementInput from './CaptureAchievementInput'
import Button from '../shared/Button';
const IndustryTags = (props) => {
  const navigation = useNavigation();
  console.log(props.route.params,'....params')
  // console.log(industry_tags, "from industry... ");

  // const { IndustryStrings, IndustryTags } = props.route.params

// console.log(IndustryStrings,'kolk');

const [skillsStoreData, setSkillsStoreData] = useState("")
const industryStrings = props.route?.params?.industryTags
const [captureData, setCaptureData] = useState({});
console.log(industryStrings, 'lola');

  const [nIndustry, setNIndustry] = useState([])


  const SkillsData  = asyncStorageService.getSkillsTg()

useEffect(()=>{
  capturefromStore()
  captureDataFromStore()
},[])


  const [skillTags, setSkillTags] = useState([
    {
      id: 1,
      name: "Finance"
    },
    {
      id: 2,
      name: "Construction"
    },
    {
      id: 3,
      name: "Retail"
    },
    {
      id: 4,
      name: "Real Estate"
    },
    {
      id: 5,
      name: "Information Technology"
    },
    {
      id: 6,
      name: "Marketing"
    },
    {
      id: 7,
      name: "Software Development"
    },
    {
      id: 8,
      name: "Manufacturing"
    },
    {
      id: 9,
      name: "Consulting"
    },
    {
      id: 10,
      name: "Engineering"
    },
    {
      id: 11,
      name: "Advertising"
    },
    {
      id: 12,
      name: "Energy"
    },
    {
      id: 13,
      name: "Health Care"
    },
    {
      id: 14,
      name: "Team Work"
    },
    {
      id: 15,
      name: "Accounting"
    },
  
  ])



  

// console.log( SkillsData, '.....skd');
  
const capturefromStore = async()=>{
  const captureData=  await asyncStorageService.getSkillsTg();
  // const ncaptureData =  JSON.stringify(captureData)
  setSkillsStoreData(captureData)
  console.log(captureData, "...skillTg");
  // console.log(props,"my props");
}
const captureDataFromStore = async()=>{

  const capturStoreeData=  await asyncStorageService.getCapture();

let ncaptureData = JSON.parse(capturStoreeData)

  await setCaptureData(ncaptureData)
  console.log(captureData, '...mdata');


}


  const handleAddIndustry = async (val) => {

    let formattedNIndustry = nIndustry.filter((item) => item != val)
    console.log(formattedNIndustry, '...jol');

  nIndustry.includes(val) ? setNIndustry([...formattedNIndustry]) : setNIndustry([...nIndustry, val])



  }
  console.log(nIndustry, '...nskill');
  const body = {
    userinput_1: captureData?.header_1,
    userinput_2:captureData?.header_2 ,
    userinput_3: captureData?.header_3,
    userinput_4: captureData?.header_4,
    skills_tags: skillsStoreData,
    industry_tags: nIndustry?.toString()
  }

  const {summaryDataTags, error, isLoading, data, reset} = useIndustryTags(body)

console.log(data, 'jsummaryData');


const handleSubmit=async()=>{

  console.log(body, '....gthis is body');
  
if(nIndustry?.length<1){
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: 'Choose Industry tags to proceed'
  });

  return
}


let res = await summaryDataTags(body)

console.log(res, "....hindustry");

}

  return (



    <View style={{ elevation: 10, backgroundColor: 'white', flex: 1, borderRadius: scale(20) }}>

      <View style={styles.headerText}>

        <Text style={styles.title}>Select Industry tags</Text>
        <Text style={styles.caption}>Select up to 3 industries from the tags below </Text>

      </View>

      <VerticalScroll bgColor={colors.white}>

        <View style={{ marginVertical: scale(20), flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: scale(10) }}>

          {industryStrings?.map((skillTag, i) => <TouchableOpacity key={i} onPress={() => handleAddIndustry(skillTag)}  style={[styles.skillBox, { backgroundColor: nIndustry.includes(skillTag) ? colors.primary : 'white' }]}>

            <Text  style={[styles.skill, { color: nIndustry.includes(skillTag) ? 'white' : 'black' }]} > {skillTag}</Text>

          </TouchableOpacity>
          )}


        </View>
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 36,
          flexGrow: 1,
        }}>
          <Button
            text={'Save'}
            buttonStyle={styles.capture}
            onPress={handleSubmit}
            loading={isLoading}

          />

        </View>


      </VerticalScroll>
    </View>






  );
};

export default IndustryTags;
