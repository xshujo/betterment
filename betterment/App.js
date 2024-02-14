import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3e7d8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
