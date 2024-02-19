import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import JournalScreen from './src/screens/JournalScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Hello World
      </Text>
      {/* Temp */}
      <HomeScreen />
      <JournalScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3e7d8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
