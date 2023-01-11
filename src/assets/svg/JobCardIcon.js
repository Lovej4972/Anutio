
import * as React from 'react';
import Svg, {Path, G, Rect} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function JobCardIcon({size = 1, color, ...props}) {

return(
<Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<Rect width="32" height="32" rx="6" fill="#FFCFDB"/>
<Path d="M21 7H11C9.9 7 9 7.9 9 9V25L16 22L23 25V9C23 7.9 22.1 7 21 7Z" fill="#F13472"/>
</Svg>
)
}