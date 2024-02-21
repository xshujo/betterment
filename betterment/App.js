import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import LogScreen from './src/screens/LogScreen';
import JournalScreen from './src/screens/JournalScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Footer from './src/components/Footer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Log' component={LogScreen} />
        <Stack.Screen name='Journal' component={JournalScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
    // <View style={styles.container}>
    //   <HomeScreen />
    //   <JournalScreen />
    //   <Footer />
    // </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#f3e7d8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
