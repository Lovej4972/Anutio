import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../constants/colors";
import { appFonts, scale, scaleVertical } from "../../constants/scale";




export default StyleSheet.create({


    container:{
        flex:1,
        backgroundColor:colors.primary,
        paddingVertical:20
    },

    layout:{
        flex: 1,
        backgroundColor: colors.background2,
        paddingTop: scaleVertical(20),
        borderTopRightRadius: scale(40),
        borderTopLeftRadius: scale(40),
        paddingHorizontal: scale(20),
        marginTop:scale(40)
    },
    headerTxt:{
fontFamily:appFonts.Medium.fontFamily,
color:colors.textDark,
fontSize:scale(15),
padding:scale(10)
    },
    headerTxt2:{
        fontFamily:appFonts.Medium.fontFamily,
        color:colors.primary,
        fontSize:scale(15),
        padding:scale(10)
            },

    CardProjetcs:{  
        projectCard:{

            backgroundColor:colors.white,
            padding:scale(15),
            borderRadius:scale(10),
            elevation:scale(10),
           
            borderLeftColor:colors.lightPink,
            marginVertical:scale(20)
        },
        textItalics:{
                fontSize:scale(12),
                // fontStyle:'italic',
                fontFamily:appFonts.regularText.fontFamily,
                color:colors.BlackFade,
        },
        timeline:{
            fontSize:scale(12),
            fontFamily:appFonts.regularText.fontFamily,
            color:colors.black
        },
       
     
    },

    statusCard:{
        projectCard:{

            backgroundColor:colors.white,
            padding:scale(15),
            borderRadius:scale(10),
            elevation:scale(10),
           
            borderLeftColor:colors.lightPurple,
            marginVertical:scale(20)
        },
        textItalics:{
                fontSize:scale(12),
                fontStyle:'italic',
                fontFamily:appFonts.regularText.fontFamily,
                color:colors.BlackFade,
        },
        timeline:{
            fontSize:scale(12),
            fontFamily:appFonts.regularText.fontFamily,
            color:colors.black
        },
    },
    section2:{
        marginVertical:scale(10)
    },
    progressTxt:{
        paddingBottom:scale(10),
        fontSize:scale(12),
        fontFamily:appFonts.regularText.fontFamily,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerTxtRight:{
        color:colors.primaryFade,
        fontFamily:appFonts.regularText.fontFamily,

    },
    date:{
        borderWidth:0.5,
        borderColor:colors.primaryFaded,
        // flex:1,
     height:scale(50),
     width:scale(130),
    //  margin:scale(10),
     borderRadius:scale(10),
     justifyContent:'center',
     padding:scale(10),
    //  borderRightWidth:1,
     borderRightColor:colors.primaryFaded,
     flexDirection:'row',
     justifyContent:'space-around',
     alignItems:'center'


     

    
    },
    dateContainer:{
    
     flexDirection:'row',
     justifyContent:'space-between',
     marginBottom:scale(30)
    },
    start:{
        fontFamily:appFonts.regularText.fontFamily,
        borderRightColor:colors.primaryFaded,
        borderRightWidth:1,
        paddingRight:10

    },
    progressText:{
        fontFamily:appFonts.regularText.fontFamily,
        color:colors.dartText,
        paddingVertical:scale(2)

    },
    tabStyle:{
        width:scale(100)
      },
 
})