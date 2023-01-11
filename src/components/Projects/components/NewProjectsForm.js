import React, { createRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import { scale, scaleVertical } from '../../../constants/scale';
import ToastMessage from '../../shared/ToastMessage';
import Toast from 'react-native-toast-message'

import styles from '../styles';
import useProfileUpdate from '../../../hooks/profile/useProfileUpdate';
import useGetUser from '../../../hooks/user/useGetUser';
import DatePicker from 'react-native-modern-datepicker';
import IconGenerator from '../../shared/IconGenerator';
import useCreateProjects from '../../../hooks/projects/useCreateProjetcs';
import DateTimePicker from '@react-native-community/datetimepicker';


const NewProjectsForm = props => {
  // const { data  } = useGetUser();
  // const userId = data?._id

  const countryRef = createRef();
  const stateRef = createRef();
  const goalsRef = createRef();
  const educationRef = createRef();
  const positionRef = createRef();
  const experienceRef = createRef();

  const [country, setCountry] = useState('');
  const [countryError, setCountryError] = useState('');
  const [projectDesc, setProjectDesc] = useState('');

  const [projectDescError, setProjectDescError] = useState('');
  const [projectNAme, setProjectName] = useState('');

  const [projectNameError, setProjectNAmeError] = useState('');
  const [state, setState] = useState('');
  const [stateError, setStateError] = useState('');
  const [goals, setGoals] = useState('');
  const [goalsError, setGoalsError] = useState('');
  const [education, setEducation] = useState('');
  const [educationError, setEducationError] = useState('');
  const [position, setPosition] = useState('');
  const [positionError, setPositionError] = useState('');
  const [experience, setExperience] = useState('');
  const [experienceError, setExperienceError] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [payload, setPayload] = useState({})
  const [show, setShow] = useState(false);
  const [dateStart, setDateStart] = useState(new Date(1598051730000));
  const [dateFinish, setDateFinish] = useState(new Date(1598051730000));

  const [mode, setMode] = useState('time');
  const [showStart, setShowStart]= useState(false)
  const {handleCreateProjects, error, isLoading, data, reset} = useCreateProjects();

console.log(payload, ...'payload');
  
  const onChangeStart = async (event, selectedDate) => {

    const currentDate = await selectedDate;
    await setDateStart(currentDate);

    setShow(false);

setPayload({...payload, date:{...payload?.date, start: `${dateStart?.getFullYear()}-${dateStart?.getMonth()}-${dateStart?.getDate()}`}})

  };


  const onChangeFinish = async (event, selectedDate) => {

    const currentDate = await selectedDate;
    await setDateFinish(currentDate);

    setShow(false);

setPayload({...payload, date:{...payload?.date,  finish: `${dateFinish?.getFullYear()}-${dateFinish?.getMonth()}-${dateFinish?.getDate()}`}})

  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(true);
    }
    setMode(currentMode);
  };

  const showDatepicker = (info) => {
    setShowStart(info)
    console.log("dd");
    showMode('date');
  };


  const handleSubmit = () => {
    if (!payload.name || !payload?.description || !payload?.date?.start || !payload?.date?.finish ) {

      // Toast({
      //   type: 'error',
      //   text1: 'Error',
      //   text2: 'Valid Email is required'
      // });
      ToastMessage({ type: "error", message: 'All the fields are required', autoHide: true })

      return;
    }
    handleCreateProjects(payload)
  
  };
const startDateHandler=()=>{
  showDatepicker()
}

const endDateHandler = ()=>{

}


  return (
    <View style={{ flex: 1, marginTop:scale(60) }}>
      {/* <ToastMessage
        message={error}
        type={'error'}
        autoHide={true}
        onClose={reset}
      /> */}
      <TouchableOpacity onPress={() => { }}>

      </TouchableOpacity>
      <View style={styles.inputLayout}>

        <Input
          ref={countryRef}
          editable
          maxLength={40}
          label="Project Name"
          autoCapitalize="none"
          name="name"
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => {
            if (projectNameRef && projectNameRef.current) {
              projectNameRef.current.focus();
            }
          }}
          value={payload?.name}
          onChangeText={text =>  setPayload({...payload, name:text })}
          blurOnSubmit={false}
          error={projectNameError} 
        />

      </View>

      {/* <DatePicker
      mode="calendar"
      onSelectedChange={date => setSelectedDate(date)}
    /> */}


      <View style={styles.dateContainer}>

        <View style={styles.date}>


          <View >

            <Text style={styles.start}> {payload?.date?.start || 'start'}</Text>

          </View>

          <TouchableOpacity onPress={()=>showDatepicker(true)}>
            <IconGenerator tagName={'CalenderSvg'} />

          </TouchableOpacity>


        </View>


        <View style={styles.date}>

          <Text style={styles.start}>  {payload?.date?.finish || 'Finish'}</Text>

          <TouchableOpacity onPress={()=>showDatepicker(false)}>
            <IconGenerator tagName={'CalenderSvg'} />

          </TouchableOpacity>


        </View>
      </View>


      <View style={styles.inputLayout}>
        <Input
          ref={positionRef}
          editable
          maxLength={40}
          label="Project Description"
          autoCapitalize="none"
          name="projectDescInput"
          returnKeyType="next"
          onSubmitEditing={() => {
            if (projectDescRef && projectDescRef.current) {
              projectDescRef.current.focus();
            }
          }}
          autoCorrect={false}
          value={payload?.description}
          onChangeText={text =>  setPayload({...payload, description:text })}
          blurOnSubmit={false}
          error={projectNameError}
          multiline={true}
          numberOfLines={4}
        />
      </View>
      {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={showStart?dateStart:dateFinish}
              mode={mode}
              is24Hour={true}
              onChange={showStart?onChangeStart:onChangeFinish}
            />
          )}



      {/* <View style={{ bottom: 0, position: 'absolute', width: '100%' }}> */}
        <Button
          text="Create Project"
          loading={isLoading}
          onPress={handleSubmit}
        />
      {/* </View> */}
    </View>
  );
};

export default NewProjectsForm;
