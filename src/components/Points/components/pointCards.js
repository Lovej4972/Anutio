import React from 'react'
import { View, FlatList, Text, Image } from 'react-native'
import colors from '../../../constants/colors'
import { appFonts, scale } from '../../../constants/scale'
import styles from '../styles'

export default function PointCards({ Points }) {


  // const Points=[
  //     {
  //         id:0,
  //         title:"Points Balance",
  //         value:1756,
  //         color:colors.green
  //     },
  //     {
  //         id:1,
  //         title:"Claimed Points",
  //         value:1300,
  //         color:colors.error

  //     }
  // ]

  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        data={Points}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (


          <View key={item.id} style={{ marginVertical: scale(20), marginHorizontal: scale(10) }}>

            <View style={styles.pointCards}>
              {
                item?.icon &&
                <View style={{
                  justifyContent: 'center', alignItems: 'center',

                }}>
                  <View style={{
                    backgroundColor: colors.background2,
                    borderRadius: 50,
                    height: scale(50),
                    width: scale(50),
                    //  alignSelf:'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center'

                  }}>
                    <Image source={item?.icon} style={{
                      height: scale(50), width: scale(40),
                      alignSelf: 'center',

                    }} />
                  </View>

                </View>
              }

              {
                item?.value &&
                <View>

                  <Text style={{ fontSize: scale(36), color: item.color }}> {item.value}</Text>

                </View>
              }
              {
                item?.body &&
                <Text style={{
                  color: colors.textDark, fontSize: scale(14),
                  fontFamily: appFonts.BoldText.fontFamily, marginVertical: scale(5)
                }}> {item.body}</Text>
              }
              <Text style={{ color: colors.blackTint, fontFamily: appFonts.regularText.fontFamily, fontSize: scale(12) }}> {item.title}</Text>

            </View>



          </View>



        )}
      />

    </View>
  )
}
