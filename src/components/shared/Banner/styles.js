import {StyleSheet, Platform} from 'react-native';
import colors from '../../../constants/colors';
import {appFonts, scale, scaleVertical, width} from '../../../constants/scale';

export default StyleSheet.create({
  container: {
    height: scaleVertical(140),
  },

  image:{
    borderRadius:scale(12)
  },


  titleText:{
    paddingVertical:scale(15),
    color:colors.white,
    fontFamily:appFonts.BoldText.fontFamily,
    fontSize:scale(14),
    
  },
  textContainer:{
    width:scale(50)*3.5,
    paddingHorizontal:scale(20),

  },
  btnStyleComp:{
    width:scale(50)*1.8,
    borderRadius:scale(10),
    height:scale(32), 
    justifyContent:'center',
    alignItems:'center',
  },
  btnText:{
    fontFamily:appFonts.Medium.fontFamily

  },
  bodyText:{
    color:"white",
    paddingBottom:scale(10),
    fontFamily:appFonts.Medium.fontFamily

  },

  bodyBold:{
    color:"white",
    paddingBottom:scale(10),
    // paddingTop:-10,
    fontFamily:appFonts.BoldText.fontFamily,
    fontSize:scale(16)

  },

});
