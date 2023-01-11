import {StyleSheet, Platform} from 'react-native';
import colors from '../../../constants/colors';
import {appFonts, scale, scaleVertical} from '../../../constants/scale';


export default StyleSheet.create({
  containerStyle: {
    marginVertical: scale(13),
    backgroundColor: colors.primary,
    paddingVertical: scale(8),
    minHeight: scaleVertical(20),
    borderRadius: scale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: colors.white,
    // fontWeight: 'bold',
    fontSize: appFonts.h6.fontSize,
    fontFamily: appFonts.Medium.fontFamily
  },
   
});
