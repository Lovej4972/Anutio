import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function GoalSvg({size = 1, color, ...props}) {
  return (
    <Svg
      width={scale(24) * size}
      height={scale(24) * size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.15 16.5V18.6"
        stroke={color || "#BDBDBD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.14999 22H17.15V21C17.15 19.9 16.25 19 15.15 19H9.14999C8.04999 19 7.14999 19.9 7.14999 21V22V22Z"
        stroke={color || "#BDBDBD"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M6.14999 22H18.15"
        stroke={color || "#BDBDBD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z"
        stroke={color || "#BDBDBD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.46999 11.6501C4.71999 11.4101 4.05999 10.9701 3.53999 10.4501C2.63999 9.4501 2.03999 8.2501 2.03999 6.8501C2.03999 5.4501 3.13999 4.3501 4.53999 4.3501H5.18999C4.98999 4.8101 4.88999 5.3201 4.88999 5.8501V8.8501C4.88999 9.8501 5.09999 10.7901 5.46999 11.6501Z"
        stroke={color || "#BDBDBD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.53 11.6501C19.28 11.4101 19.94 10.9701 20.46 10.4501C21.36 9.4501 21.96 8.2501 21.96 6.8501C21.96 5.4501 20.86 4.3501 19.46 4.3501H18.81C19.01 4.8101 19.11 5.3201 19.11 5.8501V8.8501C19.11 9.8501 18.9 10.7901 18.53 11.6501Z"
        stroke={color || "#BDBDBD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
