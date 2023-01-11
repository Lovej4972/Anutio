import * as React from 'react';
import Svg, {Path, Circle,G } from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function NetworkMap({size = 1, color, ...props}) {
  return (


<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/Svg">
<Path d="M16.96 6.16992C18.96 7.55992 20.34 9.76992 20.62 12.3199" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M3.48999 12.37C3.74999 9.82997 5.10999 7.61997 7.08999 6.21997" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M8.19 20.9399C9.35 21.5299 10.67 21.8599 12.06 21.8599C13.4 21.8599 14.66 21.5599 15.79 21.0099" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M12.06 7.69989C13.5954 7.69989 14.84 6.45524 14.84 4.91989C14.84 3.38454 13.5954 2.13989 12.06 2.13989C10.5246 2.13989 9.28 3.38454 9.28 4.91989C9.28 6.45524 10.5246 7.69989 12.06 7.69989Z" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M4.82999 19.9201C6.36534 19.9201 7.60999 18.6755 7.60999 17.1401C7.60999 15.6048 6.36534 14.3601 4.82999 14.3601C3.29464 14.3601 2.04999 15.6048 2.04999 17.1401C2.04999 18.6755 3.29464 19.9201 4.82999 19.9201Z" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M19.17 19.9201C20.7054 19.9201 21.95 18.6755 21.95 17.1401C21.95 15.6048 20.7054 14.3601 19.17 14.3601C17.6347 14.3601 16.39 15.6048 16.39 17.1401C16.39 18.6755 17.6347 19.9201 19.17 19.9201Z" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
  )
}