import { View, Text, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { connect } from 'react-redux';
import { changeVariable } from '../../actions';
import styles from '../../styles'
import CustomHistoryEntry from '../../components/CustomHistoryEntry'
import { useNavigation } from '@react-navigation/native';
import { verticalScale } from '../../styles/mixins';



const History = props => {
  console.log("order", props.order)
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {backgroundColor: 'white'}, styles.alignItemsCenter]}>
      <View>
        <Text style={[styles.colorBlack, styles.font_40]}>
       History  
        </Text>
      </View>

      {/* history list */}
      {props.order === undefined && (<View>
        <Text style={[styles.font_28, styles.font_bold, styles.colorBlack]}>
          You have no previous order history
        </Text>
      </View>)
      }
      {props.order !== undefined && (<FlatList
        data={props.order}
        renderItem={({ item }) => < CustomHistoryEntry order={item.clothes} />}
        keyExtractor={item => item._id}
      /> )}
      {/* Refresh history button */}
      <TouchableOpacity
        style={[styles.primary_button, {marginTop: verticalScale(55)}]}
        onPress={( e=> navigation.goBack())}
      >
        <TouchableOpacity>
          <Text style={[styles.primary_button_text]}>Go Back</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  )
}
const mapStateToProps = state => {
  return {
    id: state.variables.uid,
    order: state.variables.orders
  };
};
export default connect(mapStateToProps, {
  changeVariable,
})(History);


