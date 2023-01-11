import React, {createRef,useRef, useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../shared/HeaderNav/Header';
import RightHeader from '../shared/HeaderNav/RightHeader';
import HeaderAvatar from '../shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import {URL_PROFILE, URL_CAPTURE, URL_VOICE_CAPTURE,URL_SKILL_TAGS} from '../../constants/navigations';
import colors from '../../constants/colors';
import asyncStorageService from '../../services/asyncStorageService';
import {appFonts, scale, scaleVertical} from '../../constants/scale';
import {useNavigation} from '@react-navigation/native';
import ActionButton from '../shared/Button/ActionButton';
import styles from './styles';
import BottomSheet from '../shared/BottomSheet';
import AchievementInput from '../shared/AchievementInput';
import Button from '../shared/Button';
import useGetUser from '../../hooks/user/useGetUser';
import useCaptureAchievement from '../../hooks/captureAchievement/useCaptureAcheivement';
import { useIsFocused } from '@react-navigation/native';

import ToastMessage from '../shared/ToastMessage';
const CaptureAchievementInput = (props) => {
  const isFocused = useIsFocused()
  // console.log(props?.route?.params, 'bcaptureParams');
  // const CaptureData = props?.route?.params
const captureData = props?.route?.params?.captureData
console.log(captureData?.achievements, '.a.............');
  // const {data} = useGetUser();
  // const userId = dataa?._id
  // const {handleCaptureAchievement, isLoading, error, reset} = useCaptureAchievement();

  const navigation = useNavigation()
  const situationRef = createRef();
  const taskRef = createRef();
  const achievementsRef = createRef();
  const resultsRef = createRef();
console.log(sCaptureData, '...yoData');



const setParam=async()=>{
  // sCaptureData
  const dataCapture = await props?.route?.params
  if(dataCapture){
    const dataParams = dataCapture?.captureData
    setSituation(dataParams?.situation)
    setAcheivement(dataParams?.achievements)
    setTask(dataParams?.task)
    setResults(dataParams?.results)
  }
 return

}

  useEffect(() => {
  setParam()
  }, [isFocused])
  const [situation, setSituation] = useState(captureData?.situation||'');
  const [situationError, setSituationError] = useState('');
  const [sCaptureData, setScaptureData] = useState({});

  const [task, setTask] = useState(captureData?.task||'');
  const [taskError, setTaskError] = useState('');

  const [acheivement, setAcheivement] = useState(captureData?.achievements||'');
  const [acheivementError, setAcheivementError] = useState('');

  const [results, setResults] = useState(captureData?.achievements||'');
  const [resultsError, setResultsError] = useState('');
  // if(CaptureData){
  //   setScaptureData(CaptureData)
  // }
  const achievementData = {
    header_1:situation,
    header_2: task,
    header_3: acheivement,
    header_4: results,
  }

  const {handleCaptureAchievement, data,  isLoading, error} = useCaptureAchievement(achievementData);

const handleSubmit= async()=>{

  if (!situation || !task || !acheivement || !results) {

    // Toast.show({
    //   type: 'error',
    //   text1: 'Error',
    //   text2: 'Fill in all the fields'
    // });

    ToastMessage({ type: "error", message: 'Fill in all the fields', autoHide: true })
    return;
  }
  
  // const achievementData = {
  //   header_1:situation,
  //   header_2: task,
  //   header_3: acheivement,
  //   header_4: results,
  // }

  // console.log("data from capture screen", achievementData);
  await asyncStorageService.setCapture(achievementData);
let res = await handleCaptureAchievement(achievementData)
console.log("vov", data, res, handleCaptureAchievement);
  // navigation.navigate(URL_SKILL_TAGS, achievementData )

}


  const handleTextChange = (name, value) => {
 

    if (name === 'situation') {
      setSituation(value);
      setSituationError("")
    }

    if (name === 'task') {
      setTask(value);
      setTaskError("")
    }

    if(name === "achievement"){
      setAcheivement(value)
      setAcheivementError("")
    }
    if(name==="results"){
      setResults(value)
      setResultsError("")
    }

  };

return(
    <View style={{marginVertical:scale(40)}}>

    <AchievementInput
          // ref={situationRef}
          editable
          maxLength={40}
          label="What was the situation?"
          autoCapitalize="none"
          name="situationInput"
          icon={'User'}
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => {
            if (taskRef && taskRef.current) {
              taskRef.current.focus();
            }
          }}
          // autoCompleteType="email"
          placeholder="Start typing"
          value={sCaptureData?.captureData?.situation||situation}
          onChangeText={text => handleTextChange('situation', text)}
          blurOnSubmit={false}
          
    
    />

<AchievementInput
    ref={taskRef}
          editable
          maxLength={40}
          label="Describe the task?"
          autoCapitalize="none"
          name="taskInput"
          icon={'User'}
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => {
            if (achievementsRef && achievementsRef.current) {
              achievementsRef.current.focus();
            }
          }}
          // autoCompleteType="email"
          placeholder="Start typing"
          value={sCaptureData?.captureData?.task||task}
          onChangeText={text => handleTextChange('task', text)}
          blurOnSubmit={false}
    
    />
    <AchievementInput
    ref={achievementsRef}
          editable
          maxLength={40}
          label="What were the achievements?"
          autoCapitalize="none"
          name="achievementInput"
          icon={'User'}
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => {
            if (resultsRef && resultsRef.current) {
              resultsRef.current.focus();
            }
          }}
          // autoCompleteType="email"
          placeholder="Start typing"
          value={acheivement}
          onChangeText={text => handleTextChange('achievement', text)}
          blurOnSubmit={false}
    />



    <AchievementInput
        ref={resultsRef}
          editable
          maxLength={40}
          label="What were the results?"
          autoCapitalize="none"
          name="resultInput"
          icon={'User'}
          returnKeyType="next"
          autoCorrect={false}
          autoCompleteType="email"
          placeholder="Start typing"
          value={sCaptureData?.captureData?.results||results}
          onChangeText={text => handleTextChange('results', text)}
          blurOnSubmit={false}
    
    />

<Button
                  text={'Next'}
                  buttonStyle={styles.capture}
                  loading={isLoading}
                  onPress={handleSubmit}
                />

    </View>

)

}
export default CaptureAchievementInput;