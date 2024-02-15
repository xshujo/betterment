import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Hello World
      </Text>
      {/* Temp */}
      <HomeScreen />
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
