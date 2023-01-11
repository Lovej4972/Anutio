import {StyleSheet, Platform} from 'react-native';
import colors from '../../constants/colors';
import {appFonts, scale, scaleVertical, width} from '../../constants/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaleVertical(30),
  },
  mainHolder: {
    justifyContent: 'center',
    // backgroundColor: colors.background,
    // paddingTop: scaleVertical(10),
  },
  image: {
    width: width,
    resizeMode: 'contain',
  },
  holder: {
    justifyContent: 'center',
    // backgroundColor: colors.background,
    paddingVertical: scaleVertical(20),
    paddingHorizontal: scale(30),
  },
  inputLayout: {
    marginVertical: scaleVertical(5),
  },
});
