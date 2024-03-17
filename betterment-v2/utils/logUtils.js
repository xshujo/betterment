import { loadFormData } from "./storage";

export async function fetchLogData() {
  try {
    // Fetch log data from AsyncStorage
    const formData = await loadFormData();
    return formData;
  } catch (error) {
    console.error('Error fetching log data:', error);
    return [];
  }
};
