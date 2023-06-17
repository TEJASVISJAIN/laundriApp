import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { verticalScale } from '../../styles/mixins'

import styles from '../../styles'
import { useNavigation } from '@react-navigation/native'

const AlreadyBooked = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, styles.alignItemsCenter]}>
      <Text>Already Booked</Text>

      <TouchableOpacity 
        style={[styles.secondary_button, {marginTop: verticalScale(55)}]}
        onPress={
          e=>{
              navigation.goBack()
          }}
      >
        <View>
          <Text style={[styles.secondary_button_text]}>Back to Slot Booking Screen</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AlreadyBooked