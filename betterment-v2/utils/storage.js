// This file handles saving and loading data with AsyncStorage //

import AsyncStorage from '@react-native-async-storage/async-storage';

// Key for storing settings data in AsyncStorage
const SETTINGS_STORAGE_KEY = '@MyApp:settings';

// Function to save settings data to AsyncStorage
export async function saveSettings(settings) {
  try {
    const jsonSettings = JSON.stringify(settings);
    await AsyncStorage.setItem(SETTINGS_STORAGE_KEY, jsonSettings);
    console.log('Settings saved successfully.');
  } catch (error) {
    console.error('Error saving settings:', error);
    throw error;
  }
};

// Function to load settings data from AsyncStorage
export async function loadSettings() {
  try {
    const jsonSettings = await AsyncStorage.getItem(SETTINGS_STORAGE_KEY);
    if (jsonSettings !== null) {
      const settings = JSON.parse(jsonSettings);
      console.log('Settings loaded successfully:', settings);
      return settings;
    } else {
      console.log('No settings found.');
      return null;
    }
  } catch (error) {
    console.error('Error loading settings:', error);
    throw error;
  }
};

// Key for storing goals data in AsyncStorage
const GOALS_STORAGE_KEY = '@MyApp:goals';

// Function to save goals data to AsyncStorage
export async function saveGoals(goals) {
  try {
    await AsyncStorage.setItem(GOALS_STORAGE_KEY, JSON.stringify(goals));  // Save user goals to AsyncStorage
    console.log('Goals saved successfully.');
  } catch (error) {
    console.error('Error saving goals:', error);
    throw error;
  }
};

// Function to load goals data from AsyncStorage
export async function loadGoals() {
  try {
    const jsonGoals = await AsyncStorage.getItem(GOALS_STORAGE_KEY);
    if (jsonGoals !== null) {
      const goals = JSON.parse(jsonGoals);
      console.log('Goals loaded successfully:', goals);
      return goals;
    } else {
      console.log('No goals found.');
      return null;
    }
  } catch (error) {
    console.error('Error loading goals:', error);
    throw error;
  }
};