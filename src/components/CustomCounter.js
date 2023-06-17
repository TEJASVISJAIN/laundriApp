import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles';

const CustomCounter = () => {
  const [counter,setCounter] = useState(0);
  return (
    <View style={[styles.alignViaRow, styles.alignItemsCenter,{marginRight: 60}]}>
      <TouchableOpacity onPress={e=>setCounter(counter < 1 ? 0 : counter-1)} style={[styles.counterTouchable, styles.alignItemsCenter]}>
        <Text style={[styles.colorWhite,styles.font_18]}>-</Text>
      </TouchableOpacity>
      
      <Text style={[styles.colorPrimary, styles.font_22]}>{counter}</Text>
      
      <TouchableOpacity onPress={e=>setCounter(counter+1)} style={[styles.counterTouchable, styles.alignItemsCenter]}>
        <Text style={[styles.colorWhite,styles.font_18]}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomCounter;