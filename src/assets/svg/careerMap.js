import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function CareerMap({size = 1, color, ...props}) {
  return (

<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M21.9999 16.7399V4.66994C21.9999 3.46994 21.0199 2.57994 19.8299 2.67994H19.7699C17.6699 2.85994 14.4799 3.92994 12.6999 5.04994L12.5299 5.15994C12.2399 5.33994 11.7599 5.33994 11.4699 5.15994L11.2199 5.00994C9.43988 3.89994 6.25988 2.83994 4.15988 2.66994C2.96988 2.56994 1.99988 3.46994 1.99988 4.65994V16.7399C1.99988 17.6999 2.77988 18.5999 3.73988 18.7199L4.02988 18.7599C6.19988 19.0499 9.54988 20.1499 11.4699 21.1999L11.5099 21.2199C11.7799 21.3699 12.2099 21.3699 12.4699 21.2199C14.3899 20.1599 17.7499 19.0499 19.9299 18.7599L20.2599 18.7199C21.2199 18.5999 21.9999 17.6999 21.9999 16.7399Z" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M12 5.48999V20.49" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M7.75012 8.48999H5.50012" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M8.50012 11.49H5.50012" stroke="#1E2124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
)
}
