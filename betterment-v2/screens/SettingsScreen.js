import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import OptionPicker from "../components/OptionPicker";

export default function SettingsScreen() {
  const weightUnit = ["kg", "lbs"];
  const heightUnit = ["cm", "ft"];
  const measurementUnit = ["cm", "in"];

  function handleWeightUnitSelect(option) {
    console.log("Selected weight unit:", option);
    // Add your logic here
  };

  function handleHeightUnitSelect(option) {
    console.log("Selected height unit:", option);
    // Add your logic here
  };

  function handleMeasurementUnitSelect(option) {
    console.log("Selected measurement unit:", option);
    // Add your logic here
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.h2}>Units</Text>
        <View style={styles.categoryContainer}>
          <View style={styles.settingContainer}>
            <Text style={styles.settingText}>Weight unit</Text>
            <OptionPicker options={weightUnit} onSelect={handleWeightUnitSelect} defaultUnit={"lbs"} />
          </View>
          <View style={styles.settingContainer}>
            <Text style={styles.settingText}>Height unit</Text>
            <OptionPicker options={heightUnit} onSelect={handleHeightUnitSelect} defaultUnit={"cm"} />
          </View>
          <View style={styles.settingContainer}>
            <Text style={styles.settingText}>Measurement unit</Text>
            <OptionPicker options={measurementUnit} onSelect={handleMeasurementUnitSelect} defaultUnit={"cm"} />
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