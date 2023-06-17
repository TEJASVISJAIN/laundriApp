import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { View } from 'react-native';
import { changeVariable } from '../../actions';
import { fetchData } from '../../actions/async-storage';
import { connect } from 'react-redux';
import { getUid } from '../../actions';


class SplashScreen extends Component {
  async componentDidMount() {
    const { navigation } = this.props;
    const firstTimeUser = await AsyncStorage.getItem('firstTimeUser');
    const userStatus = await AsyncStorage.getItem('userStatus');
    
    console.log('userStatus', userStatus);
    console.log('firstTimeUser', firstTimeUser);

    if(userStatus=='loggedin'){
      const getPhone = await fetchData('phone_no');
      this.props.getUid(getPhone);
    }

    if (firstTimeUser !== 'false') {
      navigation.navigate('AuthStack');
    } else if (userStatus === 'loggedin') {
      navigation.replace('BottomTabNav');
    } else if(userStatus == 'details_complete'){
      navigation.navigate('BottomTabNav');
    } else {
      navigation.replace('AuthStack');
    }
  }

  render() {
    return <View />;
  }
}
const mapStateToProps = state => {
  return {
    id: state.variables.id,
  };
};

export default connect(mapStateToProps, {
  changeVariable,
  getUid,
})(SplashScreen);
