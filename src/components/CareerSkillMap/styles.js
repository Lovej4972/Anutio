import {StyleSheet, Platform} from 'react-native';
import colors from '../../constants/colors';
import {appFonts, height, scale, scaleVertical, width} from '../../constants/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaleVertical(20),
    backgroundColor: colors.primary,
  },


  culve: {
    height: scale(50),
    width: scale(80),
    alignItems: 'center',
    justifyContent: 'center',
  },

  layout: {
    flex: 1,
    backgroundColor: colors.background2,
    paddingTop: scaleVertical(20),
    borderTopRightRadius: scale(40),
    borderTopLeftRadius: scale(40),
    paddingHorizontal: scale(20),
  },

  text: {
    fontSize: appFonts.h5.fontSize,
    fontWeight: '400',
    // color: colors.secondary,
  },
 btnStyles:{

  btn:{
    backgroundColor:colors.white,
  },
  textColor: {
  color: "#000000"
  
  }
 },
 uploadInput:{
  // flex:1,
  // position:'absolute',
  // justifyContent:'flex-end',
  alignItems:'flex-end',
  marginVertical:scale(10),
  marginHorizontal:scale(10),
  // backgroundColor:'red',

  right:0
 },
 cardHeader:{
  justifyContent:'space-between',
  flexDirection:'row'
 },
 txtLeft:{
  color:colors.black, 
  fontFamily:appFonts.Medium.fontFamily,
  fontSize:scale(18)
 },
 
 txtRight:{
  color:colors.primaryFade, 
  fontFamily:appFonts.regularText.fontFamily,
  fontSize:scale(12)
 },

 cardDesign:{
marginVertical:scale(20), 
backgroundColor:colors.white,
padding:scale(20),
elevation:10,
borderRadius:scale(10),
marginHorizontal:scale(4)
 },
 headerTitle:{
flexDirection:'row',
justifyContent:'space-between',
// marginVertical:scale(10)
// paddingTop:scale(10)
 },
 cardTitle:{
color:colors.textDark,
fontFamily:appFonts.BoldText.fontFamily,
fontSize:scale(12)
 },
 seeAllcardTitle:{
  color:colors.textPrimary,
  fontFamily:appFonts.BoldText.fontFamily,
  fontSize:scale(12)
 },
 cardStatus:{
  fontSize:scale(12),
fontFamily:appFonts.regularText.fontFamily,


 },

 body1:{
  flexDirection:'row',
  paddingVertical:scale(12)

 },

 body1Title:{
  fontSize:scale(12),
  fontFamily:appFonts.regularText.fontFamily,
  paddingRight:scale(10)
 },

 body1Body:{
  fontSize:scale(12),
  fontFamily:appFonts.regularText.fontFamily,
 },
 section1:{
  borderBottomColor:colors.primaryLight,
  borderBottomWidth:scale(1),
  alignSelf: 'stretch',
  marginBottom:scale(10),
  marginHorizontal:scale(-20),
  flexWrap:'wrap'
 },
 moreIcon:{
  right:0,
  bottom:0,
  position: 'absolute',
 },
 seeAllTitle:{

 },
 txtLeftSeeAll:{
  color:colors.textDark, 
  fontFamily:appFonts.Medium.fontFamily,
  fontSize:scale(14)
 },

 seeAllCard:{
  marginVertical:scale(10), 
  padding:scale(20),
  elevation:10,
  borderRadius:scale(10),
  marginHorizontal:scale(4)
   },

   seeAllbody1:{
    // flexDirection:'row',
    paddingVertical:scale(12)
   },

   seeAllbody1Body:{
    fontSize:scale(12),
    paddingVertical:scale(5),
    fontFamily:appFonts.regularText.fontFamily,
   }
   

});
