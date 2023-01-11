import { StyleSheet, Platform } from "react-native"
import { appFonts, scale } from "../../../constants/scale"


export default StyleSheet.create({
container:{
backgroundColor:"#ffffff",
elevation:10,
padding:scale(8),
borderRadius:scale(5),
marginBottom:scale(10)

},
txt:{
    paddingRight:scale(8),
    fontFamily:appFonts.Medium.fontFamily,
    color:'#1E2124',
    
    // lineHeight:scale(16)
}




})