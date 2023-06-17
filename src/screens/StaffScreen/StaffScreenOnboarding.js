import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { verticalScale } from '../../styles/mixins'

import styles from '../../styles'

const StaffScreenOnboarding = () => {
  return (
    <View style={[styles.container, styles.alignItemsCenter]}>
      <Text style={[styles.font_32, styles.font_bold]}>Wecome Staff Member</Text>
      <TouchableOpacity 
        style={[styles.primary_button, {marginTop: verticalScale(55)}, {backgroundColor: 'white'}]}
        onPress={e=>this.e}
      >
        <TouchableOpacity >
          <Text style={[styles.primary_button_text, styles.colorPrimary]}>Scan Here</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  )
}

export default StaffScreenOnboarding