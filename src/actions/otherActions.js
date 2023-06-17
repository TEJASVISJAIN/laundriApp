import { baseUrl } from './variables';
import { CHANGEVARIABLE } from './type';
import { storeData } from './async-storage';
import { CommonActions } from '@react-navigation/native';

export const historyDetailsHelper = ({
  uid, navigation, dispatch
}) => {
  const headers = { 'Content-Type': 'application/json' };
  const config = { method: 'GET', headers };
  console.log('uid', uid,);
  const url = `${baseUrl}orderDetails/user_id=${uid}`;
  try {
    fetch(url, config)
      .then(response => response.json())
      .then(responseJson => {
        console.log('status', responseJson.status);
        if (responseJson.status === 200) {
          dispatch({ type: CHANGEVARIABLE, payload: { key: 'orders', value: responseJson.info } });
          console.log('clothes', responseJson.info);
          navigation.navigate('History')
        }
      });
  } catch (err) {
    console.log('err', err);
  }
};

export const historyDetails = (uid,navigation) => dispatch => {
  historyDetailsHelper({
    uid,navigation, dispatch,
  });
};

export const slotBookingHelper = async ({ sid,uid, navigation, dispatch }) => {
  // const body = {
  //   slot_id: sid,
  //   user_id: uid,
  // };
  console.log('data'  , uid,sid);
  const headers = { 'Content-Type': 'application/json'};
  const config = { method: 'POST', headers };
  const url = `${baseUrl}bookSlot/slot_id=`+sid+'&user_id='+uid;
  try {
    fetch(url, config)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === 200 ) {
          console.log('api res', responseJson.status);
          console.log('Successfully Logged in');
          navigation.navigate('SlotSuccess')
          
        }
        else if(responseJson.status == "406"){
          navigation.navigate("AlreadyBooked")
        }
      })
      .catch(err => {
        console.log('ee', err);
      });
  } catch (err) {
    console.log('err', err);
  }
};

export const slotBooking = (sid,uid, navigation) => dispatch => {
  slotBookingHelper({ sid,uid, navigation, dispatch });
};