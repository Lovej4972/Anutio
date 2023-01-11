import React from 'react';
import {View, Text, Image} from 'react-native';
import {URL_PROFILE} from '../../constants/navigations';
import colors from '../../constants/colors';
import {appFonts, scale, scaleVertical} from '../../constants/scale';
import {useNavigation} from '@react-navigation/native';
import VerticalScroll from '../shared/scroll/VerticalScroll';

import styles from './style';

const TipInfo = ()=>{
    return(
<View style={styles.container}>

    <Text style={styles.header}> 

    Capture Achievements
    </Text>
    <Text style={styles.body}> 

    Track your daily growth activities
such as skills aquired, courses taken, projects you are on 
using our STAR model.

</Text>
</View>
    )
}
export default TipInfo;