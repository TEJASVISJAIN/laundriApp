/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React from 'react';
 import { LogBox } from 'react-native';
 import { createStore, applyMiddleware } from 'redux';
 import { Provider } from 'react-redux';
 import reducers from './src/reducer';
 import thunk from 'redux-thunk';

import Onboarding from './src/screens/OnboardingScreen/Onboarding';
import QRScreen from './src/screens/QRScreen/QRScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CustomCounter from './src/components/CustomCounter';
import CustomItem from './src/components/CustomItem';
import OrderScreen from './src/screens/OrderScreen/OrderScreen';
import History from './src/screens/History/History';
import Base from './src/screens/Base/Base';


const App = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
        <Base />  
    </Provider>
  );
};


export default App;
