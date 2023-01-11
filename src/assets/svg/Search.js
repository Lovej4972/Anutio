
import * as React from 'react';
import Svg, {Path, Circle,G } from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function SearchIcon({size = 1, color, ...props}) {
  return (

<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/Svg">
<G id="Iconly/Light/Search">
<G id="Search">
<Circle id="Ellipse_739" cx="11.7666" cy="11.7666" r="8.98856" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path id="Line_181" d="M18.0183 18.4854L21.5423 22.0002" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</G>
</G>
</Svg>
  )
}