import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { verticalScale } from '../../styles/mixins'
import { useState } from 'react'
import { connect } from 'react-redux';
import { slotBooking } from '../../actions/otherActions'
import { changeVariable } from '../../actions/variables'
import { useNavigation } from '@react-navigation/native'

const SlotBooking = (props) => {
  const navigation = useNavigation();
  const [sid, setSid] = useState('')

  const bookSlot=()=>{
    console.log("Button Pressed");
    props.slotBooking(sid,props.id,navigation)
  }

  return (
    <View style={[styles.container, styles.alignItemsCenter]}>
      <View style={[styles.marginT_30, {flex: 2}]}>
        <Text style={[styles.font_30, styles.font_bold]}>Slot Booking</Text>
        <Text style={[styles.font_22, styles.font_bold]}>Each Slot is for 30 mins.</Text>
      </View>
      
        {/* slots  */}
      <View style={{flex: 3}}>
          <TouchableOpacity 
            onPress={e=>setSid('6371f565a82eeaaf33b8d6d9')}
            style={[styles.alignItemsCenter, styles.alignViewCenter, styles.alignViewSplit,{ padding: 20, borderColor: 'black', borderWidth: 3, borderRadius: 1}, styles.marginT_30, sid =='6371f565a82eeaaf33b8d6d9'? {backgroundColor: 'green'}: {backgroundColor: 'red'}]}>
            <TouchableOpacity style={[styles.alignItemsCenter, styles.alignViaRow]}>
              <View style={[styles.alignItemsCenter, {height: 10, width: 10, backgroundColor: 'black', borderRadius: 10}]} />
              <View styles={[styles.customBorderBottom, {borderColor: 'black'},styles.marginL_35]}>
                <Text style={[styles.colorBlack, styles.font_24, styles.font_bold, styles.marginL_35]}>
                  {'09:00 AM'}
                </Text>
              </View>

            </TouchableOpacity>

            
          </TouchableOpacity>
          {/* slot 2 */}
          <TouchableOpacity 
            onPress={e=>setSid('637e2ab10fc8ba03d191ce36')}
            style={[styles.alignItemsCenter, styles.alignViewCenter, styles.alignViewSplit,{ padding: 20, borderColor: 'black', borderWidth: 3, borderRadius: 1}, styles.marginT_30, sid =='637e2ab10fc8ba03d191ce36'? {backgroundColor: 'green'}: {backgroundColor: 'red'}]}>
            <TouchableOpacity style={[styles.alignItemsCenter, styles.alignViaRow]}>
              <View style={[styles.alignItemsCenter, {height: 10, width: 10, backgroundColor: 'black', borderRadius: 10}]} />
              <View styles={[styles.customBorderBottom, {borderColor: 'black'},styles.marginL_35]}>
                <Text style={[styles.colorBlack, styles.font_24, styles.font_bold, styles.marginL_35]}>
                  {'12:00 PM'}
                </Text>
              </View>

            </TouchableOpacity>
          </TouchableOpacity>
           
      </View>
      <TouchableOpacity 
        style={[styles.primary_button, {marginTop: verticalScale(55)}, {backgroundColor: 'white'}]}
        onPress={e=>{
          if(sid === ''){
            alert("Select a slot before booking")
          }
          else{
            bookSlot()
          }
          
        }
          
        }
      >
        <TouchableOpacity >
          <Text style={[styles.primary_button_text, styles.colorPrimary]}>Book Your Slot</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    id : state.variables.uid
  };
};

export default connect(mapStateToProps, {
  changeVariable,
  slotBooking
})(SlotBooking);
