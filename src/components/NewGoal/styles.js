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


});
