import React, { useRef, useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../../../constants/colors";
import { appFonts, scale, scaleVertical } from "../../../constants/scale";
import TipInfo from "../../Tip";
import styles from "../styles";
// import IconGenerator from '../../IconGenerator'
import IconGenerator from "../../shared/IconGenerator";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import useProfileUpdate from "../../../hooks/profile/useProfileUpdate";
import ToastMessage from "../../shared/ToastMessage";
import useGetUser from "../../../hooks/user/useGetUser";
import { useNavigation } from "@react-navigation/native";
import {URL_LOGIN,URL_PROFILE_COMPLETION} from '../../../constants/navigations';
import apiService from "../../../services/apiService";
export default function Form({ refRBSheet }) {
  // const refRBSheet = useRef();
const navigation = useNavigation()
  const {data} = useGetUser();

  
  const userId = data?._id
  const ProfileEdited = data?.phone?.length
  const [fetchUser, setFetchUser] = useState(false)

// if(fetchUser){
//   data = useGetUser();

// }

  const [payload, setPayload] = useState({phone:data?.phone, fullName:data?.fullName, 
    state:data?.state, country:data?.country, interest:data?.interest, goals:data?.goals, funFact:data?.funFact})
console.log(payload);
const {handleProfileUpdate, isLoading, error, reset} = useProfileUpdate();

  const handleSubmit =async () => {

if(data?.state===""){

  ToastMessage({type:"error", message:'Please Edit Your Profile before Editing your Bio.', autoHide:true})
navigation.navigate(URL_PROFILE_COMPLETION)
return
}

    if (!payload.interest || !payload.goals || !payload.funFact) {

      // Toast.show({
      //   type: 'error',
      //   text1: 'Error',
      //   text2: 'Fill in all the fields'
      // });
      ToastMessage({type:"error", message:'Fill in all the fields', autoHide:true})
      return;
    }
   await handleProfileUpdate(payload);
   refRBSheet.current.close()
  //  data = useGetUser()
    // useGetUser()
    // apiService.getUserProfile()
  };
  return (
    <View
      style={{
padding:scale(20),
            minHeight: scale(45),
      }}
    >
        <View style={{flexDirection:'row', justifyContent:'space-between'}}> 
        <Text style={{color:colors.dartText, fontFamily:appFonts.regularText.appFonts}}> 
        Edit your Bio
        </Text>
        <TouchableOpacity onPress={()=>refRBSheet.current.close()} >
        <Text style={{backgroundColor:colors.lighterPrimary, borderRadius:scale(5), padding:scale(2), color:colors.primary,

fontFamily:appFonts.regularText.fontFamily
}}> Close</Text>
        </TouchableOpacity>

        </View>
     <TextInput
     value={payload?.interest}
     onChangeText={(text)=>
    setPayload({...payload, interest:text})
    }
     placeholder="My Interest"
placeholderTextColor={colors.BlackFade}
     
     style={[styles.inputStyle]}
     />


<TextInput
     placeholder="One goal I want to achieve"
     value={payload?.goals}
     onChangeText={(text)=>
    setPayload({...payload, goals:text})
    }
     style={[styles.inputStyle]}
     placeholderTextColor={colors.BlackFade}

     />
     <TextInput
     placeholder="One fun fact about me"
     value={payload?.funFact}

     onChangeText={(text)=>
      setPayload({...payload, funFact:text})
      }
     style={[styles.inputStyle]}
placeholderTextColor={colors.BlackFade}

     />


<View style={{marginTop: scaleVertical(50)}}>

        <Button
          text="Save"
          loading={isLoading}
          onPress={handleSubmit}
        />

</View>

    </View>
  );
}