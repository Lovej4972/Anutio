import {StyleSheet, Platform} from 'react-native';
import colors from '../../../constants/colors';
import {appFonts, scale, scaleVertical} from '../../../constants/scale';

export default StyleSheet.create({
  header: {
    // flex: 1,
    // marginTop: scaleVertical(10),
    zIndex: 99999,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headertxt: {
    color: colors.white,
    fontSize: scale(appFonts.h5.fontSize),
    // fontWeight: 'bold',
    paddingHorizontal: scale(10),
    fontFamily:appFonts.BoldText.fontFamily
  },

  rowView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // backgroundColor: colors.white,
  },
  leftIcon: {
    textAlign: 'center',
  },
  rigtIhcon: {
    paddingVertical: scale(10),
  },
  image: {
    resizeMode: 'cover',
    borderRadius: scale(50),
    ...Platform.select({
      ios: {
        width: scale(30),
        height: scaleVertical(23),
      },
      android: {
        width: scale(30),
        height: scaleVertical(27),
      },
    }),
  },
  shadow: {
    shadowColor: '#8EBE6E59',
    shadowOffset: {
      width: scale(0),
      height: scale(9),
    },
    shadowOpacity: scale(0.5),
    shadowRadius: scale(12.35),
    elevation: scale(19),
  },

  // HeaderAvatar
  userName: {
    color: colors.secondary,
    fontSize: scale(appFonts.h6.fontSize),
    paddingHorizontal: scale(10),
    fontFamily:appFonts.regularText.fontFamily,
    textTransform:'capitalize'
  },
  location: {
    color: colors.secondary,
    fontSize: scale(appFonts.h6.fontSize),
    paddingHorizontal: scale(10),
    fontFamily:appFonts.regularText.fontFamily

  },

  culve: {
    height: scale(50),
    width: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: scale(2),
    borderRadius: scale(50),
    borderColor: colors.primary,
  },
  userAvatar: {
    borderRadius: scale(50),
    resizeMode: 'cover',
    ...Platform.select({
      ios: {
        height: scaleVertical(37),
        width: scale(45),
      },
      android: {
        width: scale(40),
        height: scaleVertical(40),
      },
    }),
  },
});
