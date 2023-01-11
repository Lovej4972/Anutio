import React from 'react';
import {ScrollView} from 'react-native';

const HorizontalScroll = ({children}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        alignSelf: 'center',
      }}>
      {children}
    </ScrollView>
  );
};

export default HorizontalScroll;
