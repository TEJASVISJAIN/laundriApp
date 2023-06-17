import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from '../styles'

const ClothItem = ({quantity, name}) => {
  return (
    <View style={[styles.alignViaRow]}>
      <Text style={[styles.colorBlack, styles.font_28]}>{quantity}</Text>
      <Text style={[styles.colorBlack, styles.font_28, styles.marginL_20]}>{name}</Text>
    </View>
  )
}

export default ClothItem