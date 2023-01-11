import React, { useState, useRef, createRef } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Alert, Platform } from 'react-native';
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
import { color, set } from 'react-native-reanimated';
import { MyGoals } from '../Goals/MyGoals';
import useCreateGoal from '../../hooks/goal/useCreateGoal';
import ToastMessage from '../shared/ToastMessage';
// import TopMatch from './TopMatchCard';
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomSheet from './components/bottomSheet';




const NewGoal = () => {
  const navigation = useNavigation()
  const [payload, setPayload] = useState("")
  const ref = createRef()

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dateValue, setDateValue] = useState("")
  const [openSheet, setOpenSheet] = useState(false)
  console.log(payload);

  const onChange = async (event, selectedDate) => {

    const currentDate = await selectedDate;
    await setDate(currentDate);

    setShow(false);

setPayload({...payload, deadline:`${date?.getFullYear()}-${date?.getMonth()}-${date?.getDate()}`})

  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(true);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    console.log("dd");
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };   // for


  const { handleCreateGoal, error, isLoading, data, reset,goalSuccess } = useCreateGoal()
  

  const handleSubmit = async() => {
    if (!payload.title || !payload.description || !payload.deadline || !payload.breakdown) {

      // Toast.show({
      //   type: 'error',
      //   text1: 'Error',
      //   text2: 'Fill in all the fields'
      // });

      ToastMessage({ type: "error", message: 'Fill in all the fields', autoHide: true })
      return;
    }



    const res =  await handleCreateGoal(payload);
// console.log(goalSuccess, '...goal');
 
    // console.log(data, '...res');

  };

  const goals = [
    {
      id: 1,
      title: "Goal Title",
      description: "start a course on web development ",
      iconName: "",
      name: 'title',
      sideColor: colors.lightPurple

    },
    {
      id: 2,
      title: "Goal Description",
      description: "Apply to minimum of 20 jobs ",
      iconName: "",
      name: "description",

      sideColor: colors.lightPink
    },
    {
      id: 3,
      title: "Deadline",
      description: "start a course on web development ",
      deadLine: "Deadline     06 October 2022",
      iconName: "",
      name: "deadline",
      sideColor: colors.orangeYellow
    },
    {
      id: 4,
      title: "Weekly Goals",
      description: "start a course on web development ",
      deadLine: "Deadline     06 October 2022",
      iconName: "",
      name: "",
      sideColor: colors.orangeYellow
    },
  ]
  return (

    <View style={styles.container}>
      <View style={{ paddingHorizontal: scale(20) }}>
        <Header
          leftIcon={'BackArrow'}
          onLeftIconPress={() => navigation.goBack()}
          title={'Career'}
          rightIcon={'Notification'}
          iconColor={colors.white}
        />

        <View style={styles.culve}>
        </View>
      </View>
      <View style={styles.layout}>
        <VerticalScroll bgColor={colors.background2}>
          <View style={{ marginVertical: scale(20) }}>
            <Text style={styles.goalCardTitle}>
              New Goals
            </Text>
            <Text style={styles.cardStatus}>
              Enter up to 3 of your quarterly goals here
            </Text>
          </View>

          <MyGoals
            ref={ref}
            goalTitle={"Goal Title"} onChangeText={(text) =>
              setPayload({ ...payload, title: text })}
            titleDescription={"Enter up to 3 of your quarterly goals here"} sideColor={colors.lightPurple}
            placeholder={"Enter Goal Title"}
          />
          <MyGoals
            ref={ref}

            goalTitle={"Goal Description"} sideColor={colors.lightPink}

            onChangeText={(text) =>
              setPayload({ ...payload, description: text })}
            placeholder={"Enter Description"}

          />

          <MyGoals
            select={true}
            onPress={showDatepicker}
            value={payload?.deadline}
            goalTitle={"Deadline"} sideColor={colors.orangeYellow}
            onChangeText={(text) =>
            setPayload({ ...payload, deadline: text })}
            placeholder={"Enter the deadline for your goals"}
          // disabled={false}
          />
          <MyGoals
            ref={ref}
            goalTitle={"Weekly Goals"} sideColor={colors.lightPink}
            onChangeText={(text) =>
              setPayload({ ...payload, breakdown: text })}
            placeholder={"Break your goals into weekly achievable bits"}

          />
          {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}

          {/* <PickDate/> */}

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
          {/* <Text>selected: {payload?.deadline}</Text> */}

          <Button
            text={'Save'}
            // buttonStyle={styles.capture}
            loading={isLoading}
            onPress={handleSubmit}
          />

        </VerticalScroll>
      {/* <BottomSheet openSheet={goalSuccess}/> */}

      </View>
    </View>
  )
}

export default NewGoal;