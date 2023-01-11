import {StyleSheet, Platform} from 'react-native';
import colors from '../../constants/colors';
import {appFonts, scale, scaleVertical} from '../../constants/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: scaleVertical(10),
    // zIndex: 99999,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{
   ...appFonts.h4,
   color:"white",
   fontFamily: appFonts.BoldText.fontFamily, 
   paddingVertical:scaleVertical(10)
  },
  body:{
    ...appFonts.h5,
    color:"white",
    fontFamily: appFonts.regularText.fontFamily,
    paddingLeft:scale(40),
    paddingRight:scale(10)

  }

});
