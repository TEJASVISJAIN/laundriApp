import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../styles'
import { verticalScale } from '../../styles/mixins'
import { useNavigation } from '@react-navigation/native'

const OrderSuccess = () => {
  const navigation = useNavigation()
  return (
    <View style={[styles.container, styles.alignItemsCenter]}>
      <Text style={[styles.font_bold, styles.font_40]}>OrderSuccess</Text>
    
      <TouchableOpacity 
          style={[styles.primary_button, {marginTop: verticalScale(55), borderColor: styles.colorWhite, borderWidth: 1}]}
          onPress={
            e=>{
              navigation.goBack()
            }}
        >
        <View>
          <Text style={[styles.primary_button_text]}>Return to Order Screen</Text>
        </View>
      </TouchableOpacity>
  </View>
  )
}

export default OrderSuccess