import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


import OnBoarding from './OnBoarding.js';
import HomeScreen from './HomeScreen.js';
import AboutScreen from './AboutScreen.js';
import DeveloperScreen from './DeveloperScreen.js';
import CrispyPataScreen from './CrispyPataScreen.js';
import LutongBahayScreen from './LutongBahayScreen.js';
import PanghimagasScreen from './PanghimagasScreen.js';
import BatchoyScreen from './BatchoyScreen.js';
import EskabecheScreen from './EskabecheScreen.js';
import DaingScreen from './DaingScreen.js';
import NilagaScreen from './NilagaScreen.js';
import SinigangScreen from './SinigangScreen.js';
import ArrozCaldoScreen from './ArrozCaldoScreen.js';
import YemaScreen from './YemaScreen.js';
import HalohaloScreen from './HaloHaloScreen.js';
import GinataangBiloScreen from './GinataangBiloScreen.js';



const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


function BotTabs() {
  return (
    <Tab.Navigator initialRouteName="Home"
    activeColor="#0cf2a2"
    inactiveColor="white"
    sceneAnimationEnabled={true}
    barStyle={{ backgroundColor: '#0c82e8' }}>

      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="About" component={AboutScreen} options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => (
            <Icon name="information" color={color} size={26} />
          ),
        }}  />
      <Tab.Screen name="Developer" component={DeveloperScreen} options={{
          tabBarLabel: 'Developers',
          tabBarIcon: ({ color, size }) => (
            <Icon name="face-profile" color={color} size={26} />
          ),
        }}   />
    </Tab.Navigator>
  );
}


export default class  App extends Component  {
  render()  
  {    

  return (
    <NavigationContainer >
      <Stack.Navigator>
      
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{headerShown: false}} /> 
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Developer" component={DeveloperScreen} options={{headerShown: false}}  />
        <Stack.Screen name="LutongBahay" component={LutongBahayScreen} options={{headerShown: false}}  />
        <Stack.Screen name="Panghimagas" component={PanghimagasScreen} options={{headerShown: false}}  />
        <Stack.Screen name="CrispyPata" component={CrispyPataScreen} options={{headerShown: false}}  />
        <Stack.Screen name="Batchoy" component={BatchoyScreen} options={{headerShown: false}}  />
        <Stack.Screen name="Eskabeche" component={EskabecheScreen} options={{headerShown: false}}  />
        <Stack.Screen name="Daing" component={DaingScreen} options={{headerShown: false}}  />
        <Stack.Screen name="Sinigang" component={SinigangScreen} options={{headerShown: false}}  />
        <Stack.Screen name="Nilaga" component={NilagaScreen} options={{headerShown: false}}  />
        <Stack.Screen name="ArrozCaldo" component={ArrozCaldoScreen} options={{headerShown: false}}  />
        <Stack.Screen name="Yema" component={YemaScreen} options={{headerShown: false}}  />
        <Stack.Screen name="Halohalo" component={HalohaloScreen} options={{headerShown: false}}  />
        <Stack.Screen name="GinataangBilo" component={GinataangBiloScreen} options={{headerShown: false}}  />
        <Stack.Screen name="BotTabs" component={BotTabs} options={{headerShown: false}} />
        
        
        </Stack.Navigator>
       
      </NavigationContainer>
    
  );
}
}

