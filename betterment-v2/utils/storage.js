import AsyncStorage from '@react-native-async-storage/async-storage';

// Key for storing settings data in AsyncStorage
const SETTINGS_STORAGE_KEY = '@MyApp:settings';

// Function to save settings data to AsyncStorage
export const saveSettings = async (settings) => {
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
export const loadSettings = async () => {
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
