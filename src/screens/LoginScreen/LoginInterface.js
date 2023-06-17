import React, { useState } from 'react';
import { View, Text, TextInput,Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { changeVariable, loginUser } from '../../actions';
import { useNavigation } from '@react-navigation/native';
import { horizontalScale, moderateScale, verticalScale } from '../../styles/mixins';
import styles from '../../styles';

const LoginInterface = props =>{
  
  const [_phone_no,setPhoneNo] = useState('');
  const [key,setKey] = useState('');

  const handleLogin = () => {
    const data = {
      phone_no: _phone_no,
      password: key,
    };
    props.loginUser(data, navigation);
  }

  const navigation = useNavigation();
  return(
    <View>
      <Text style={[styles.colorBlack,{paddingHorizontal: horizontalScale(35), marginTop: verticalScale(8)}]}>
        Log in with your phone number and password
      </Text>
      {/* Inputs */}
      
      <View style={[styles.marginL_20,styles.textInput, styles.alignViewSplit]}>
        <TextInput
          style={[styles.colorBlack, {padding: moderateScale(20)}]}
          placeholder='Phone number'
          placeholderTextColor={'lightgray'}
          onChangeText={e=>setPhoneNo(e)}
          keyboardType={'phone-pad'}
        />
      </View>
      <View style={[styles.marginL_20,styles.textInput, styles.alignViewSplit]}>
        <TextInput
          secureTextEntry={true}
          placeholder='Password'
          style={[styles.colorBlack, {padding: moderateScale(20), width: horizontalScale(300)}]}
          placeholderTextColor={'lightgray'}
          onChangeText={e=>setKey(e)}
        />
      </View>

      {/* Button */}

      <TouchableOpacity 
        style={[styles.primary_button, {marginTop: verticalScale(55)}]}
        onPress={
          e=>{
            handleLogin(e)
            // navigation.navigate("BottomTabNav")
          }}
      >
        <View>
          <Text style={[styles.primary_button_text]}>Log In</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}


// const mapStateToProps = state => {
//   const {uid} = state.variables
//   return {
//     uid,
//   };
// };

export default connect(null, {
  changeVariable,
  loginUser
})(LoginInterface);
