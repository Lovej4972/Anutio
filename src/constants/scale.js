import {Platform, Dimensions} from 'react-native';
import colors from './colors';

export const {width, height} = Dimensions.get('window');

const guidelineWidth = Platform.isPad ? 560 : 360;
const guidelineBaseHeight = Platform.isPad ? 840 : 640;

export const scale = size => (width / guidelineWidth) * size;
export const scaleVertical = size => (height / guidelineBaseHeight) * size;

export const appFonts = {

  BoldText: {
fontFamily: 'Nunito-Bold',
  },
  regularText: {
    fontFamily: 'Nunito-Light',
  },
  Medium: {
    fontFamily: 'Nunito-Medium',
  },
  h1: {fontSize: 40},
  h2: {fontSize: 32},
  h3: {fontSize: 24},
  h4: {fontSize: 20},
  h5: {fontSize: 16},
  h6: {fontSize: 14},
};


export const cardStyles = {
  header:{
    fontFamily: appFonts.BoldText.fontFamily,
    color:colors.textDark,
    fontSize:scale(14),
    paddingVertical:scale(5)
  }
}
