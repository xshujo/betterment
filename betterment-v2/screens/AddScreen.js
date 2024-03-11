import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Colors } from "../constants/Colors";
import ActivityEntryForm from "../components/forms/ActivityEntryForm";
import MealEntryForm from "../components/forms/MealEntryForm";
import SleepEntryForm from "../components/forms/SleepEntryForm";
import MeasurementEntryForm from "../components/forms/MeasurementEntryForm";

export default function AddScreen() {
  const [currentForm, setCurrentForm] = useState("an activity");
  const [showOptions, setShowOptions] = useState(false);

  function handleToggleOptions() {
    setShowOptions(!showOptions);
  }

  function changeCurrentForm(form) {
    setCurrentForm(form);
    setShowOptions(false);
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.formHandlerContainer}>
        <View style={styles.optionPicker}>
          <TouchableOpacity style={styles.pickerTitleContainer} onPress={handleToggleOptions}>
            <Text style={styles.pickerTitleText}>Add {currentForm}</Text>{showOptions ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}
          </TouchableOpacity>
          {showOptions && (
            <View>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => changeCurrentForm("an activity")}>
                <Text style={styles.pickerOptionText}>Add an activity</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => changeCurrentForm("a meal")}>
                <Text style={styles.pickerOptionText}>Add a meal</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => changeCurrentForm("a sleep record")}>
                <Text style={styles.pickerOptionText}>Add a sleep record</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => changeCurrentForm("a measurement")}>
                <Text style={styles.pickerOptionText}>Add a measurement</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <Text style={styles.saveButtonText}>Save</Text>
      </View>


      <ScrollView contentContainerStyle={styles.container}>
        {currentForm === "an activity" && (
          <ActivityEntryForm />
        )}
        {currentForm === "a meal" && (
          <MealEntryForm />
        )}
        {currentForm === "a sleep record" && (
          <SleepEntryForm />
        )}
        {currentForm === "a measurement" && (
          <MeasurementEntryForm />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
  },
  formHandlerContainer: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  saveButtonText: {
    backgroundColor: Colors.secondary,
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: Colors.accent1,
    borderRadius: 48,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  optionPicker: {
    minWidth: 220,
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 16,
  },
  pickerTitleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerTitleText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  pickerOptionsContainer: {},
  pickerOptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  pickerOptionText: {
    fontFamily: 'Nunito-Regular',
  },
});