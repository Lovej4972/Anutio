import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function ArrowUp({size = 1, color, ...props}) {
  return (

<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M5 15.5L12 8.5L19 15.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
  )
}