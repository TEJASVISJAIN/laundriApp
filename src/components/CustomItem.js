import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles'
import CustomCounter from './CustomCounter'

const CustomItem = ({source,label}) => {
  return (
    <View style={[styles.alignViewSplit, styles.alignItemsCenter, styles.marginV_15, ]}>
      <View style={[styles.marginR_28]}>
        <Image source={source} style={[styles.marginL_40]}/>
      </View>
      <Text style={[styles.colorPrimary, styles.font_20, styles.marginR_98]}>
        {label}
      </Text>
      <CustomCounter  />
    </View>
  )
}

export default CustomItem