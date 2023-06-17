import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { horizontalScale, verticalScale } from '../../styles/mixins'
import CustomItem from '../../components/CustomItem'
import { historyDetails } from '../../actions/otherActions'
import { changeVariable } from '../../actions'
import styles from '../../styles'
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native'


const OrderScreen = props => {
  const [shirt, setShirt] = useState(0);
  const [pants, setPants] = useState(0);
  const navigation = useNavigation();
  
  const getdetails = () => { 
    console.log("Button pressed")
    props.historyDetails(props.id, navigation);
  }
  return (
    <ScrollView contentContainerStyle={[styles.alignItemsCenter, {flex: 1, padding: 10},]}>

      <View style={[styles.alignViaRow,styles.paddingH_20, styles.alignItemsCenter]}>
        <View>
          <Text style={[styles.colorPrimary, styles.font_30,styles.font_bold, styles.font_med]}>
            Hi {props.name} !
          </Text>
          <Text style={[styles.colorPrimary,styles.marginT_10]}>
            What do you need washed
          </Text>
          <Text style={[styles.colorPrimary]}>
            today?
          </Text>
        </View>
        <View style={[styles.marginL_13]}>
          <Image source={require("../../assets/photo.png")} style={{height: 175, resizeMode:'contain', width: 180.12}} />
        </View>
      </View>

      {/* List */}

      <View style={[styles.flex_1, {padding: 0}]}>
        <View style={[styles.alignViewSplit]}>
          <Text style={[styles.colorPrimary, styles.font_28,{marginLeft: horizontalScale(150)}]}>
            Item
          </Text>
          <Text style={[styles.colorPrimary, styles.font_28,{marginRight: horizontalScale(90)}]}>
            Quantity
          </Text>
        </View>
        {/* tshirt counter */}
        <View style={[styles.alignViewSplit, styles.alignItemsCenter, styles.marginV_15, ]}>
          <View style={[styles.marginR_28]}>
            <Image source={require('../../assets/t-shirt.png')} style={[styles.marginL_40,{marginLeft: horizontalScale(70)}]}/>
          </View>
          <Text style={[styles.colorPrimary, styles.font_20, styles.marginR_98]}>
            Tshirt/ Shirt
          </Text>
          <View style={[styles.alignViaRow, styles.alignItemsCenter,{marginRight: 60}]}>
            <TouchableOpacity onPress={e=>setShirt(shirt < 1 ? 0 : shirt-1)} style={[styles.counterTouchable, styles.alignItemsCenter]}>
              <Text style={[styles.colorWhite,styles.font_18]}>-</Text>
            </TouchableOpacity>
            
            <Text style={[styles.colorPrimary, styles.font_22]}>{shirt}</Text>
            
            <TouchableOpacity onPress={e=>setShirt(shirt+1)} style={[styles.counterTouchable, styles.alignItemsCenter]}>
              <Text style={[styles.colorWhite,styles.font_18]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* pants counter */}
        <View style={[styles.alignViewSplit, styles.alignItemsCenter, styles.marginV_15,]}>
          <View style={[styles.marginR_28]}>
            <Image source={require('../../assets/pants-jeans.png')} style={[styles.marginL_40, {marginLeft: horizontalScale(70)}]}/>
          </View>
          <Text style={[styles.colorPrimary, styles.font_20, styles.marginR_98]}>
            Pants/ Jeans
          </Text>
          <View style={[styles.alignViaRow, styles.alignItemsCenter,{marginRight: horizontalScale(65)}]}>
            <TouchableOpacity onPress={e=>setPants(pants < 1 ? 0 : pants-1)} style={[styles.counterTouchable, styles.alignItemsCenter]}>
              <Text style={[styles.colorWhite,styles.font_18]}>-</Text>
            </TouchableOpacity>
            
            <Text style={[styles.colorPrimary, styles.font_22]}>{pants}</Text>
            
            <TouchableOpacity onPress={e=>setPants(pants+1)} style={[styles.counterTouchable, styles.alignItemsCenter]}>
              <Text style={[styles.colorWhite,styles.font_18]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      <TouchableOpacity 
        style={[styles.primary_button, {marginTop: verticalScale(55)}]}
        onPress={
          ({e})=> {
            if((shirt + pants) > 10){
              alert("You can only order 10 items at a time")
            }
            else if(shirt == 0 && pants == 0){
              alert("Add some clothes before ordering")
            }
            else{
              navigation.navigate("QRScreen",{_shirt: shirt, _pants: pants, _id: props.id})
            }
          }
        }
      >
        <TouchableOpacity >
          <Text style={[styles.primary_button_text,]}>Place Order</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* history */}
      <TouchableOpacity 
        style={[styles.primary_button, {marginTop: verticalScale(20)}]}
        onPress={getdetails}
      >
        <TouchableOpacity >
          <Text style={[styles.primary_button_text,]}> Order History</Text>
        </TouchableOpacity>
      </TouchableOpacity>

    </ScrollView>
  )
}

const mapStateToProps = state => {
  return {
    name: state.variables.name,
    id: state.variables.uid,
    
  };
};
export default connect(mapStateToProps, {
  changeVariable,
  historyDetails
})(OrderScreen);

