import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function GoalIcon({size = 1, color, ...props}) {
  return (
<Svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M13 23.8334C18.9831 23.8334 23.8333 18.9832 23.8333 13.0001C23.8333 7.017 18.9831 2.16675 13 2.16675C7.0169 2.16675 2.16666 7.017 2.16666 13.0001C2.16666 18.9832 7.0169 23.8334 13 23.8334Z" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M13 19.5C16.5899 19.5 19.5 16.5899 19.5 13C19.5 9.41015 16.5899 6.5 13 6.5C9.41015 6.5 6.5 9.41015 6.5 13C6.5 16.5899 9.41015 19.5 13 19.5Z" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M13 15.1666C14.1966 15.1666 15.1667 14.1965 15.1667 12.9999C15.1667 11.8033 14.1966 10.8333 13 10.8333C11.8034 10.8333 10.8333 11.8033 10.8333 12.9999C10.8333 14.1965 11.8034 15.1666 13 15.1666Z" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
  )
}