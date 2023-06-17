import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../styles/mixins';
import styles from '../../styles';
import { useNavigation } from '@react-navigation/native';
import LoginInterface from '../LoginScreen/LoginInterface';
import SignupInterface from '../RegisterScreen/SignupInterface'


const Onboarding = () => {
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
      <View onPress={()=>Keyboard.dismiss()} style={[styles.container]} >
        <View style={[styles.flex_1, styles.alignItemsCenter, styles.marginT_50]}>
          <Text style={[styles.font_32]}>Welcome to Laundri App</Text>
          <Text style={[styles.font_28, styles.font_bold]}>Log In</Text>
        </View>
        <View style={[styles.flex_1, styles.whiteBackground,{borderTopRightRadius: moderateScale(40), borderTopLeftRadius:moderateScale(40), }, styles.alignItemsCenter]}>
          <View style={[styles.alignViewSplit, {marginTop: verticalScale(56), paddingHorizontal: horizontalScale(35)}]}>
          </View>
          <LoginInterface />
        </View>
        
      </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Onboarding;
