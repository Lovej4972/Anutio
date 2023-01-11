import React, {useEffect} from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Header from '../shared/HeaderNav/Header';
import RightHeader from '../shared/HeaderNav/RightHeader';
import HeaderAvatar from '../shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import { URL_PROFILE, URL_VOICE_CAPTURE, URL_PROJECTS , URL_CAPTURE} from '../../constants/navigations';
import colors from '../../constants/colors';
import asyncStorageService from '../../services/asyncStorageService';
import { appFonts, scale, scaleVertical } from '../../constants/scale';
import { useNavigation } from '@react-navigation/native';
import ActionButton from '../shared/Button/ActionButton';
import styles from './styles';
import BottomSheet from '../shared/BottomSheet';
import Input from '../shared/Input';
import CaptureAchievementInput from './CaptureAchievementInput'
import useGetAllAchievements from '../../hooks/captureAchievement/useGetAllAchievements';
import Button from '../shared/Button';
import { useIsFocused } from '@react-navigation/native';
import IconGenerator from '../shared/IconGenerator';
import useGetSingleAchievements from '../../hooks/captureAchievement/useGetSingleAchievement';

const AllCaptureAchievement = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused()

  const {handleGetAllAchievements, error, isLoading, data, reset} = useGetAllAchievements()
  const {handleGetSingleAchievements, onLoad} = useGetSingleAchievements()
  const getAllCapture = async()=>{
   await handleGetAllAchievements()

  }

  
  useEffect(() => {
    getAllCapture()
  }, [isFocused])

  const handleEdit =(captureId)=>{
handleGetSingleAchievements(captureId)
  }
  return (
    <View style={styles.container}>
    <View style={{padding: scale(20)}}>
        <Header
        title="All Captured Achievements"
          leftIcon={'BackArrow'}
          onLeftIconPress={() => navigation.goBack()}
          iconColor={colors.white}
        />
        
      </View>
      <View style={styles.layout}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.capture}>My Captured Achievements </Text>
{
    onLoad &&
    <ActivityIndicator/>

}
          {/* <BottomSheet /> */}


        </View>

        <VerticalScroll bgColor={colors.background2}>

{/* <CaptureAchievementInput  imageIconPress={() => navigation.navigate(URL_VOICE_CAPTURE)}/> */}

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
                                                        <Text style={[styles.projectList,{fontSize:scale(14), fontFamily:appFonts.Medium.fontFamily}]}>{item?.achievements}
                                                        </Text>

                                                        <TouchableOpacity onPress={()=>handleEdit(item?._id)}>

                                                        <IconGenerator tagName={'Edit2'}/>

                                                        </TouchableOpacity>
                                                     
                                                    </View>
                                                </View>

                                            </View>
                                        )}
                                    /> :
                                    <View>


                                        <Text style={{
                                            fontFamily: appFonts.regularText.fontFamily,
                                            alignSelf: 'center'
                                        }}> No Achievements Captured Yet</Text>

                                        <Button
                                            capture={true}
                                            text={'Create New Project'}
                                            buttonStyle={styles.capture}
                                            onPress={() => navigation.navigate(URL_NEW_PROJECTS)}
                                            loading={isLoading}

                                        />
                                        
                                    </View>
                            }
                         

        </VerticalScroll>
        <TouchableOpacity
        onPress={()=>navigation.navigate(URL_CAPTURE)}
        
        style={{
            right:0,
            position:'absolute',
            bottom:0,
            // margin:scale(10)
        }}>
        <IconGenerator tagName={'AddCircle'}/>


        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AllCaptureAchievement;
