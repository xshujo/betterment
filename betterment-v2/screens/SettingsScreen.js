import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import OptionPicker from "../components/OptionPicker";
import { loadSettings, saveSettings } from "../utils/storage";

export default function SettingsScreen() {
  const [weightUnit, setWeightUnit] = useState("lbs");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [measurementUnit, setMeasurementUnit] = useState("cm");

  useEffect(() => {
    // Load initial settings when the component mounts
    loadInitialSettings();
  }, []);

  const loadInitialSettings = async () => {
    try {
      const settings = await loadSettings();
      if (settings) {
        setWeightUnit(settings.units.find(unit => unit.type === "weight").unit);
        setHeightUnit(settings.units.find(unit => unit.type === "height").unit);
        setMeasurementUnit(settings.units.find(unit => unit.type === "measurement").unit);
      } else {
        // If no settings are found, provide default values
        console.log('No settings found. Using default values.');
        setWeightUnit("lbs");
        setHeightUnit("cm");
        setMeasurementUnit("cm");
      }
    } catch (error) {
      console.error("Error loading settings:", error);
    }
  };

  const handleWeightUnitSelect = async (option) => {
    console.log("Selected weight unit:", option);
    setWeightUnit(option);
    await saveSettingsToStorage("weight", option);
  };

  const handleHeightUnitSelect = async (option) => {
    console.log("Selected height unit:", option);
    setHeightUnit(option);
    await saveSettingsToStorage("height", option);
  };

  const handleMeasurementUnitSelect = async (option) => {
    console.log("Selected measurement unit:", option);
    setMeasurementUnit(option);
    await saveSettingsToStorage("measurement", option);
  };

  const saveSettingsToStorage = async (type, unit) => {
    try {
      let settings = await loadSettings();
      if (!settings) {
        // Initialize settings with default values
        settings = {
          units: [
            { id: 1, type: "weight", unit: "lbs" },
            { id: 2, type: "height", unit: "cm" },
            { id: 3, type: "measurement", unit: "cm" }
          ]
        };
      }

      // Update the units based on the provided type and unit
      const updatedUnits = settings.units.map(u => {
        if (u.type === type) {
          return { ...u, unit };
        }
        return u;
      });

      // Update the settings with the updated units
      await saveSettings({ ...settings, units: updatedUnits });

      // Log the updated settings to the console
      console.log("Updated settings:", { ...settings, units: updatedUnits });
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  };



  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.h2}>Units</Text>
        <View style={styles.categoryContainer}>
          <View style={styles.settingContainer}>
            <Text style={styles.settingText}>Weight unit</Text>
            <OptionPicker options={["kg", "lbs"]} onSelect={handleWeightUnitSelect} currentUnit={weightUnit} />
          </View>
          <View style={styles.settingContainer}>
            <Text style={styles.settingText}>Height unit</Text>
            <OptionPicker options={["cm", "ft"]} onSelect={handleHeightUnitSelect} currentUnit={heightUnit} />
          </View>
          <View style={styles.settingContainer}>
            <Text style={styles.settingText}>Measurement unit</Text>
            <OptionPicker options={["cm", "in"]} onSelect={handleMeasurementUnitSelect} currentUnit={measurementUnit} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent1,
    paddingHorizontal: 24,
    flex: 1,
  },
  scrollView: {
    gap: 16,
  },
  categoryContainer: {
    gap: 8,
  },
  h2: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    marginTop: 8,
  },
  settingContainer: {
    overflow: 'hidden',
    backgroundColor: Colors.accent1,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingText: {
    fontFamily: 'Nunito-Regular',
    marginLeft: 16,
  }
});