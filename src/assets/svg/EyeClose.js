import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function EyeClose({size = 1, ...props}) {
  return (
    <Svg
      width={scale(20) * size}
      height={scale(24) * size}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.76069 11.3668C7.18569 10.7928 6.83569 10.0128 6.83569 9.1378C6.83569 7.3848 8.24769 5.9718 9.99969 5.9718C10.8667 5.9718 11.6647 6.3228 12.2297 6.8968"
        stroke={props.color || '#1E2020'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.1049 9.69885C12.8729 10.9889 11.8569 12.0069 10.5679 12.2409"
        stroke={props.color || '#1E2020'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.65463 14.4723C3.06763 13.2263 1.72363 11.4063 0.749634 9.13729C1.73363 6.85829 3.08663 5.02829 4.68363 3.77229C6.27063 2.51629 8.10163 1.83429 9.99963 1.83429C11.9086 1.83429 13.7386 2.52629 15.3356 3.79129"
        stroke={props.color || '#1E2020'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.4477 5.99078C18.1357 6.90478 18.7407 7.95978 19.2497 9.13678C17.2827 13.6938 13.8067 16.4388 9.99965 16.4388C9.13665 16.4388 8.28565 16.2988 7.46765 16.0258"
        stroke={props.color || '#1E2020'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.887 1.24957L2.11304 17.0236"
        stroke={props.color || '#1E2020'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
