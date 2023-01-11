import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function NextSvg({size = 1, color, ...props}) {
  return (
    <Svg
      width={scale(16) * size}
      height={scale(16) * size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6 3L11 8L6 13"
        stroke={color || 'black'}
        strokeOpacity="0.5"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
