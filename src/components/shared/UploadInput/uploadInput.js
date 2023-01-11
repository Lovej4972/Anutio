import React from 'react'
import { View , Text} from 'react-native'
import { scale } from '../../../constants/scale'
import IconGenerator from '../IconGenerator'
import styles from './styles'
export default function UploadInput() {
  return (
    <View style={styles.container}>
        
        <View style={{flexDirection:'row'}}> 

     
        <Text style={styles.txt}> Upload File</Text>

        <IconGenerator
                tagName={"ArrowDown"}
                color={""}
                height={scale(10)}
              />
        </View>
        
        </View>
  )
}
