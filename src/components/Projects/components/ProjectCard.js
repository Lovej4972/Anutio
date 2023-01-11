import React, { useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import Header from '../../shared/HeaderNav/Header';
// import HeaderAvatar from '../shared/HeaderNav/HeaderAvatar';
// import VerticalScroll from '../shared/scroll/VerticalScroll';
// import Ellipse from '../../assets/images/Ellipse.png';
// import { URL_TAB } from '../../constants/navigations';
// import Button from '../shared/Button';
import colors from '../../../constants/colors';
import styles from '../styles';
import { appFonts, scale } from '../../../constants/scale';
// import { appFonts, scale, scaleVertical } from '../../constants/scale';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import CheckBox from '@react-native-community/checkbox';

import { cardStyles } from '../../../constants/scale';
import IconGenerator from '../../shared/IconGenerator';
import useProgressChange from '../../../hooks/projects/useProjectChangeInProgress';
import useProgressChangeCompleted from '../../../hooks/projects/useProjectChangeCompleted';
import { useIsFocused } from '@react-navigation/native';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import useDeleteProjects from '../../../hooks/projects/useDeleteProject';
export default function ProjectCard({ title, caption, timeline, status, date, style, progressLoader, icon,hideTodo, percentage, others, progress, projId,sProg, getProj }) {
    console.log(projId, '...id');
    const [checked, setChecked] = useStateWithCallbackLazy({})
const isFocused = useIsFocused()
    const [pRoute, setPRoute] = useState("")
    console.log(checked);

    const progressText = [
        {
            id: 1,
            title: "Todo"
        },
        {
            id: 2,
            title: "In Progress"
        },
        {
            id: 3,
            title: "Completed"
        }
    ]
    const navigation = useNavigation()

    const { handleProgressChange, error, isLoading, data, reset } = useProgressChange(pRoute)
    const { handleProgressChangeCompleted, onLoad } = useProgressChangeCompleted();
   const {handleDeleteProjects} = useDeleteProjects()

    const handleProgressUpdate = async (projId) => {
        const mute=1
        const body = {
            projectId: projId
        }
        for (const [key, value] of Object.entries(checked)) {
            console.log(checked[2]); 
            if (checked[2]&&!checked[3]) {
                // projectId.push(key)
              await  handleProgressChange(body)
              getProj(mute)
                // console.log(key, value);
                // return
            }
            if (checked[3]) {
                // projectId.push(key)
                handleProgressChangeCompleted(body)
                getProj(mute)
                // console.log(key, value);
                // return
            }
        }

        return
    }

const handleCheck = ()=>{
    console.log(sProg, '.......fosp');
    sProg==="todo"?setChecked({1:true, 2:false, 3:false}):sProg==="in-progress"?setChecked({1:true, 2:true, 3:false}):sProg==="completed"?setChecked({1:true, 2:true, 3:true}):setChecked({1:false,2:false,3:false})

}
    useEffect(() => {
        handleCheck()
    },[isFocused])
    return (
        <View style={[style.projectCard, { borderLeftWidth: percentage && scale(10) }]}>

            <View style={style.section1}>

                <View style={{ flexDirection: 'row', }}>


                    <View style={{}}>
                        <Text style={cardStyles.header}>{title} </Text>
                        {
                            <Text style={[style.textItalics, { textTransform: 'capitalize' }]}>{caption}</Text>
                        }

                        {
                            !others && <View style={{ flexDirection: 'row', paddingVertical: scale(5) }}>
                                <Text style={style.timeline}>{status}: </Text>
                                <Text style={style.textItalics}>{date}</Text>
                            </View>
                        }

                    </View>

                    {/* {
                        others && <TouchableOpacity onPress={() => handleDeleteProjects(projId)} style={{ marginHorizontal: scale(10), right: 0, position: 'absolute' }}>

                            <IconGenerator tagName={"Trash"} />
                        </TouchableOpacity>
                    } */}

                    <View style={{}}>

                        {/* {

                            others ? <Text style={{ top: 0, right: 0, }}> </Text> :
                                <View style={{ marginRight: scale(10), backgroundColor: colors.white, elevation: scale(10), borderRadius: 50, padding: scale(4) }}>

                                    <Text> 70%</Text>
                                </View>

                        } */}

                    </View>

                </View>



                {
                    others &&
                    <View style={{ marginVertical: scale(5), flexDirection: 'row', alignItems: 'center' }}>

                        <Text style={{
                            fontFamily: appFonts.Medium.fontFamily,
                            fontSize: scale(12)
                        }}>Timeline: </Text>
                        <Text style={style.textItalics}> {date}</Text>

                    </View>

                }


                <View style={{
                    marginVertical: scale(5)
                }}>
                    {
                        !hideTodo&&
                        progressText.map((progText, index) =>

                            <TouchableOpacity
                                onPress={() => handleProgressUpdate(projId)}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                <CheckBox
                                // onPress={() => handleProgressUpdate(projId)}

                                    style={{
                                        borderRadius: 20,
                                        // height:scale(5),
                                        // width:scale(5),
                                        // borderWidth:0.
                                    }}
                                    // onCheckColor={'red'}

                                    tintColors={{ true: '#000', false: '#5A5A5A' }}
                                    disabled={false}
                                    value={checked[progText.id]} 
                                    onValueChange={async (newValue) => {
                                       await setChecked({ ...checked, [progText.id]: newValue }, ()=>{
                                       handleProgressUpdate(projId)

                                       })
                                        console.log(newValue, "...a");

                                    }}
                                />
                                <Text key={index} style={styles.progressText}> {progText.title}</Text>
                            </TouchableOpacity>

                        )
                    }

                </View>
                <View style={styles.section2}>


                    <FlatList
                        vertical
                        showsHorizontalScrollIndicator={true}
                        data={progressLoader}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => (


                            <View key={index} style={{ flexDirection: 'row', flex: 2, }}>

                                {/* {
                                    !others && <View style={{ flex: 1 }}>
                                        <Text style={{ paddingRight: scale(10), fontFamily: appFonts.regularText.fontFamily, fontSize: scale(12), flex: 1 }}>{item.title}</Text>
                                    </View>
                                } */}

                                <View style={{ marginVertical: scale(6) }}>
                                    {
                                        others && <Text style={styles.progressTxt}>Progress</Text>
                                    }

                                    <Progress.Bar progress={progress * 0.01} width={others ? scale(250) : scale(100)} height={5} color={
                                        progress >= 0.5 ? colors.green : colors.error

                                    } />

                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', color: colors.fadedBlack, fontFamily: appFonts.regularText.fontFamily }}>
                                    <Text style={{ fontSize: scale(10) }}> {progress}%</Text>

                                </View>
                            </View>
                        )}
                    />

                    {
                        icon &&
                        <View>

                            <View style={{ flexDirection: 'row', flex: 1, marginTop: scale(10), justifyContent: 'flex-end' }}>

                                <View>
                                </View>
                            </View>

                        </View>
                    }


                </View>

            </View>
        </View>











    )
}
