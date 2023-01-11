import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function EyeOpen({size = 1, ...props}) {
  return (
    <Svg
      width={scale(20) * size}
      height={scale(24) * size}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1615 8.05311C13.1615 9.79911 11.7455 11.2141 9.9995 11.2141C8.2535 11.2141 6.8385 9.79911 6.8385 8.05311C6.8385 6.30611 8.2535 4.89111 9.9995 4.89111C11.7455 4.89111 13.1615 6.30611 13.1615 8.05311Z"
        stroke={props.color || '#1E2020'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05292C17.289 3.48892 13.806 0.750916 9.998 0.750916H10.002C6.194 0.750916 2.711 3.48892 0.75 8.05292C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z"
        stroke={props.color || '#1E2020'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
