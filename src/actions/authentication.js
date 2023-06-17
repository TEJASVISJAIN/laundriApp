import { baseUrl } from './variables';
import { CHANGEVARIABLE } from './type';
import { storeData } from './async-storage';
import { Alert } from 'react-native';

export const registerUserHelper = async ({ data, dispatch }) => {

  const body = {
    name: data.name,
    roll_no: data.roll_no,
    password: data.password,
    role: data.role,
    hostel: data.hostel,
    phone_no: data.phone_no
  };
  console.log('data'  , data);
  const headers = { 'Content-Type': 'application/json'};
  const config = { method: 'POST', body: JSON.stringify(body), headers };
  const url = `${baseUrl}register`;
  try {
    fetch(url, config)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === 201) {
          storeData('userStatus', 'details_complete');
          console.log('api res', responseJson);
          console.log("Registration successful");
        }
        else if(responseJson.status == 400){
          console.log("Registration failed");
        }
        else if(responseJson.status == 401){
          console.log(responseJson.status);
        }
        else{
          console.log(responseJson);
        }
      })
      .catch(err => {
        console.log('ee', err);
      });
  } catch (err) {
    console.log('err', err);
  }
};

export const registerUser = (data) => dispatch => {
  registerUserHelper({ data, dispatch });
};

export const loginUserHelper = async ({ data, dispatch, navigation }) => {
  const body = {
    phone_no: data.phone_no,
    password: data.password,
  };
  console.log('data'  , data);
  const headers = { 'Content-Type': 'application/json'};
  const config = { method: 'POST', body: JSON.stringify(body), headers };
  const url = `${baseUrl}login`;
  try {
    fetch(url, config)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === 200 && responseJson.user.phone_no === data.phone_no && responseJson.user.password == data.password) {
          dispatch({ type: CHANGEVARIABLE, payload: { key: 'uid', value: responseJson.user._id }})
          dispatch({ type: CHANGEVARIABLE, payload: { key: 'orders', value: responseJson.orders }})
          dispatch({ type: CHANGEVARIABLE, payload: { key: 'name', value: responseJson.user.name }})
          storeData('user_id',  responseJson.user._id);
          storeData('userStatus', 'details_complete');
          console.log('api res', responseJson);
          console.log('Successfully Logged in');
          if(responseJson.user.role == "0"){
            navigation.reset({
              index: 0,
              routes: [{ name: 'BottomTabNav' }],
            });
          }
          else if(responseJson.user.role == "1"){
            navigation.reset({
              index: 0,
              routes: [{ name: 'StaffBottomTabNav' }],
            });
          }
          else{
            navigation.reset({
              index: 0,
              routes: [{ name: 'AdminBottomTabNav' }],
            });
          }
        }
        else{
          console.log("Either info was wrong, or api wasnt hit, or user doesnt deosnt exist");
          Alert.alert("Either info was wrong, or api wasnt hit, or user doesnt deosnt exist")
        }
      })
      .catch(err => {
        console.log('ee', err);
      });
  } catch (err) {
    console.log('err', err);
  }
};

export const loginUser = (data, navigation) => dispatch => {
  loginUserHelper({ data, navigation, dispatch });
};

export const getUidHelper = ({ number, dispatch }) => {
  const headers = { 'Content-Type': 'application/json' };
  const config = { method: 'GET', headers };
  const url = `${baseUrl}userDetails/phone_no=${number}`;
  try {
    fetch(url, config)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === 200) {
          console.log('api res', responseJson);
          console.log('uid fetched', responseJson.data._id);
          dispatch({ type: CHANGEVARIABLE, payload: { key: 'uid', value: responseJson.data._id } });
        }
      });
  } catch (err) {
    console.log('err', err);
  }
};

export const getUid = (number) => dispatch => {
  getUidHelper({ number, dispatch });
};

