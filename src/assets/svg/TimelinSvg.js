import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function TimelinSvg({size = 1, color, ...props}) {
  return (
    <Svg
      width={scale(26) * size}
      height={scale(26) * size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M23.465 11.31L22.4033 15.8384C21.4933 19.7492 19.695 21.3309 16.315 21.0059C15.7733 20.9625 15.1883 20.8651 14.56 20.7134L12.74 20.28C8.2225 19.2075 6.825 16.9759 7.88667 12.4476L8.94833 7.90838C9.165 6.98755 9.425 6.18588 9.75 5.52505C11.0175 2.90338 13.1733 2.19922 16.7917 3.05505L18.6008 3.47755C23.14 4.53922 24.5267 6.78172 23.465 11.31Z"
        stroke={color || "#BDBDBD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.315 21.0057C15.6433 21.4607 14.7983 21.8399 13.7692 22.1757L12.0575 22.7391C7.75667 24.1257 5.4925 22.9666 4.095 18.6657L2.70834 14.3866C1.32167 10.0857 2.47 7.81074 6.77084 6.42407L8.4825 5.86074C8.92667 5.7199 9.34917 5.60074 9.75 5.5249C9.425 6.18574 9.165 6.9874 8.94834 7.90824L7.88667 12.4474C6.825 16.9757 8.2225 19.2074 12.74 20.2799L14.56 20.7132C15.1883 20.8649 15.7733 20.9624 16.315 21.0057Z"
        stroke={color || "#BDBDBD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.6933 9.24072L18.9475 10.5732"
        stroke={color || "#BDBDBD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.6317 13.4333L15.7733 14.235"
        stroke={color || "#BDBDBD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
