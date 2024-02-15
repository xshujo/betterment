import React from 'react';
import { StyleSheet, View } from 'react-native';
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
    alignItems: 'center',
  },
});
