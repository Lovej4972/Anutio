import { StyleSheet, Platform } from 'react-native';
import colors from '../../constants/colors';
import { appFonts, height, scale, scaleVertical, width } from '../../constants/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaleVertical(10),
    backgroundColor: colors.primary
  },
  VoiceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: scaleVertical(40) * 2,
  },  

  layout: {
    flex: 1,
    backgroundColor: colors.background2,
    paddingVertical: scaleVertical(20),
    marginTop: scaleVertical(10),
    borderTopRightRadius: scale(40),
    borderTopLeftRadius: scale(40),
    paddingHorizontal: scale(20),
  },
  capture: {
    ...appFonts.h6,
    alignSelf: 'center',
    width: scale(50) * 5,
    borderRadius: scale(100)
  },
  textBody: {
    ...appFonts.h5,
    paddingTop: scale(40) * 3,
    fontFamily: appFonts.regularText.fontFamily
    // color:colors.primary

  },
  voiceIcon: {
    paddingTop: scale(40) * 6


  },
  headerText:{
    
    justifyContent:'center',
    alignItems:'center',
    marginVertical:scale(10)
},
  title:{
...appFonts.h4,
fontFamily: appFonts.Medium.fontFamily
  },
  caption:{
    fontSize:scale(12),
fontFamily: appFonts.Medium.fontFamily
  },
  skillBox:{
    borderWidth:1,
    borderColor:colors.primary,
    marginHorizontal:scale(5),
    alignSelf: 'flex-start',
    padding:scale(10),
    borderRadius:scale(8),
    marginVertical:scale(5),
  },
  skill:{
    fontFamily:appFonts.regularText.fontFamily,
    fontSize:scale(12),
    textTransform:"capitalize"
  },
  summaryHeader:{
    paddingHorizontal:scale(20),
    paddingTop:scale(40),
   
  },

  summaryTextHeader:{
    fontSize:scale(14),
    fontFamily:appFonts.BoldText.fontFamily,
    color:colors.dartText
  },
  summaryTextBody:{
    paddingVertical:scale(15),
    fontSize:scale(12),
    fontFamily:appFonts.Medium.fontFamily,
    textTransform:'capitalize'
  }
 

});
