import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function HomeSvg({size = 1, color, ...props}) {
  return (
    <Svg
      width={scale(24) * size}
      height={scale(24) * size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M12 18V15"
        stroke={color || "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.07 2.82009L3.14 8.37009C2.36 8.99009 1.86 10.3001 2.03 11.2801L3.36 19.2401C3.6 20.6601 4.96 21.8101 6.4 21.8101H17.6C19.03 21.8101 20.4 20.6501 20.64 19.2401L21.97 11.2801C22.13 10.3001 21.63 8.99009 20.86 8.37009L13.93 2.83009C12.86 1.97009 11.13 1.97009 10.07 2.82009Z"
        stroke={color || "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
