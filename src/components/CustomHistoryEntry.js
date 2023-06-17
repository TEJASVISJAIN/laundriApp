import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, {useState} from 'react'
import ClothItem from './ClothItem'
import styles from '../styles'
import { verticalScale } from '../styles/mixins'

const CustomHistoryEntry = ({order}) => {
  console.log(order)
  const [isPending, setIsPending] = useState(false);
  if(order.status == '1'){
    setIsPending(true)
  }
  return (
    <View style={[isPending? styles.pendingBox: styles.notPendingBox, styles.customBorderBottom, styles.alignItemsCenter, styles.alignViewSplit, {padding: 50, height: verticalScale(60)}]}>
      <FlatList
        data={order}
        renderItem={({ item }) => <ClothItem name={item.name} quantity={item.quantity}/>}
        keyExtractor={item => item._id}
      />
    </View>
  )
}

export default CustomHistoryEntry