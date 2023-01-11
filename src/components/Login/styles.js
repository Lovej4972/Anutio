import {StyleSheet, Platform} from 'react-native';
import colors from '../../constants/colors';
import {appFonts, scale, scaleVertical, width} from '../../constants/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.background,
    paddingTop: scaleVertical(60),
  },
  image: {
    width: width,
    resizeMode: 'contain',
  },
  holder: {
    justifyContent: 'center',
    paddingVertical: scaleVertical(30),
    paddingHorizontal: scale(30),
  },
  inputLayout: {
    marginVertical: scaleVertical(5),
  },
});
