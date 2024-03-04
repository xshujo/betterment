import React from 'react';
import { useFonts } from 'expo-font';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { Colors } from './constants/Colors';
import { Dim } from './constants/Dimensions';

import DiaryScreen from './screens/DiaryScreen';
import Footer from './components/Footer';
import Header from './components/Header';
import LogScreen from './screens/LogScreen';

export default function App() {
  // Load fonts before rendering the app
  const [loaded] = useFonts({
    'Nunito-Black': require('./assets/fonts/Nunito-Black.ttf'),
    'Nunito-BlackItalic': require('./assets/fonts/Nunito-BlackItalic.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'Nunito-BoldItalic': require('./assets/fonts/Nunito-BoldItalic.ttf'),
    'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
    'Nunito-ExtraBoldItalic': require('./assets/fonts/Nunito-ExtraBoldItalic.ttf'),
    'Nunito-ExtraLight': require('./assets/fonts/Nunito-ExtraLight.ttf'),
    'Nunito-ExtraLightItalic': require('./assets/fonts/Nunito-Black.ttf'),
    'Nunito-Italic': require('./assets/fonts/Nunito-Italic.ttf'),
    'Nunito-Light': require('./assets/fonts/Nunito-Light.ttf'),
    'Nunito-LightItalic': require('./assets/fonts/Nunito-LightItalic.ttf'),
    'Nunito-Medium': require('./assets/fonts/Nunito-Medium.ttf'),
    'Nunito-MediumItalic': require('./assets/fonts/Nunito-MediumItalic.ttf'),
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-SemiBoldItalic': require('./assets/fonts/Nunito-SemiBoldItalic.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header screen="Log" />
      <View style={styles.screenContainer}>
        <LogScreen loaded={loaded} />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  screenContainer: {
    backgroundColor: 'aliceblue', // Temp
    flex: 1
  }
});