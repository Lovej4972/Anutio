import React, { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import { useSelector } from "react-redux";
import colors from "../constants/colors";
import { URL_LOGIN } from "../constants/navigations";
import { useNavigation } from "@react-navigation/native";
import { appFonts, scale } from "../constants/scale";


const slides = [
  {
    key: 1,
    title: "Capture Achievements",
    text: 'Never forget your career achievements. Keep track of all your achievements on-the-go and in one place',
    image: require("../assets/images/intro1.png"),
    backgroundColor: "#59b2ab",
  },

  {
    key: 2,
    title: "Career Mapping",
    text: 'Using our built-in AI, discover which lucrative career paths are compatible with the skills you’ve developed overtime',
    image: require("../assets/images/intro2.png"),

    // backgroundColor: '#febe29',
  },

  {
    key: 3,
    title: "Get Help",
    text: 'Get expert support to achieve your career goals with our seasoned coaches and mentors',
    image: require("../assets/images/intro3.png"),

    // backgroundColor: '#22bcb5',
  },

  // {
  //   key: 4,
  //   title: "Screenclass",
  //   // text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
  //   image: require("../../assets/images/6.png"),
  //   // backgroundColor: '#22bcb5',
  // },


];

let pSlide = 0;
export default function IntroSlider({  }) {
const navigation = useNavigation()
  let screenWidth = Dimensions.get("window").width;
  let screenHeight = Dimensions.get("window").height;
  const [showRealApp, setshowRealApp] = React.useState(false);
  const [index, setIndex] = React.useState({ num: 0 });
  // const [pSlide, setPSlide] = React.useState(0);
  // const logIn = useSelector((s) => s.user.loggedIn);
  const theSlider = useRef();


  //automatically slide

  useEffect(() => {
    AsyncStorage.getItem("first_time").then((value) => {
      setshowRealApp(!!value);
    });
    const autoSlide = setInterval(() => {
      if (pSlide < slides.length - 1) {
        // setPSlide(pSlide + 1);
        pSlide = pSlide + 1;
        // console.log("pSlide", pSlide);
        theSlider?.current?.goToSlide(pSlide);
      } else {
        clearInterval(autoSlide);
      }
    }, 3000);
    return () => {
      clearInterval(autoSlide);
    };
  }, []);

  const _renderItem = ({ item }) => {
  
      return (
        <View
          style={{ height: screenHeight, flex: 1, backgroundColor: colors.white, justifyContent:'center',alignItems:'center' }}
        >
          <Image
            source={item.image}
            style={{ width: screenHeight/3, height: screenHeight / 3}}
          />
          <View style={{
            marginHorizontal:scale(10),
            justifyContent:'center',
            alignItems:'center'
          }}>

          <Text style={{
    fontSize:scale(24),
    fontFamily:appFonts.BoldText.fontFamily,
    color:colors.textDark,
    paddingVertical:scale(20)
  }}>  {item.title}</Text>
  <Text style={{
    fontSize:scale(14),
    fontFamily:appFonts.regularText.fontFamily,
    color:colors.textDark,
    paddingHorizontal:scale(20),
    textAlign:'center'
  }}> {item.text}</Text>

          </View>


        </View>
      );
    
  };

  const _onDone = () => {
    AsyncStorage.setItem("first_time", "true").then(() => {
      setshowRealApp(true);
    //   navigation.replace(URL_LOGIN);
    });
  };
  const _onDonesignup = () => {
    navigation.navigate("signup", { screen: "signup" });
  };

  const _renderSkipButton =()=>{
    return (
        <View style={styles.buttonCircle}>
          {/* <MaterialCommunityIcons name="arrow-right" color={"#fff"} size={40} /> */}
          <Text
          style={{
            fontSize:scale(14),
            fontFamily:appFonts.regularText.fontFamily,
            color:colors.black
        }}
          > Skip</Text>
        </View>
      );
  }

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        {/* <MaterialCommunityIcons name="arrow-right" color={"#fff"} size={40} /> */}
        <Text style={{
            fontSize:scale(14),
            fontFamily:appFonts.regularText.fontFamily,
            color:colors.black

        }}> Next</Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text
        style={{
            fontSize:scale(14),
            fontFamily:appFonts.regularText.fontFamily,
            color:colors.black

        }}
        > Done</Text>
    
      </View>
    );
  };

  if (showRealApp) {
    navigation.replace(URL_LOGIN)
    return (<></>)
    // return <AuthStack />;
  } else {
    return (
      <AppIntroSlider
        keyExtractor={(item, index) => index.toString()}
        data={slides}
        renderItem={_renderItem}
        onDone={_onDone}
        showSkipButton={true}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        dotStyle={{ backgroundColor: "#bababa" }}
        activeDotStyle={{ backgroundColor: "#26abff" }}
        skipButtonStyle= {{color:'yellow'}}
        ref={theSlider}
        renderSkipButton={_renderSkipButton}
        // style={{
        //     color:colors.red
        // }}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //   alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  backgroundc: {
    // position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "50%",
  },
  slide: {
    // flex: 1,
    justifyContent: "center",
    // height:screenHeight
  },
});
