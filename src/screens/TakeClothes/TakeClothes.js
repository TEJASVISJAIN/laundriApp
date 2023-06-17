import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../styles/mixins';
import { connect } from 'react-redux';
import styles from '../../styles';

const TakeClothes = (props) => {

  const source = 'http://api.qrserver.com/v1/create-qr-code/?data='+props.id +'&size=200x200';
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View onPress={()=>Keyboard.dismiss()} style={[styles.container]} >
        <View style={[styles.flex_1, styles.alignItemsCenter, styles.alignViewCenter]}>
          <Text style={[{fontSize: 32}, styles.font_bold]}>
          Take Clothes
          </Text>
        </View>
        <View style={[styles.whiteBackground,{borderTopRightRadius: moderateScale(40), borderTopLeftRadius:moderateScale(40),}, styles.flex_4]}>
          <View style={[{marginTop: verticalScale(56), paddingHorizontal: horizontalScale(35)}]}>
            <Text style={[styles.font_22, styles.colorPrimary]}>The Staff will scan this qr code</Text>
            <Image source={{
          uri: source,
        }} label="T Shirts/Shirts" style={[ styles.alignItemsCenter, {height: 250, width: 250}, styles.marginL_35, styles.marginT_30]}/>
            <Text style={[styles.colorBlack, styles.font_22,styles.marginT_30, styles.font_bold]}>

            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const mapStateToProps = state => {
  return {
    id : state.variables.uid
  };
};

export default connect(mapStateToProps)(TakeClothes);
