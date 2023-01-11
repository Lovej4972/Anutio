import React from 'react'
import { View, Text, TouchableOpacity, Button, Image, StyleSheet, FlatList } from 'react-native'
import colors from '../../constants/colors'
import { appFonts, scale, scaleVertical } from '../../constants/scale'
// import Header from '../shared/HeaderNav/Header'
import Header from '../../components/shared/HeaderNav/Header';
import { useNavigation } from '@react-navigation/native';

import HeaderAvatar from '../shared/HeaderNav/HeaderAvatar'
import IconGenerator from '../shared/IconGenerator'
import Banner from '../shared/Banner'
import goalBanner from '../../assets/images/goalBanner.jpeg'
import styles from './styles'
import Input from '../shared/Input';



export const MyGoals = ({ goalTitle, titleDescription, sideColor, onChangeText, placeholder, disabled, select, onPress, value}) => {
    // console.log(goals, "goals");
    return (
        <View style={styles.container}>
       

            {/* <View style={styles.goalCard}> */}

                {/* <View style={styles.leftBar}/> */}


                <View style={[styles.leftBar, {borderLeftColor:sideColor}]}>
                    <Text style={styles.cardTitle}>
                        {goalTitle}
                    </Text>

{/*                   
                    <Text style={styles.cardStatus}>
                        {item.description}
                    </Text> */}
{
    select?<TouchableOpacity onPress={onPress}>
        <Text style={{fontFamily:appFonts.regularText.fontFamily}}> {value}</Text>
         </TouchableOpacity>:
    <Input noBorder={true} onChangeText={onChangeText} placeholder={placeholder} disabled={disabled}/>

}

                    
                </View>

{/* 
                <
                vertical
                showsHorizontalScrollIndicator={true}
                data={goals}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                   
        
                    <View style={[styles.leftBar, {borderLeftColor:item.sideColor}]}>
                    <Text style={styles.cardTitle}>
                        {item.title}
                    </Text>

                  
                    <Text style={styles.cardStatus}>
                        {item.description}
                    </Text>

                    
                </View>
                )}
            /> */}




        
            </View>
        // </View>




    )
}
