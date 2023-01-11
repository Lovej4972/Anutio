import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {appFonts, scale, scaleVertical} from '../../../constants/scale';

export default StyleSheet.create({
  cellDefault: {
    borderColor: 'transparent',
    borderWidth: 1,
  },
  cellFocusedDefault: {
    borderColor: colors.success,
    borderWidth: 2,
  },
  textStyleDefault: {
    textAlign: 'center',
    // color: colors.primary,
    fontSize: scale(appFonts.h3.fontSize),
    // fontFamily: appFonts.BoldText.fontFamily,
  },
  error: {
    borderColor: colors.errorMsg,
  },
  success: {
    // borderColor: colors.success,
  },
  errorMessage: {
    marginTop: scale(10),
    paddingLeft: scale(10),
    fontSize: scale(appFonts.h6.fontSize),
    // fontFamily: appFonts.regularText.fontFamily,
    color: colors.errorMsg,
  },
});
