import React from 'react'
import { View, FlatList, Text } from 'react-native'
import colors from '../../../constants/colors'
import { appFonts, scale } from '../../../constants/scale'
import styles from '../styles'
import Banner from '../../shared/Banner'
import PointsBanner1 from '../../../assets/images/pointBanner1.png'
import PointsBanner2 from '../../../assets/images/pointBanner2.png'
import * as Progress from 'react-native-progress';
import PointCards from './pointCards';
// import Rewards from './components/rewards';
import { useNavigation } from '@react-navigation/native'
import Silver_Medal from '../../../assets/images/Silver_Medal.png'

export default function Badges() {
const navigation = useNavigation()

const Points=[
    {
        id:0,
        body:'Update Guru',
        title:"Earned 15th of Sept",
        // value:1756,
        icon : Silver_Medal,
        color:colors.green,
        image:""

    },
    {
        id:1,
        body:'Update Guru',
        title:"Earned 15th of Sept",
        // value:1300,
        icon : Silver_Medal,

        color:colors.error,
        image:""

    }
]

  return (
    <View>
     


<PointCards Points={Points}/>

    </View>
  )
}
