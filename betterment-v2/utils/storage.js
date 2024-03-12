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

// Key for storing entry data in AsyncStorage
export const FORM_DATA_STORAGE_KEY = '@MyApp:formData';

// Function to save entry data to AsyncStorage
export const saveFormData = async (formData) => {
  try {
    // Convert formData to JSON string
    const jsonData = JSON.stringify(formData);

    // Extract the category name from the formType array
    const category = formData.formType[1];

    // Generate an ID based on timestamp and category
    const id = `${Date.now()}-${category}`;

    console.log('Form data to be saved:', formData);

    // Save the formData with the generated ID
    await AsyncStorage.setItem(FORM_DATA_STORAGE_KEY + ':' + id, jsonData);

    console.log('Form data saved successfully!');

    return id; // Return the generated ID
  } catch (error) {
    console.error('Error saving form data:', error);
    throw error;
  }
};

// Function to load entry data from AsyncStorage
export const loadFormData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const formDataKeys = keys.filter((key) => key.startsWith(FORM_DATA_STORAGE_KEY));

    const formDataPromises = formDataKeys.map(async (key) => {
      const jsonData = await AsyncStorage.getItem(key);
      return JSON.parse(jsonData);
    });

    const formData = await Promise.all(formDataPromises);
    return formData;
  } catch (error) {
    console.error('Error loading form data:', error);
    throw error;
  }
};