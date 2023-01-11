import React, { useRef } from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../../../constants/colors";
import { appFonts, scale, scaleVertical } from "../../../constants/scale";
import TipInfo from "../../Tip";
import styles from "../styles";
// import IconGenerator from '../../IconGenerator'
import IconGenerator from "../../shared/IconGenerator";
import Input from "../../shared/Input";
import Form from "./Form";


export default function BottomSheet({ closeRBSheet }) {
  const refRBSheet = useRef();
  return (
    <View
      style={{

      }}
    >
      {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} /> */}
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
      <IconGenerator tagName={"Edit"}/>


      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          },
          container: {
            backgroundColor: colors.white,
            borderTopRightRadius: scaleVertical(50) ,
            borderTopLeftRadius: scaleVertical(50) ,


            height: scaleVertical(50) * 8,
            color: 'white'
          }
        }}
      >
        {/* <Text>djdjdj</Text> */}

        <TouchableOpacity
          onPress={() => refRBSheet.current.close()}
          style={styles.close}>
          <Text style={{
            color: '#ffffff',
            fontFamily: appFonts.Medium.fontFamily,
            fontSize: scale(12),
            textAlign: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center'
          }}>

            Close

          </Text>
        </TouchableOpacity>

     <Form refRBSheet={refRBSheet}/>
        {/* <YourOwnComponent /> */}
      </RBSheet>
    </View>
  );
}