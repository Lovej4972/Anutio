

import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function Edit2({size = 1, color, ...props}) {

return(

<Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/Svg">
<Path d="M7.33325 1.33334H5.99992C2.66659 1.33334 1.33325 2.66668 1.33325 6.00001V10C1.33325 13.3333 2.66659 14.6667 5.99992 14.6667H9.99992C13.3333 14.6667 14.6666 13.3333 14.6666 10V8.66668" fill="#D9D9D9"/>
<Path d="M7.33325 1.33334H5.99992C2.66659 1.33334 1.33325 2.66668 1.33325 6.00001V10C1.33325 13.3333 2.66659 14.6667 5.99992 14.6667H9.99992C13.3333 14.6667 14.6666 13.3333 14.6666 10V8.66668" stroke="#5988C6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M10.6933 2.01332L5.43992 7.26665C5.23992 7.46665 5.03992 7.85999 4.99992 8.14665L4.71325 10.1533C4.60659 10.88 5.11992 11.3867 5.84659 11.2867L7.85325 11C8.13325 10.96 8.52659 10.76 8.73325 10.56L13.9866 5.30665C14.8933 4.39999 15.3199 3.34665 13.9866 2.01332C12.6533 0.679985 11.5999 1.10665 10.6933 2.01332Z" fill="#D9D9D9" stroke="#5988C6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M9.93994 2.76666C10.3866 4.36 11.6333 5.60666 13.2333 6.06" stroke="#5988C6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
)
}