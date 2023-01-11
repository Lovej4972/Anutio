import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function UserSvg({size = 1, ...props}) {
  return (
    <Svg
      width={scale(24) * size}
      height={scale(24) * size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke={props.color || '#5A5A5A'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22"
        stroke={props.color || '#5A5A5A'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
