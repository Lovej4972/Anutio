import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { scale, appFonts } from '../../../constants/scale';
import styles from '../styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import colors from '../../../constants/colors';


const AchievementProgress = ({data}) => {
console.log(data, 'kol');
  function nonStarted(proStatus){
   let nsData =  data?.filter((nonData, index)=>
    nonData?.status===proStatus
    )
    return nsData
  }


const completedPro =  nonStarted('completed')?.length
const inProgressPro = nonStarted('in-progress')?.length
const todoPro = nonStarted('todo')?.length;
console.log(parseInt(todoPro), '...todoPro');
const totalPro = parseInt(completedPro)+parseInt(inProgressPro+todoPro);

console.log(nonStarted('completed'), '...awae');
  const [points, setPoints] = useState([
    {
      id: 1,
      value: ((todoPro/totalPro)*100)>0?((todoPro/totalPro)*100) : 0,
      label: 'Not Started',
      color: '#E01515'
    },
    {
      id: 2,
      value: ((inProgressPro/totalPro)*100)>0?((inProgressPro/totalPro)*100) : 0,
      label: 'Work in Progress',
      color: '#FF9900'

    },
    {
      id: 3,
      value: ((completedPro/totalPro)*100)>0?((completedPro/totalPro)*100) : 0,
      label: 'Completed',
      color: '#1265E2'

    },
    
  ])

  return (
    <View style={styles.chartContainer}>
      <View>

        <AnimatedCircularProgress
          size={scale(150)}
          width={5}
          fill={80}
          tintColor="#D93962"
          backgroundColor={colors.background2}>
          {
            (fill) => (
              <Text style={styles.points}>
                {/* { this.state.fill } */}
                {data?.length} {'\n'}
                Projects
              </Text>
            )
          }
        </AnimatedCircularProgress>
      </View>


      <View style={styles.pointsContainer}>





        <View style={{  }}>

        {points.map((point, index) => <View key={index}>

<View style={{flexDirection:'row'}}> 
<Text style={[styles.colorDot,{backgroundColor:point.color}]}> </Text>

<View style={styles.percentageDiv}>
  <Text style={styles.percentage}>{point.value}%</Text>
  <Text style={styles.label}> {point.label} </Text>

</View>

</View>
       

          </View>)}


        </View>



      </View>
      {/* <Text>Achievement Progress</Text> */}
    </View>
  );
};

export default AchievementProgress;
