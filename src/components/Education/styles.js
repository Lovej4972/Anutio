import {StyleSheet, Platform} from 'react-native';
import colors from '../../constants/colors';
import {appFonts, height, scale, scaleVertical, width} from '../../constants/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaleVertical(20),
    backgroundColor: colors.primary,
  },

  inputLayout: {
    marginVertical: scaleVertical(5),
  },
  inputLayout2: {
    marginVertical: scaleVertical(5),
    width:scale(40)*3.7
  },
  culve: {
    height: scale(50),
    width: scale(80),
    alignItems: 'center',
    justifyContent: 'center',
  },

  layout: {
    elevation:2,
    flex: 1,
    backgroundColor: colors.background2,
    // paddingTop: scaleVertical(20),
    borderTopRightRadius: scale(40),
    borderTopLeftRadius: scale(40),
    paddingHorizontal: scale(20),
    marginTop:-350
  },
  cardTitle:{
    color:colors.textDark,
    fontFamily:appFonts.regularText.fontFamily,
    fontSize:scale(12),
    paddingBottom:scale(5)
     },
     leftBar:{
      // height:scaleVertical(65),
      padding:scale(20),
      borderRadius:scale(10),
      borderLeftWidth:scale(10),
      // height:scaleVertical(60),
      // backgroundColor:colors.lightPurple
      backgroundColor:colors.white,
      marginVertical:scale(10)
      // borderBottomWidth:10,
      
      },
      cardStatus:{
        fontSize:scale(12),
      fontFamily:appFonts.regularText.fontFamily,
      
      
       },
  flexCard:{
    backgroundColor:colors.white,
    padding:scale(10),
    width:scale(145),
    flexDirection:'row',
    // justifyContent:'center',
    alignItems:'center',
    // justifyContent:'space-between',
    borderRadius:scale(10)
  },
  jobText:{
    fontFamily:appFonts.Medium.fontFamily,
    fontSize:scale(14),
    paddingLeft:scale(5)
  },
  titleTxt:{
    paddingVertical:scale(20),
color:'black'

  },
  txt:{
fontFamily:appFonts.Medium.fontFamily,
fontSize:scale(16),
color:'black'
  },
  btnStyles:{

    btn:{
      backgroundColor:colors.white,
    },
    textColor: {
    color: "#000000"
    
    }
   },
//   text: {
//     fontSize: appFonts.h5.fontSize,
//     fontWeight: '400',
//     // color: colors.secondary,
//   },
//  btnStyles:{

//   btn:{
//     backgroundColor:"rgba(255, 255, 255, 0.5)",
//     // marginBottom:scale(10)
//   },
//   textColor: {
//   color: colors.white
  
//   }
//  },
//  uploadInput:{
//   // flex:1,
//   // position:'absolute',
//   // justifyContent:'flex-end',
//   alignItems:'flex-end',
//   marginVertical:scale(10),
//   marginHorizontal:scale(10),
//   // backgroundColor:'red',

//   right:0
//  },
//  cardHeader:{
//   justifyContent:'space-between',
//   flexDirection:'row'
//  },
  txtLeft:{
    color:colors.black, 
    fontFamily:appFonts.Medium.fontFamily,
    fontSize:scale(18)
  },
 
//  txtRight:{
//   color:colors.primaryFade, 
//   fontFamily:appFonts.regularText.fontFamily,
//   fontSize:scale(12)
//  },

//  cardDesign:{
// marginVertical:scale(20), 
// backgroundColor:colors.white,
// padding:scale(20),
// elevation:10,
// borderRadius:scale(10),
// marginHorizontal:scale(4)
//  },
//  headerTitle:{
// flexDirection:'row',
// justifyContent:'space-between',
// // marginVertical:scale(10)
// // paddingTop:scale(10)
//  },
//  cardTitle:{
// color:colors.textDark,
// fontFamily:appFonts.BoldText.fontFamily,
// fontSize:scale(12),
// paddingBottom:scale(5)
//  },
//  seeAllcardTitle:{
//   color:colors.textPrimary,
//   fontFamily:appFonts.BoldText.fontFamily,
//   fontSize:scale(12)
//  },
//  cardStatus:{
//   fontSize:scale(12),
// fontFamily:appFonts.regularText.fontFamily,


//  },

//  body1:{
//   flexDirection:'row',
//   paddingVertical:scale(12)

//  },

//  body1Title:{
//   fontSize:scale(12),
//   fontFamily:appFonts.regularText.fontFamily,
//   paddingRight:scale(10)
//  },

//  body1Body:{
//   fontSize:scale(12),
//   fontFamily:appFonts.regularText.fontFamily,
//  },
//  section1:{
//   borderBottomColor:colors.primaryLight,
//   borderBottomWidth:scale(1),
//   alignSelf: 'stretch',
//   marginBottom:scale(10),
//   marginHorizontal:scale(-20),
//   flexWrap:'wrap'
//  },
//  moreIcon:{
//   right:0,
//   bottom:0,
//   position: 'absolute',
//  },
//  seeAllTitle:{

//  },
//  txtLeftSeeAll:{
//   color:colors.textDark, 
//   fontFamily:appFonts.Medium.fontFamily,
//   fontSize:scale(14)
//  },

//  seeAllCard:{
//   marginVertical:scale(10), 
//   padding:scale(20),
//   elevation:10,
//   borderRadius:scale(10),
//   marginHorizontal:scale(4)
//    },

//    seeAllbody1:{
//     // flexDirection:'row',
//     paddingVertical:scale(12)
//    },

//    seeAllbody1Body:{
//     fontSize:scale(12),
//     paddingVertical:scale(5),
//     fontFamily:appFonts.regularText.fontFamily,
//    },

//    container: {
//     // paddingTop: scaleVertical(20),

// },

// header: {
//     fontSize: 18,
//     fontFamily: appFonts.BoldText.fontFamily,
//     color: colors.textDark,
//     paddingBottom: 5

// },
card: {
    // margin: 20,
    marginVertical:scale(20),
    elevation: 10,
    flexDirection: 'row',

},

// time: {
//     fontSize: 14,
//     fontFamily: appFonts.Medium.fontFamily,
//     paddingBottom: 5


// },
// footerText: {
//     fontSize: 14,

//     fontFamily: appFonts.regularText.fontFamily

// },

// cardView: {

//     marginHorizontal: 5,
//     padding: 10,
//     // borderRadius: 10

// },
// containerCard:{
// marginTop:scale(60), 
// marginHorizontal:scale(20)
// },
// goalCard:{
// flexDirection:'row'
// },

// leftBar:{
// // height:scaleVertical(65),
// padding:scale(20),
// borderRadius:scale(10),
// borderLeftWidth:scale(10),
// // height:scaleVertical(60),
// // backgroundColor:colors.lightPurple
// backgroundColor:colors.white,
// marginVertical:scale(10)
// // borderBottomWidth:10,

// },
// goalCardTitle:{
//   fontFamily:appFonts.BoldText.fontFamily,
//   fontSize:scale(18),
//   color:colors.fadedBlack
  
// },

// goalType1:{
//   borderRadius:10,
//   borderWidth: 1, 
//   borderColor: '#f57364',
//    borderStyle: 'dashed',


// },
// goalType2:{
//   borderRadius:10,
//    borderStyle: 'dashed',
//    backgroundColor: colors.white,


// },
// btnGoal:{
//   // flexWrap:'wrap',
//   width:scale(40)*2
// }

});
