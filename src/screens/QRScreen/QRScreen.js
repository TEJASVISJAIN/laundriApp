import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../styles/mixins';
import styles from '../../styles';

const QRScreen = ({route, navigation}) => {
  const { _shirt, _pants, _id } = route.params;
  const body = {
    id : _id,
    shirt: _shirt,
    pants: _pants
  };
  const source = 'http://api.qrserver.com/v1/create-qr-code/?data='+JSON.stringify(body)   +'&size=200x200';
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss}>
      <View onPress={()=>Keyboard.dismiss()} style={[styles.container]}>
        <View style={[styles.flex_1, styles.alignItemsCenter, styles.alignViewCenter]}>
          <Text style={[{fontSize: 32}, styles.font_bold]}>
          thank you for giving us your laundry
          </Text>
        </View>
        <View style={[styles.whiteBackground,{borderTopRightRadius: moderateScale(40), borderTopLeftRadius:moderateScale(40),}, styles.flex_2]}>
          <View style={[{marginTop: verticalScale(56), paddingHorizontal: horizontalScale(35)}]}>
            <Image source={{
          uri: source,
        }} label="T Shirts/Shirts" style={[ styles.alignItemsCenter, {height: 250, width: 250}, styles.marginL_20]}/>
            <Text style={[styles.colorBlack, styles.font_22,styles.marginT_30, styles.font_bold]}>
            please scan this QR code to collect you cloths form the laundry staff
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default QRScreen