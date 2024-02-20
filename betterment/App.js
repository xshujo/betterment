import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import JournalScreen from './src/screens/JournalScreen';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Temp */}
      <HomeScreen />
      {/* <JournalScreen /> */}
      <Footer />
    </View>
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
