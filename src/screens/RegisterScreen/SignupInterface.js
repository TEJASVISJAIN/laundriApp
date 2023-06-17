import React, { useState} from 'react';
import { Alert } from 'react-native';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../styles/mixins';
import styles from '../../styles';
import { connect } from 'react-redux';
import { changeVariable, registerUser } from '../../actions';
import { useNavigation } from '@react-navigation/native';

const SignupInterface = props =>{

  const [_name,setName] = useState('');
  const [_password,setPassword] = useState('');
  const [_roll_no, setRollNo] = useState('');
  const [_phone_no, SetPhoneNumber] = useState('');
  const [_role, setRole] = useState('');

  const navigation = useNavigation();
  const handleRegister = (navigation) => {
    const data = {
      name: _name,
      roll_no: _roll_no,
      password: _password,
      role: _role,
      phone_no: _phone_no,
    };
    props.registerUser(data);
    props.changeVariable('username', _name);
    props.changeVariable('password', _password);
    props.changeVariable('roll_no', _roll_no);
    props.changeVariable('phone_no', _phone_no);
    props.changeVariable('role', _role);
    navigation.navigate('AdminScreen')
  };

  return(
    <ScrollView>
      <Text style={[styles.colorBlack,{paddingHorizontal: horizontalScale(35), marginTop: verticalScale(8)}]}>
        Here is the form 
      </Text>
      {/* Inputs */}
      {/* Name */}
      <View style={[styles.marginL_35,styles.textInput, styles.alignViewSplit]}>
        <TextInput
          style={[styles.colorBlack, {padding: moderateScale(20)}]}
          placeholder='John Doe'
          placeholderTextColor={'lightgray'}
          onChangeText={e=>setName(e)}
        />
      </View>
      {/* Roll No */}
      <View style={[styles.marginL_35,styles.textInput, styles.alignViewSplit]}>
        <TextInput
          // secureTextEntry={true}
          placeholder='Roll no'
          style={[styles.colorBlack, {padding: moderateScale(20)}]}
          placeholderTextColor={'lightgray'}
          onChangeText={e=>setRollNo(e)}
          keyboardType={'number-pad'}
        />
      </View>
      {/* Password */}
      <View style={[styles.marginL_35,styles.textInput, styles.alignViewSplit]}>
        <TextInput
          placeholder='Password'
          style={[styles.colorBlack, {padding: moderateScale(20)}]}
          placeholderTextColor={'lightgray'}
          onChangeText={e=>setPassword(e)}
        />
      </View>
      {/* Role */}
      <View style={[styles.marginL_35,styles.textInput, styles.alignViewSplit]}>
        <TextInput
          style={[styles.colorBlack, {padding: moderateScale(20)}]}
          placeholder='0 (Student) or 1(Staff) or 2(Admin)'
          placeholderTextColor={'lightgray'}
          onChangeText={e=>setRole(e)}
        />
      </View>
      {/*Phone number */}
      <View style={[styles.marginL_35,styles.textInput, styles.alignViewSplit]}>
        <TextInput
          style={[styles.colorBlack, {padding: moderateScale(20)}]}
          placeholder='Phone no'
          placeholderTextColor={'lightgray'}
          onChangeText={e=>SetPhoneNumber(e)}
          keyboardType={'number-pad'}
        />
      </View>
      {/* Button */}

      <TouchableOpacity 
        style={[styles.primary_button, {marginTop: verticalScale(30)}]}
        onPress={e=>{
          if(_name === ''|| _password === '' || _roll_no === '' || _phone_no === '' || _role === ''){
            Alert.alert('All the fields are required')
          }
          else{
            handleRegister(navigation)
          }
        }}
      >
        <View>
          <Text style={[styles.primary_button_text]}>Sign Up</Text>
        </View>
      </TouchableOpacity>

      <View>
        <Text>By continuing, you agree to out </Text>
      </View>
    </ScrollView>
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
  registerUser,
})(SignupInterface);
