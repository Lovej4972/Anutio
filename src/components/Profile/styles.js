import {StyleSheet, Platform} from 'react-native';
import colors from '../../constants/colors';
import {appFonts, height, scale, scaleVertical, width} from '../../constants/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaleVertical(20),
    backgroundColor: colors.primary,
  },
  profileAvatar: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: scaleVertical(10),
  },
  profileAvatar2: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: scaleVertical(-35),
  },
  culve: {
    height: scale(80),
    width: scale(80),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: scale(2),
    borderRadius: scale(50),
    borderColor: colors.white,
  },
  userAvatar: {
    borderColor: colors.primary,
    borderWidth: scale(2),
    borderRadius: scale(50),
    resizeMode: 'cover',
    ...Platform.select({
      ios: {
        height: scaleVertical(77),
        width: scale(95),
      },
      android: {
        width: scale(70),
        height: scale(70),
      },
    }),
  },
  layout: {
    flex: 1,
    backgroundColor: colors.background2,
    paddingTop: scaleVertical(20),
    borderTopRightRadius: scale(40),
    borderTopLeftRadius: scale(40),
    paddingHorizontal: scale(20),
  },
  layout2: {
    flex: 1,
    backgroundColor: colors.background2,
    marginTop: scaleVertical(100),
    borderTopRightRadius: scale(40),
    borderTopLeftRadius: scale(40),
    paddingHorizontal: scale(20),
  },
  text: {
    fontSize: appFonts.h5.fontSize,
    fontWeight: '400',
    color: colors.secondary,
  },
  linkedIn: {
    marginBottom: scaleVertical(40),
    backgroundColor: colors.primary,
    width: scale(170),
    height: scaleVertical(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(50),
  },
  linkedInText: {
    fontSize: scale(appFonts.h6.fontSize),
    fontWeight: '500',
    color: colors.white,
  },
  profileStar:{
    right:0,
    position: 'absolute',
    marginVertical:scale(20),
    marginHorizontal:scale(20)

  },
  editButtonContainer:{
    right:0,
    position: 'absolute',
    // marginVertical:scale(20),
    marginHorizontal:scale(20),
    marginVertical:scale(20)
  },
  editButton:{
  // height:scale(20),
  // width:scale(100),
  fontSize:scale(12),
  paddingHorizontal:scale(5)
  },
  bio:{
    ...appFonts.regularText.fontFamily,
    fontSize:scale(12),
    color:colors.gray2,
    alignSelf:'center'
  },
  inputStyle: {
    flex: 1,
    fontFamily: appFonts.regularText.fontFamily,
    fontSize: scale(appFonts.h6.fontSize),
    color: colors.lightPrimary,
    paddingBottom: 0,
    paddingHorizontal: scale(10),
    paddingTop: scaleVertical(1),
    borderBottomWidth:scale(1),
    borderColor:colors.primaryFaded,
    minHeight: scale(45),
    


  },
});
