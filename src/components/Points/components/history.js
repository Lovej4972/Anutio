import React, { useEffect } from 'react'
import { View, FlatList, Text } from 'react-native'
import colors from '../../../constants/colors'
import { appFonts, scale } from '../../../constants/scale'
import IconGenerator from '../../shared/IconGenerator'
import styles from '../styles'
import useGetPointHistory from '../../../hooks/points/useGetPointHistory'

export default function History() {


    const Points = [
        {
            id: 0,
            title: "You earned 10 points",
            value: 1756,
            color: colors.green
        },
        {
            id: 1,
            title: "Claimed Points",
            value: 1300,
            color: colors.error

        },

    ]

    const { handleGetPointHistory, error, isLoading, data, reset } = useGetPointHistory()
    console.log(data, "....history");
    const getPointHistory = () => {
        handleGetPointHistory()
    }
    useEffect(() => {
        getPointHistory()

    }, [])

    return (
        <View>
            <FlatList
                // horizontal={true}
                showsHorizontalScrollIndicator={true}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (


                    <View key={index} style={[styles.leftBar, { borderLeftColor: colors.primaryTint, flexDirection: 'row', justifyContent: 'space-between' }]}>

                        <View>

                            <View style={{}}>
                                <Text style={styles.cardTitle}>

                                    You earned {item?.point} points
                                    {/* {item?.title} */}
                                </Text>
                                {/* <IconGenerator tagName={"Dot"}/> */}


                            </View>

                            <Text style={styles.cardStatus}>
                                {item?.description}
                            </Text>
                            <Text style={[styles.cardStatus]}>
                                {item?.message}
                                {/* {(item?.deadline).toLocaleDateString()} */}
                                {/* {sideColors[index]} */}
                            </Text>
                        </View>





                        <View style={{
                            backgroundColor: "#db728e",
                            borderRadius: 50,
                            height: scale(40),
                            width: scale(40),
                            //  alignSelf:'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // alignContent:'center'

                        }}>
                            <Text style={{
                                color: colors.white, fontFamily: appFonts.Medium.fontFamily,
                                alignSelf: 'center'
                            }}>  +{item?.point}</Text>
                            {/* <Image source={item?.icon} style={{height:scale(50), width:scale(40),
alignSelf:'center',
                   
                    }}/> */}
                        </View>
                    </View>

                    //                             <View key={index} style={{}}>
                    // <View> 
                    //     <Text> </Text>
                    //     <Text> </Text>

                    //      </View>

                    //      <View> 
                    // <Text> </Text>
                    //         </View>

                    //                         </View>



                )}
            />

        </View>
    )
}
