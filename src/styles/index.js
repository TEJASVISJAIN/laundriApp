import { StyleSheet, Dimensions } from 'react-native';
// const HEIGHT = Dimensions.get('window').height;
import {
  horizontalScale, verticalScale, moderateScale, padding,
} from './mixins';

const WIDTH = Dimensions.get('window').width;

// taken from https://chir.ag/projects/name-that-color/
const colors = {
  white: '#fff',
  black: '#000',
  deSelected: '#C7D2E2',
  grey: '#EDEEEE',
  primary_background: '#8fcce7',
};

export default StyleSheet.create({

  colorWhite:{color: colors.white},
  colorBlack:{color:colors.black},
  colorPrimary:{color: colors.primary_background},

  whiteBackground:{
    backgroundColor: colors.white,
  },

  main_background: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.primary_background,
    flex: 1,
    width: '100%'
  },

  //margins

    //vertical
  marginV_15: {
    marginVertical: verticalScale(15),
  },
  //horizontal
  marginH_20:{
    marginHorizontal: horizontalScale(20),
  },

    //Top

  marginT_10:{
    marginTop: verticalScale(10),
  },
  marginT_30:{
    marginTop: verticalScale(30)
  },
  marginT_50:{
    marginTop: verticalScale(50)
  },

  //Bottom
  marginB_20:{
    marginBottom: 20,
  },

    //left
  
  marginL_98:{
    marginLeft: horizontalScale(98),
  },
  marginL_40:{
    marginLeft: horizontalScale(40)
  },
  marginL_35:{
    marginLeft: horizontalScale(35)
  },
  marginL_20:{
    marginLeft: horizontalScale(20),
  },
  marginL_13:{
    marginLeft: horizontalScale(13),
  },

    //Right
  marginR_98:{
    marginRight: horizontalScale(98),
  },
  marginR_28:{
    marginRight: horizontalScale(28),
  },
  //padding
  paddingH_35:{
    paddingHorizontal: horizontalScale(35),
  },
  paddingH_20:{
    paddingHorizontal: horizontalScale(20)
  },

  //Bottom
  paddingB_20:{
    paddingBottom: 20
  },

  //flex
  flex_1: {
    flex: 1,
  },
  flex_2: {
    flex: 2,
  },
  flex_3: {
    flex: 3,
  },
  flex_4:{
    flex:4
  },
  flex_5: {
    flex: 5,
  },
  flex_6:{
    flex:6
  },
  //positions
  absolute: {
    position: 'absolute',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsRight: {
    alignItems: 'flex-end',
  },
  alignViaColumn: {
    flexDirection: 'column',
  },
  alignViaRow: {
    flexDirection: 'row',
  },
  alignViewCenter: {
    justifyContent: 'center',
  },
  alignViewSplit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyFlexEnd: {
    justifyContent: 'flex-end',
  },

  //font weight

  font_bold:{
    fontWeight: 'bold'
  },
  font_med:{
    fontWeight: "500",
  },


  //fontsize
  font_40:{
    fontSize: 40,
  },
  font_32:{
    fontSize: 32,
  },
  font_30:{
    fontSize: 30,
  },
  font_28:{
    fontSize: 28,
  },
  font_24:{
    fontSize: 24,
  },
  font_22:{
    fontSize: 22,
  },
  font_20:{
    fontSize: 20,
  },
  font_18:{
    fontSize: 18,
  },
font_14:{
  fontSize: 14
},

  primary_button: {
    width: moderateScale(353),
    backgroundColor: colors.primary_background,
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(45),
    marginVertical: verticalScale(30),
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(20),
    borderRadius: moderateScale(15),
    alignSelf: 'center',
  },
  primary_button_text: {
    color: colors.white,
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Regular',
  },
  secondary_button: {
    width: moderateScale(361),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(45),
    marginVertical: verticalScale(20),
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(20),
    borderRadius: moderateScale(5),
    alignSelf: 'center',
  },
  secondary_button_text: {
    color: colors.primary_background,
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Regular',
  },

  optionText1:{
    fontSize: moderateScale(32),
    color:colors.black,
    fontWeight: '900'
  },
  optionText2:{
    fontSize: moderateScale(32),
    color:colors.deSelected,
    fontWeight: '700'
  },
  textInput:{
    backgroundColor: colors.grey,
    height:verticalScale(71),
    width: horizontalScale(353),
    borderRadius: moderateScale(15),
    marginTop: verticalScale(20)
  },
  onBoardingTextInputImage:{
    height: moderateScale(24),
    width: moderateScale(24), 
    resizeMode: 'contain', 
    marginRight: horizontalScale(22)
  },
  customBorderTop:{
    borderTopWidth: 2,
    borderColor: '#6DC3E8',
    width: '80%'
  },
  customBorderBottom:{
    borderBottomWidth: 2,
    borderColor: '#6DC3E8',
    width: '100%'
  },

  // Custom counter
  counterTouchable:{
    height:moderateScale(25),
    width: moderateScale(25),
    borderRadius: moderateScale(25),
    backgroundColor: '#8FCCE7',
    alignItems: 'center',
    marginHorizontal: horizontalScale(14) 
  },
  //searchbar
  imageSmall: {
    height: moderateScale(18),
    width: moderateScale(18),
  },
  searchContainer: {
    borderRadius: moderateScale(15),
    paddingHorizontal: horizontalScale(12),
    marginHorizontal: horizontalScale(10),
    borderWidth: 0.5,
    borderColor: colors.black,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },

  //isPending
  pendingBox:{
    width: moderateScale(353),
    backgroundColor: '#fa5b3d',
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(45),
    marginVertical: verticalScale(30),
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(20),
    borderRadius: moderateScale(15),
    alignSelf: 'center',
  },
  notPendingBox:{
    width: moderateScale(353),
    backgroundColor: '#30D5C8',
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(45),
    marginVertical: verticalScale(30),
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(20),
    borderRadius: moderateScale(15),
    alignSelf: 'center',
  }

})