
import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function LogoutIcon({size = 1, color, ...props}) {

return(

<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/Svg">
<Path d="M8.89999 7.55999C9.20999 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.23999 20.08 8.90999 16.54" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M15 12H3.62" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
)
}