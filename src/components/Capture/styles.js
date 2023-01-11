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
    // ...appFonts.h6,
    fontFamily:appFonts.BoldText.fontFamily,
    alignSelf: 'center',
    width: scale(50) * 5,
    borderRadius: scale(100),
    color:colors.textDark
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
  userAvatar: {
    borderRadius: scale(50),
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: colors.primary,
    ...Platform.select({
      ios: {
        height: scaleVertical(37),
        width: scale(45),
      },
      android: {
        width: scale(40) * 2.3,
        height: scaleVertical(40) * 2,
      },
    }),
  },
  projectList:{
     textTransform: 'capitalize', color:'#1E2124' ,
     fontFamily:appFonts.regularText.fontFamily,
     
  }
});
