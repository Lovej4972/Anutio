import {StyleSheet, Platform} from 'react-native';
import colors from '../../constants/colors';
import {appFonts, height, scale, scaleVertical, width} from '../../constants/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaleVertical(20),
    backgroundColor: colors.primary,
  },


  culve: {
    height: scale(50),
    width: scale(80),
    alignItems: 'center',
    justifyContent: 'center',
  },

  layout: {
    flex: 1,
    backgroundColor: colors.background2,
    paddingTop: scaleVertical(20),
    borderTopRightRadius: scale(40),
    borderTopLeftRadius: scale(40),
    paddingHorizontal: scale(20),
  },

  text: {
    fontSize: appFonts.h5.fontSize,
    fontWeight: '400',
    // color: colors.secondary,
  },
 btnStyles:{

  btn:{
    backgroundColor:colors.white,
  },
  textColor: {
  color: "#000000"
  
  }
 },
 uploadInput:{
  // flex:1,
  // position:'absolute',
  // justifyContent:'flex-end',
  alignItems:'flex-end',
  marginVertical:scale(10),
  marginHorizontal:scale(10),
  // backgroundColor:'red',

  right:0
 },
 cardHeader:{
  justifyContent:'space-between',
  flexDirection:'row'
 },
 txtLeft:{
  color:colors.black, 
  fontFamily:appFonts.Medium.fontFamily,
  fontSize:scale(18)
 },
 
 txtRight:{
  color:colors.primaryFade, 
  fontFamily:appFonts.regularText.fontFamily,
  fontSize:scale(12)
 },

 cardDesign:{
marginVertical:scale(20), 
backgroundColor:colors.white,
padding:scale(20),
elevation:10,
borderRadius:scale(10),
marginHorizontal:scale(4)
 },
 headerTitle:{
flexDirection:'row',
// alignItems:'center'
// justifyContent:'space-between',
// marginVertical:scale(10)
// paddingTop:scale(10)
 },
 cardTitle:{
color:colors.textDark,
fontFamily:appFonts.BoldText.fontFamily,
fontSize:scale(14),

 },

 cardTitleBody:{
    color:colors.gray3,
    fontFamily:appFonts.BoldText.fontFamily,
    fontSize:scale(12)
 },
 seeAllcardTitle:{
  color:colors.textDark,
  fontFamily:appFonts.BoldText.fontFamily,
  fontSize:scale(12)
 },
 cardStatus:{
  fontSize:scale(12),
fontFamily:appFonts.regularText.fontFamily,


 },

 body1:{
  flexDirection:'row',
  paddingVertical:scale(12)

 },

 body1Title:{
  fontSize:scale(12),
  fontFamily:appFonts.regularText.fontFamily,
  paddingRight:scale(10)
 },

 body1Body:{
  fontSize:scale(12),
  fontFamily:appFonts.regularText.fontFamily,
 },
 section1:{
  borderBottomColor:colors.primaryLight,
  borderBottomWidth:scale(1),
  alignSelf: 'stretch',
  marginBottom:scale(10),
  marginHorizontal:scale(-20),
  flexWrap:'wrap'
 },
 moreIcon:{
  right:0,
  bottom:0,
  position: 'absolute',
 },
 seeAllTitle:{

 },
 txtLeftSeeAll:{
  color:colors.textDark, 
  fontFamily:appFonts.Medium.fontFamily,
  fontSize:scale(14)
 },

 seeAllCard:{
  marginVertical:scale(10), 
  padding:scale(20),
  elevation:10,
  borderRadius:scale(10),
  marginHorizontal:scale(4)
   },

   seeAllbody1:{
    // flexDirection:'row',
    paddingVertical:scale(12)
   },

   seeAllbody1Body:{
    fontSize:scale(12),
    paddingVertical:scale(5),
    fontFamily:appFonts.regularText.fontFamily,
    textTransform:'capitalize'
   },

   headerFooter:{
    flexDirection:'row',
    paddingVertical:scale(10)
    // justifyContent:'space-between',
   },

   footerText:{
    color:colors.black,
    fontFamily:appFonts.regularText.fontFamily,
    fontSize:scale(12),
    paddingRight:scale(5)
    // paddingVertical:scale(10)
   },
   arrowIcon:{
    flexDirection:'row',
    right:0,
    bottom:0,
    position:'absolute'
    
   },
   topMatchCardDesign:{
    // marginVertical:scale(20), 
backgroundColor:colors.white,
paddingHorizontal:scale(20),
// elevation:10,
borderBottomRightRadius:scale(10),
borderBottomLeftRadius:scale(10),



marginHorizontal:scale(4)
   },

   TopMatchSeeAllCard:{
    marginTop:scale(10), 
    padding:scale(20),
    // elevation:10,
    borderTopRightRadius:scale(10),
    borderTopLeftRadius:scale(10),

    marginHorizontal:scale(4)
     },
     logoStyle:{
        height:scale(30),
        width:scale(30),
        marginRight:scale(5)
     },
     percentage:{
        backgroundColor:colors.primary,
        // flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        elevation:5,
        // padding:scale(8),
        borderRadius:scale(50),
        height:scale(35),
        width:scale(35)

     },
     percentageView:{
        backgroundColor:colors.primary,
        // flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        top:0,
        right:0,
        position:'absolute',
        // padding:scale(8),
        borderRadius:scale(50),
        height:scale(45),
        width:scale(45),
        // padding:scale(10)

     },
     percentageText:{
        color:colors.white,
        fontFamily:appFonts.regularText.fontFamily,
        fontSize:scale(10)
     },
     cardFooterText:{
        paddingTop:scale(10),
        fontFamily:appFonts.regularText.fontFamily,
        lineHeight:scale(15),
        fontSize:scale(10),
        color:colors.tintColor


     },
     actionButton:{
        flexDirection:'row',
        flex:1
     },
    
     btnApply:{
        flex:1
     },
     btn2:{
        // flex:1,
        borderColor:colors.primary,
        borderWidth:scale(1), 
        borderRadius:scale(10),
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        height:scale(35),
        margin:scale(12),
        paddingHorizontal:scale(10) 

     },
     btnText:{
        fontFamily:appFonts.Medium.fontFamily,
        // fontSize:scale(10)
     }

});
