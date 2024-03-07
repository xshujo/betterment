import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import LogScreen from '../screens/LogScreen';
import DiaryScreen from '../screens/DiaryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          header: () => <Header />,
          tabBarVisible: false,
        }}
        tabBar={() => <Footer />}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Tab.Screen name="Diary" component={DiaryScreen} options={{ title: 'Diary' }} />
        <Tab.Screen name="Log" component={LogScreen} options={{ title: 'Log' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
