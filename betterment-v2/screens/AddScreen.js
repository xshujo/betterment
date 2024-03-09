import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ActivityEntryForm from "../components/forms/ActivityEntryForm";
import OptionPicker from "../components/OptionPicker";
import MealEntryForm from "../components/forms/MealEntryForm";
import SleepEntryForm from "../components/forms/SleepEntryForm";
import MeasurementEntryForm from "../components/forms/MeasurementEntryForm";

export default function AddScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <OptionPicker /> */}
        {/* <ActivityEntryForm /> */}
        {/* <MealEntryForm /> */}
        {/* <SleepEntryForm /> */}
        <MeasurementEntryForm />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
  },
});