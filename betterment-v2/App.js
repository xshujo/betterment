import { SafeAreaView, StatusBar } from 'react-native';
import DiaryScreen from './screens/DiaryScreen';
import Footer from './components/Footer';
import { Colors } from './constants/Colors';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <DiaryScreen />
      <Footer />
    </SafeAreaView>
  );
}
