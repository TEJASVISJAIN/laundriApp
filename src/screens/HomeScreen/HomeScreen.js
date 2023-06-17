import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const HomeScreen = props => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

// const mapStateToProps = state => {
//   const {username,uid} = state.variables
//   return {
//     username,
//     uid,
//   };
// };

export default connect(null)(HomeScreen);
