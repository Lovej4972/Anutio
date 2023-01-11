
import {StyleSheet, Platform} from 'react-native';
import colors from '../../../constants/colors';
import {appFonts, scale, scaleVertical, width} from '../../../constants/scale';

export default StyleSheet.create({
  close: {
    justifyContent: 'flex-end',
 padding: scale(8),
 right: 0, position: 'absolute',
 // paddingHorizontal:scale(20),
 backgroundColor: colors.primaryFade,
 margin: scale(10),
 alignContent: 'center',
 borderRadius: scale(8),
  },
  
});




