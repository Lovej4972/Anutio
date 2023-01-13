import React, { createRef, useEffect, useState, useRef } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, Alert, ActivityIndicator } from 'react-native';
import Header from '../../components/shared/HeaderNav/Header';
import HeaderAvatar from '../../components/shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import { URL_TAB } from '../../constants/navigations';
import Button from '../shared/Button';
import colors from '../../constants/colors';
import { appFonts, scale, scaleVertical } from '../../constants/scale';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Banner from '../shared/Banner'
import skillMapBanner from '../../assets/images/skillMapBanner.png'
import RBSheet from "react-native-raw-bottom-sheet";
// import Button from '../shared/Button';



// import ProfileForm from './component/ProfileForm';
import { Checkbox } from 'react-native-paper';
import styles from './styles';
import UploadInput from '../shared/UploadInput/uploadInput';
import Input from '../shared/Input';
import SearchInput from '../shared/SearchInput/searchInput';
import IconGenerator from '../shared/IconGenerator';
import { color } from 'react-native-reanimated';
import { MyGoals } from '../Goals/MyGoals';
// import goalBanner from '../../assets/images/goalBanner.jpeg'
import goalBanner from '../../assets/images/banner.png'
import useGetGoal from '../../hooks/goal/useGetGoal';
import UntickSquare from '../../assets/svg/UntickSquare';


// import TopMatch from './TopMatchCard';



const AddCertificate = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const refRBSheet = useRef();
  const handleTextChange = (name, value) => {
    if (name === 'name') {
      setName(value);
      setNameError('');
    }


  };

  const navigation = useNavigation()
  const nameRef = createRef();

  const [open, setOpen] = useState(false)

  const isFocused = useIsFocused()
  // const navigation = useNavigation();
  const [goals, setGoals] = useState([])
  console.log(goals, '...thegoals');

  const { handleGetGoal, error, isLoading, data, reset } = useGetGoal()



  const sideColors = [colors.lightPink, colors.lightPurple, colors.orangeYellow]






  return (

    <View style={styles.container}>
      <View style={{ paddingHorizontal: scale(20) }}>
        <Header
          leftIcon={'Close'}
          onLeftIconPress={() => navigation.goBack()}
          title={'Add Certificates'}
          iconColor={colors.white}
        />


      </View>
      <View style={{
        borderTopRightRadius: scale(40),
        borderTopLeftRadius: scale(40),
        paddingHorizontal: scale(20),
        // zIndex: 1000,

        flex: 1
      }}>

      </View>


      <View style={{
        elevation: 2,
        flex: 1,
        backgroundColor: colors.background2,
        // paddingTop: scaleVertical(20),
        borderTopRightRadius: scale(40),
        borderTopLeftRadius: scale(40),
        paddingHorizontal: scale(20),
        marginTop: -500
      }}>

        <TouchableOpacity >

          <RBSheet

            height={scale(192) * 3}
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              container: {
                borderTopRightRadius: scale(40),
                borderTopLeftRadius: scale(40),
                backgroundColor: colors.background2
              },
              wrapper: {
                backgroundColor: 'rgba(0,0,0,0.7)'
              },
              draggableIcon: {
                backgroundColor: colors.background2
              }
            }}
          >
            <View style={{
              elevation: 2,
              flex: 1,
              backgroundColor: colors.background2,
              // paddingTop: scaleVertical(20),
              // borderTopRightRadius: scale(40),
              // borderTopLeftRadius: scale(40),
              paddingHorizontal: scale(20),
              // marginTop: -500
            }}>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                marginVertical: scale(15)
              }}>
                <Text style={{
                  // paddingTop: scale(80),
                  fontFamily: appFonts.Medium.fontFamily, color: colors.black,
                  fontSize: scale(16)
                }} >Edit Certificate
                </Text>
                <TouchableOpacity>
                  <Text style={{
                    paddingRight: scale(10),
                    fontFamily: appFonts.BoldText.fontFamily, color: colors.black,
                    fontSize: scale(19)
                  }} >+</Text>
                </TouchableOpacity>



              </View>

              <View style={styles.inputLayout}>
                <Input
                  ref={nameRef}
                  editable
                  maxLength={40}
                  label="Certificate Name"
                  autoCapitalize="none"
                  name="firstNamenput"
                  // icon={'User'}
                  returnKeyType="next"
                  autoCorrect={false}
                  onSubmitEditing={() => {
                    if (emailRef && emailRef.current) {
                      emailRef.current.focus();
                    }
                  }}
                  autoCompleteType="email"
                  placeholder="E.g Google Project Management Professional Certifi...."
                  value={name}
                  onChangeText={text => handleTextChange('name', text)}
                  blurOnSubmit={false}
                  error={nameError}
                />
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <View style={styles.inputLayout2}>
            <Input
              ref={nameRef}
              editable
              maxLength={40}
              label="Expiration Date"
              autoCapitalize="none"
              name="firstNamenput"
              icon={'ArrowDown'}
              returnKeyType="next"
              autoCorrect={false}
              onSubmitEditing={() => {
                if (emailRef && emailRef.current) {
                  emailRef.current.focus();
                }
              }}
              autoCompleteType="email"
              placeholder="Month"
              value={name}
              onChangeText={text => handleTextChange('name', text)}
              blurOnSubmit={false}
              error={nameError}
            />
          </View>

          <View style={styles.inputLayout2}>
            <Input
              ref={nameRef}
              editable
              maxLength={40}
              label=" "
              autoCapitalize="none"
              name="firstNamenput"
              icon={'ArrowDown'}
              returnKeyType="next"
              autoCorrect={false}
              onSubmitEditing={() => {
                if (emailRef && emailRef.current) {
                  emailRef.current.focus();
                }
              }}
              autoCompleteType="email"
              placeholder="Year"
              value={name}
              onChangeText={text => handleTextChange('name', text)}
              blurOnSubmit={false}
              error={nameError}
            />
          </View>
        </View>

              <View style={styles.inputLayout}>
                <Input
                  ref={nameRef}
                  editable
                  maxLength={40}
                  label="Issued By"
                  autoCapitalize="none"
                  name="firstNamenput"
                  // icon={'CalenderSvg'}
                  returnKeyType="next"
                  autoCorrect={false}
                  onSubmitEditing={() => {
                    if (emailRef && emailRef.current) {
                      emailRef.current.focus();
                    }
                  }}
                  autoCompleteType="email"
                  placeholder=" Name of Issueing Organisation"
                  value={name}
                  onChangeText={text => handleTextChange('name', text)}
                  blurOnSubmit={false}
                  error={nameError}
                />
              </View>
              <Button
                onPress={() => refRBSheet.current.open()}
                // style={{ borderRadius: 50 }}
                text={'Save'}
                buttonStyle={styles.capture}
              // loading={isLoading}
              // onPress={handleSubmit}
              />

              <TouchableOpacity
                onPress={() => refRBSheet.current.open()}
                style={{
                  borderRadius: scale(50),
                  height: scale(50), backgroundColor: colors.background2,elevation:2,alignItems:'center',justifyContent:'center'
                }}>
                  <Text style={{
                  // paddingTop: scale(80),
                  fontFamily: appFonts.BoldText.fontFamily, color:'red',
                  fontSize: scale(16)
                }}>Delete</Text>

                {/* buttonStyle={{}}
               loading={isLoading}
               onPress={handleSubmit}  */}
              </TouchableOpacity>
            </View>



          </RBSheet>


          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginVertical: scale(20) }}>


            <TouchableOpacity
              style={{ elevation: 2, backgroundColor: open ? colors.white : colors.primary, padding: scale(10), borderRadius: scale(20), paddingHorizontal: scale(20) }}>
              <Text style={{ color: open ? colors.primary : colors.white }}> Sync Linkedin</Text>
            </TouchableOpacity>

          </View>
        </TouchableOpacity>

        <View style={styles.inputLayout}>
          <Input
            ref={nameRef}
            editable
            maxLength={40}
            label="Certificate Name"
            autoCapitalize="none"
            name="firstNamenput"
            // icon={'User'}
            returnKeyType="next"
            autoCorrect={false}
            onSubmitEditing={() => {
              if (emailRef && emailRef.current) {
                emailRef.current.focus();
              }
            }}
            autoCompleteType="email"
            placeholder="E.g Google Project Management Professional Certifi..."
            value={name}
            onChangeText={text => handleTextChange('name', text)}
            blurOnSubmit={false}
            error={nameError}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <View style={styles.inputLayout2}>
            <Input
              ref={nameRef}
              editable
              maxLength={40}
              label="Expiration Date"
              autoCapitalize="none"
              name="firstNamenput"
              icon={'ArrowDown'}
              returnKeyType="next"
              autoCorrect={false}
              onSubmitEditing={() => {
                if (emailRef && emailRef.current) {
                  emailRef.current.focus();
                }
              }}
              autoCompleteType="email"
              placeholder="Month"
              value={name}
              onChangeText={text => handleTextChange('name', text)}
              blurOnSubmit={false}
              error={nameError}
            />
          </View>

          <View style={styles.inputLayout2}>
            <Input
              ref={nameRef}
              editable
              maxLength={40}
              label=" "
              autoCapitalize="none"
              name="firstNamenput"
              icon={'ArrowDown'}
              returnKeyType="next"
              autoCorrect={false}
              onSubmitEditing={() => {
                if (emailRef && emailRef.current) {
                  emailRef.current.focus();
                }
              }}
              autoCompleteType="email"
              placeholder="Year"
              value={name}
              onChangeText={text => handleTextChange('name', text)}
              blurOnSubmit={false}
              error={nameError}
            />
          </View>
        </View>

        <View style={styles.inputLayout}>
          {/* <Image
        style={{width:20,height:20}}
        source={require('../../assets/images/tick-square.png')}
      /> */}

        </View>




        <View style={styles.inputLayout}>
          <Input
            ref={nameRef}
            editable
            maxLength={40}
            label="Issued By"
            autoCapitalize="none"
            name="firstNamenput"
            // icon={'CalenderSvg'}
            returnKeyType="next"
            autoCorrect={false}
            onSubmitEditing={() => {
              if (emailRef && emailRef.current) {
                emailRef.current.focus();
              }
            }}
            autoCompleteType="email"
            placeholder="Name of issueing Organization"
            value={name}
            onChangeText={text => handleTextChange('name', text)}
            blurOnSubmit={false}
            error={nameError}
          />
        </View>

        <Button
          onPress={() => refRBSheet.current.open()}
          style={{ borderRadius: 50 }}
          text={'Save'}
        // buttonStyle={styles.capture}
        // loading={isLoading}
        // onPress={handleSubmit}
        />

        <VerticalScroll bgColor={colors.background2}>










        </VerticalScroll>
      </View>

    </View>
  )
}

export default AddCertificate;