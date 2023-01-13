
import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function Close({size = 1, color, ...props}) {
  return (

<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M9.34643 15.0068L9.34034 15.0129L9.33446 15.0192C9.30421 15.0516 9.24534 15.0804 9.16999 15.0804C9.10544 15.0804 9.04483 15.0581 8.99354 15.0068C8.8988 14.9121 8.8988 14.7486 8.99354 14.6539L14.6535 8.9939C14.7483 8.89917 14.9117 8.89917 15.0064 8.9939C15.1012 9.08864 15.1012 9.25206 15.0064 9.3468L9.34643 15.0068Z" fill="#292D32" stroke="white"/>
<Path d="M14.83 15.5804C14.64 15.5804 14.45 15.5104 14.3 15.3604L8.63999 9.70035C8.34999 9.41035 8.34999 8.93035 8.63999 8.64035C8.92999 8.35035 9.40998 8.35035 9.69998 8.64035L15.36 14.3004C15.65 14.5904 15.65 15.0704 15.36 15.3604C15.21 15.5104 15.02 15.5804 14.83 15.5804Z" fill="white"/>
</Svg>
  )}