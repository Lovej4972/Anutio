import React from 'react'
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function index({
  bannerBackground,
  title,
  body,
  btnText,
  btnBackground,
  bannerStyles,
  btnStyle,
  onBtnPress,
  point

}) {
  return (

    <ImageBackground source={bannerBackground} style={styles.container} imageStyle={styles.image}>

      <View style={styles.textContainer}>

        <View >
          {title && <Text style={styles.titleText}>{title}</Text>}

        </View>

        {

point && <View >
  <Text style={styles.bodyBold} >{point} Points</Text>
</View>
}
        {

          body && <View >
            <Text style={styles.bodyText} >{body}</Text>
          </View>
        }

        <View>
          <TouchableOpacity onPress={onBtnPress} style={[btnStyle.btn, styles.btnStyleComp]}>

            <Text style={[styles.btnText, btnStyle.textColor]}> {btnText}</Text>

          </TouchableOpacity>


        </View>

      </View>
    </ImageBackground>

  )
}
