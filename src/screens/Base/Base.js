import React from 'react';
import {
  Image, View, Text, TouchableOpacity, Settings,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../styles';

import Octicons from 'react-native-vector-icons/Octicons'

import Onboarding from '../OnboardingScreen/Onboarding';
import QRScreen from '../QRScreen/QRScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import OrderScreen from '../OrderScreen/OrderScreen';
import History from '../History/History';
import OrderSuccess from '../OrderScreen/OrderSuccess';
import SettingsScreen from '../Settings/SettingsScreen';
import Splash from '../Splash/Splash';
import SlotBooking from '../SlotBooking/SlotBooking';
import TakeClothes from '../TakeClothes/TakeClothes';
import AdminScreen from '../AdminScreen/AdminScreen';
import StaffScreenOnboarding from '../StaffScreen/StaffScreenOnboarding';
import AlreadyBooked from '../SlotBooking/AlreadyBooked';
import SlotSuccess from '../SlotBooking/SlotSuccess';


const Order = createStackNavigator();
const AuthorizationStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Root = createStackNavigator();
const AdminBottom = createBottomTabNavigator();
const StaffTab = createBottomTabNavigator();
const Slot = createStackNavigator();

function AuthStack(){
  return (
    
    <AuthorizationStack.Navigator initialRouteName="Onboarding">
      <AuthorizationStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <AuthorizationStack.Screen
        name="AdminBottomTabNav"
        component={AdminBottomTabNav}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <AuthorizationStack.Screen
        name="StaffBottomTabNav"
        component={StaffBottomTabNav}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </AuthorizationStack.Navigator>
  )
}

function OrderFlow(){
  return(
    <Order.Navigator initialRouteName="OrderScreen">
      <Order.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Order.Screen  
        name="QRScreen"
        component={QRScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Order.Screen  
        name="History"
        component={History}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </Order.Navigator>
  )
}

function SlotFlow(){
  return(
    <Slot.Navigator initialRouteName="SlotBooking">
      <Order.Screen
        name="SlotBooking"
        component={SlotBooking}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Slot.Screen  
        name="AlreadyBooked"
        component={AlreadyBooked}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Slot.Screen  
        name="SlotSuccess"
        component={SlotSuccess}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </Slot.Navigator>
  )
}

const BottomTabNav = () => {
  return (
      <Tab.Navigator 
      screenOptions={{  
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#fff',
        tabBarStyle:{
          backgroundColor: '#8fcce8'
        }
      }}>
        
        <Tab.Screen
           component={OrderFlow} 
           name="OrderFlow"
           options={{
            tabBarIcon:()=>(
              <Octicons name="list-ordered" size={25} />
            )
            
           }}
        />
        <Tab.Screen 
          component={SlotFlow} 
          name="SlotFlow"
        />
        <Tab.Screen 
          component={TakeClothes} 
          name="TakeClothes"
        />
        <Tab.Screen 
          component={SettingsScreen} 
          name="SettingsScreen"
        />
      </Tab.Navigator>
  );
};

const AdminBottomTabNav = () => {
  return (
      <AdminBottom.Navigator
      initialRouteName="AdminScreen" 
      screenOptions={{  
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#fff',
        tabBarStyle:{
          backgroundColor: '#8fcce8'
        }
      }}>
        
        <AdminBottom.Screen
           component={AdminScreen} 
           name="AdminScreen"
        />
        
        <AdminBottom.Screen 
          component={SettingsScreen} 
          name="SettingsScreen"
        />
      </AdminBottom.Navigator>
  );
};

const StaffBottomTabNav = () => {
  return (
      <StaffTab.Navigator
      initialRouteName="AdminScreen" 
      screenOptions={{  
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#fff',
        tabBarStyle:{
          backgroundColor: '#8fcce8'
        }
      }}>
        
        <StaffTab.Screen
           component={StaffScreenOnboarding} 
           name="StaffScreenOnboarding"
        />
        
        <StaffTab.Screen 
          component={SettingsScreen} 
          name="SettingsScreen"
        />
      </StaffTab.Navigator>
  );
};
function Flow(){
  return(
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={Splash}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen  
        name="BottomTabNav"
        component={BottomTabNav}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="Staff"
        component={HomeScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="Admin"
        component={Onboarding}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </Stack.Navigator>
  )
}
function Base() {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{
        headerShown: false
      }}>
        <Root.Screen component={Flow} name="Flow" />
        {/* <Root.Screen component={StaffCamera} name="StaffCamera" /> */}
      </Root.Navigator>
    </NavigationContainer>
  );
}

export default Base;
