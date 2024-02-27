import { StatusBar, StyleSheet, View } from 'react-native';
import DiaryScreen from './screens/DiaryScreen';
import Footer from './components/Footer';
import { Colors } from './constants/Colors';
import Header from './components/Header';
import { Dim } from './constants/Dimensions';
import LogScreen from './screens/LogScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header screen="Log" />
      <View style={styles.screenContainer}>
        <LogScreen />
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