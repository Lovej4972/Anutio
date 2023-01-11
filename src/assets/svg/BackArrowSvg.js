import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function BackArrow({size = 1, color, ...props}) {
  return (
    <Svg
      width={scale(24) * size}
      height={scale(24) * size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
        stroke={color || 'white'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.5 12H3.67001"
        stroke={color || 'white'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
