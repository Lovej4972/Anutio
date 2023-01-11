import {StyleSheet, Platform} from 'react-native';
import colors from '../../constants/colors';
import {appFonts, scale, scaleVertical, width} from '../../constants/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
    marginTop: scaleVertical(10),
  },
  holder: {
    justifyContent: 'center',
    paddingVertical: scaleVertical(10),
  },
  layout: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: scaleVertical(60),
  },
  text: {
   fontSize: appFonts.h5.fontSize,
   fontWeight: '400',
   color: colors.secondary,
   fontFamily:appFonts.regularText.fontFamily

  },
  help: {
   fontSize: appFonts.h5.fontSize,
   fontWeight: '400',
   color: colors.errorMsg,
   paddingVertical: scaleVertical(10),
   fontFamily:appFonts.BoldText.fontFamily

   
  },
  capture: {
    paddingHorizontal: scale(30),
    borderRadius: scale(30),
    marginRight: scale(10),
  },
  tip: {
    alignSelf: 'center',
    // paddingLeft: scale(10)
  },

  // activity chart
  chartContainer: {
    paddingVertical: scaleVertical(20),
    paddingHorizontal: scale(10),
    justifyContent:'space-between',
    // flex: 1,
    flexDirection:'row'
  },
  pointsContainer:{
flexDirection:'row',
backgroundColor:'white',
elevation:10,
// flexWrap:'wrap',
width:scale(50)*2.5,
borderRadius:10
  },
  colorDot:{
width:scale(12),
height:scale(12),
borderRadius:scale(50),

marginHorizontal:scale(10),
marginVertical:scale(15)

  },
  percentage:{
fontSize:scale(15),
fontFamily:appFonts.Medium.fontFamily,
color:'#292D32'
  },
  percentageDiv:{
marginVertical:scale(5),

  },
  label:{
fontFamily:appFonts.regularText.fontFamily,
fontSize:scale(10)
  },

  points: {
    fontSize: appFonts.h5.fontSize,
    // fontWeight: '600',
    fontFamily:appFonts.Medium.fontFamily,
    color: colors.secondary,
    alignSelf:'center',
    textAlign:'center'
    
   },
});
