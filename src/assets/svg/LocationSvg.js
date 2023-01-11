import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function Location({size = 1, color, ...props}) {
  return (
    <Svg
      width={scale(20) * size}
      height={scale(20) * size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M8 8.95321C9.14875 8.95321 10.08 8.02197 10.08 6.87321C10.08 5.72446 9.14875 4.79321 8 4.79321C6.85125 4.79321 5.92 5.72446 5.92 6.87321C5.92 8.02197 6.85125 8.95321 8 8.95321Z"
        stroke={color || "#1E2124"}
        strokeWidth="1.5"
      />
      <Path
        d="M2.41333 5.65992C3.72667 -0.113413 12.28 -0.106746 13.5867 5.66659C14.3533 9.05325 12.2467 11.9199 10.4 13.6933C9.06 14.9866 6.94 14.9866 5.59333 13.6933C3.75333 11.9199 1.64667 9.04659 2.41333 5.65992Z"
        stroke={color || "#1E2124"}
        strokeWidth="1.5"
      />
    </Svg>
  );
}
