import * as React from 'react';
import Svg, {Path, G, Rect} from 'react-native-svg';
import {scale} from '../../constants/scale';

export default function getMatched({size = 1, color, ...props}) {

return(

<Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<Rect width="32" height="32" rx="6" fill="#95BCF5" fill-opacity="0.69"/>
<Path d="M21.8 9.6H18.456C18.12 8.672 17.24 8 16.2 8C15.16 8 14.28 8.672 13.944 9.6H10.6C9.72 9.6 9 10.32 9 11.2V22.4C9 23.28 9.72 24 10.6 24H21.8C22.68 24 23.4 23.28 23.4 22.4V11.2C23.4 10.32 22.68 9.6 21.8 9.6ZM16.2 9.6C16.64 9.6 17 9.96 17 10.4C17 10.84 16.64 11.2 16.2 11.2C15.76 11.2 15.4 10.84 15.4 10.4C15.4 9.96 15.76 9.6 16.2 9.6ZM14.6 20.8L11.4 17.6L12.528 16.472L14.6 18.536L19.872 13.264L21 14.4L14.6 20.8Z" fill="#5988C6"/>
</Svg>

)}