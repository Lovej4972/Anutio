import * as React from 'react';
import Svg, {Path, G, Circle} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function Notification({size = 1, color, ...props}) {
  return (
    <Svg
      width={scale(24) * size}
      height={scale(25) * size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M13.87 4.19994C13.56 4.10994 13.24 4.03994 12.91 3.99994C11.95 3.87994 11.03 3.94994 10.17 4.19994C10.46 3.45994 11.18 2.93994 12.02 2.93994C12.86 2.93994 13.58 3.45994 13.87 4.19994Z"
        stroke={color || "#1E2124"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.02 3.90991C8.71 3.90991 6.02 6.59991 6.02 9.90991V12.7999C6.02 13.4099 5.76 14.3399 5.45 14.8599L4.3 16.7699C3.59 17.9499 4.08 19.2599 5.38 19.6999C9.69 21.1399 14.34 21.1399 18.65 19.6999C19.86 19.2999 20.39 17.8699 19.73 16.7699L18.58 14.8599C18.28 14.3399 18.02 13.4099 18.02 12.7999V9.90991C18.02 6.60991 15.32 3.90991 12.02 3.90991Z"
        stroke={color || "#1E2124"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M15.02 20.0601C15.02 21.7101 13.67 23.0601 12.02 23.0601C11.2 23.0601 10.44 22.7201 9.9 22.1801C9.36 21.6401 9.02 20.8801 9.02 20.0601"
        stroke={color || "#1E2124"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Circle cx="15" cy="3" r="3" fill="#E01515" />
    </Svg>
  );
}
