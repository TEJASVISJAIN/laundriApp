import { View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import React from 'react'
import Searchbar from '../../components/custom-searchbar'
import styles from '../../styles';
import { verticalScale } from '../../styles/mixins'
import { useNavigation } from '@react-navigation/native';

const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Done.')
}
const SettingsScreen = (props) => {
  const navigation = useNavigation()
  return (
    <View style={[styles.container, styles.alignItemsCenter, {backgroundColor: 'white'}]}>
      <View style={[styles.flex_2, styles.container, styles.alignItemsCenter,]}>
        <Text style={[styles.font_32, styles.font_bold]}> Settings Screen </Text>
      </View>
      <View style={[styles.flex_3]}>
        <TouchableOpacity 
          style={[styles.primary_button, {marginTop: verticalScale(55)}]}
          onPress={
            ({e})=> {
              clearAll()
              navigation.reset({
                index: 0,
                routes: [{ name: 'AuthStack' }],
              });
          }
          }
        >
          <TouchableOpacity >
            <Text style={[styles.primary_button_text,]}> Log Out </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default SettingsScreen