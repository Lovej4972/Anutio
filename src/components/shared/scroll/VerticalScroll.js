import React from 'react';
import {ScrollView} from 'react-native';
import colors from '../../../constants/colors';

const VerticalScroll = ({children, bgColor}) => {
  return <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: bgColor ? bgColor : colors.background}}>{children}</ScrollView>;
};

export default VerticalScroll;
