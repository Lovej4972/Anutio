import React, { useRef } from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../../../constants/colors";
import { appFonts, scale, scaleVertical } from "../../../constants/scale";
// import TipInfo from "../../Tip";
import styles from "../styles";
import IconGenerator from "../../shared/IconGenerator";
export default function BottomSheet({ closeRBSheet, openSheet }) {
    const refRBSheet = useRef();

const sheetOpen = ()=>{

    refRBSheet?.current?.open()
}
const sOpen = ()=>{
    openSheet &&sheetOpen()

}
sOpen()
  return (
    <View
      style={{

      }}
    >
      {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} /> */}
      <TouchableOpacity onPress={sheetOpen}>

        {/* <IconGenerator tagName={'InfoSvg'} /> */}

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
            backgroundColor: colors.primary,
            borderTopRightRadius: scaleVertical(50) * 8,
            borderBottomRightRadius: scaleVertical(50) ,
            borderBottomLeftRadius: scaleVertical(50) ,



            height: scaleVertical(50) * 6,
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

        {/* <TipInfo /> */}
        {/* <YourOwnComponent /> */}
      </RBSheet>
    </View>
  );
}