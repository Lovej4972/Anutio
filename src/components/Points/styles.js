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


card: {
    // margin: 20,
    marginVertical:scale(20),
    elevation: 10,
    flexDirection: 'row',

},
goalCardTitle:{
  fontFamily:appFonts.BoldText.fontFamily,
  fontSize:scale(18),
  color:colors.fadedBlack
  
},
cardStatus:{
  fontSize:scale(12),
fontFamily:appFonts.regularText.fontFamily,


 },

 btnStyles:{

  btn:{
    backgroundColor:colors.white,
    // marginBottom:scale(10)
  },
  textColor: {
  color: colors.primary,
  fontSize:scale(10)
  
  }
 },
 close: {
  justifyContent: 'flex-end',
padding: scale(8),
left: 0, position: 'absolute',
// paddingHorizontal:scale(20),
backgroundColor: colors.primaryFade,
margin: scale(10),
alignContent: 'center',
borderRadius: scale(8),
},
tabStyle:{
  width:scale(100)
},

pointCards:{
  backgroundColor:colors.white,
  // alignItems:'flex-end',
  // marginHorizontal:scale(20),
justifyContent:'space-between',
padding:scale(20)
},
point1:{
  fontFamily:appFonts.regularText.fontFamily,
  fontSize:scale(10)
},
point2:{
  fontFamily:appFonts.BoldText.fontFamily,
  fontSize:scale(14),
  color:colors.dartText
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
  cardTitle:{
    fontFamily:appFonts.BoldText.fontFamily,
    fontSize:scale(12),
    color:colors.dartText

  }

// tab: {
//   // paddingTop: 0,
//   backgroundColor: colors.orangeYellow,
//   marginTop: scale(2),
//   // justifyContent: "space-between",
//   // alignItems: "center"
// },

// tabContainer: {
//   // backgroundColor: COLORS.red
//   alignItems: 'center',
 


// },

// tabLabel: {
//   fontFamily: 'Hybi11Amigolight',
//   fontSize: scale(10),
//   lineHeight: scale(20),
//   color: colors.white, 
//   textAlign: 'left',

// },

// tabStyle: {
//   // width: '100%'
//   width: scale(20),
//   // backgroundColor: COLORS.boxblue
//   maxHeight: 30,
//   alignItems: 'center',
//   // justifyContent: 'center'
// },
// view10: {
//   elevation: 10,
//   backgroundColor: colors.primary,

// },


});
