import React, { useEffect } from 'react'
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
import useGetPointHistory from '../../../hooks/points/useGetPointHistory'

export default function Rewards({ }) {
    const navigation = useNavigation()

    const { handleGetPointHistory, error, isLoading, data, reset } = useGetPointHistory()
    const totalPoints = data?.reduce((total, item) => total + (item?.point), 0)
    const Points = [
        {
            id: 0,
            title: "Points Balance",
            value: totalPoints,
            color: colors.green
        },
        {
            id: 1,
            title: "Claimed Points",
            value: "0",
            color: colors.error

        }
    ]
    // console.log(pointsData, "....rhistory");
    const getPointHistory = () => {
        handleGetPointHistory()
    }
    useEffect(() => {
        getPointHistory()

    }, [])

    return (
        <View>

            <View style={{ marginVertical: scale(20) }}>
                <Banner
                    bannerBackground={PointsBanner2}
                    title={"Earn More Points"}
                    btnText={"See How"}
                    btnStyle={styles.btnStyles}
                    body={"Earn Enough Points to Earn Badges"}
                    // onBtnPress={() => navigation.goBack()}

                />

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <Text style={styles.point1}> {totalPoints}</Text>
                <Text style={styles.point1}>/</Text>
                <Text style={styles.point2}> {totalPoints}</Text>
                <Text style={styles.point1}> points to your next badge</Text>

            </View>

            <Progress.Bar progress={0.4} width={scale(300)} height={5} color={'#404040'} />

            <PointCards Points={Points} />

        </View>
    )
}
