import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../styles/mixins';
import styles from '../../styles';
import { useNavigation } from '@react-navigation/native';
import SignupInterface from '../RegisterScreen/SignupInterface'


const AdminScreen = () => {

  return (
    
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      > 
      <View onPress={()=>Keyboard.dismiss()} style={[styles.container]} >
        <View style={[styles.flex_1, styles.alignItemsCenter,styles.marginT_50]}>
          <Text style={[styles.font_32, styles.font_bold]}>Welcome Admin!</Text>
          <Text style={[styles.font_24, styles.font_med]}>Please fill in details of new users</Text>
        </View>
        <View style={[styles.flex_5, styles.whiteBackground,{borderTopRightRadius: moderateScale(40), borderTopLeftRadius:moderateScale(40) }]}>
          <View style={[styles.alignViewSplit, {marginTop: verticalScale(56), paddingHorizontal: horizontalScale(35)}]}>
            
          </View>
           <SignupInterface />
        </View>
        
      </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default AdminScreen;
