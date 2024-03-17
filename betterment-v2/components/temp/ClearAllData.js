import React from 'react';
import { View, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('All data cleared successfully.');
    Alert.alert('Success', 'All data cleared successfully.');
  } catch (error) {
    console.error('Error clearing data:', error);
    Alert.alert('Error', 'Failed to clear data.');
  }
};

const ClearDataButton = () => {
  const handleClearData = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete all data?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: clearAllData }
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      <Button title="Clear All Data" onPress={handleClearData} />
    </View>
  );
};

export default ClearDataButton;
