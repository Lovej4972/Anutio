import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function LinkedIn({size = 1, ...props}) {
  return (
    <Svg
      width={scale(22) * size}
      height={scale(22) * size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11Z"
        fill="#2867B2"
      />
      <Path
        d="M7.975 16.5H5.6375V9.14375H7.975V16.5ZM6.80625 8.1125C6.05 8.1125 5.5 7.5625 5.5 6.80625C5.5 6.05 6.11875 5.5 6.80625 5.5C7.5625 5.5 8.1125 6.05 8.1125 6.80625C8.1125 7.5625 7.5625 8.1125 6.80625 8.1125ZM16.5 16.5H14.1625V12.5125C14.1625 11.3438 13.6812 11 12.9937 11C12.3062 11 11.6187 11.55 11.6187 12.5812V16.5H9.28125V9.14375H11.4812V10.175C11.6875 9.69375 12.5125 8.9375 13.6812 8.9375C14.9875 8.9375 16.3625 9.69375 16.3625 11.9625V16.5H16.5Z"
        fill="white"
      />
    </Svg>
  );
}
