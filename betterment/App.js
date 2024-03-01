import React from 'react';

import HomeScreen from './src/screens/HomeScreen';
import LogScreen from './src/screens/LogScreen';
import JournalScreen from './src/screens/JournalScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Footer from './src/components/Footer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Log' component={LogScreen} />
        <Tab.Screen name='Journal' component={JournalScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
      <Footer />
    </NavigationContainer>
  );
}