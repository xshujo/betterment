import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { saveFormData } from "../utils/storage";
import { Colors } from "../constants/Colors";
import ActivityEntryForm from "../components/forms/ActivityEntryForm";
import MealEntryForm from "../components/forms/MealEntryForm";
import SleepEntryForm from "../components/forms/SleepEntryForm";
import MeasurementEntryForm from "../components/forms/MeasurementEntryForm";

export default function AddScreen() {
  const [currentForm, setCurrentForm] = useState(["Add an activity", "activity"]);
  const [showOptions, setShowOptions] = useState(false);
  const [formData, setFormData] = useState(getInitialFormData("activity"));

  function handleToggleOptions() {
    setShowOptions(!showOptions);
  }

  function changeCurrentForm(form) {
    setCurrentForm(form);
    setShowOptions(false);
    setFormData(getInitialFormData(form[1]));
  }

  function handleFormChange(field, value) {
    setFormData({ ...formData, [field]: value });
  }

  function validateForm(formData, formType) {
    switch (formType) {
      case "activity":
        return formData.name && formData.duration;
      case "meal":
        return formData.name && formData.mealType && formData.calories;
      case "sleep":
        return formData.sleepHours && formData.sleepMinutes && formData.wakeHours && formData.wakeMinutes;
      case "measurement":
        return formData.measurementName && formData.measurementValue;
      default:
        return false;
    }
  }

  async function handleSave() {
    // Validate form data
    if (!validateForm(formData, currentForm[1])) {
      alert("Some required fields are missing.");
      return;
    }

    // Generate an ID for the entry
    const id = `${Date.now()}-${currentForm[1]}`;

    // Save the form data along with the generated ID
    await saveFormData({ id, ...formData, formType: currentForm });

    // Clear the form after saving
    setFormData(getInitialFormData(currentForm[1]));

    const entryType = currentForm[1];
    const capitalizedEntryType = entryType.charAt(0).toUpperCase() + entryType.slice(1);
    alert(`${capitalizedEntryType} entry saved! You can find it in Log.`);
  }

  function getInitialFormData(formType) {
    switch (formType) {
      case "activity":
        return {
          name: "",
          dateCreated: new Date().toISOString().split('T')[0],
          duration: "",
          steps: "",
          energyExpanded: "",
          METs: ""
        };
      case "meal":
        return {
          name: "",
          dateCreated: new Date().toISOString().split('T')[0],
          mealType: "",
          calories: "",
          fats: "",
          saturatedFats: "",
          transFats: "",
          cholesterol: "",
          carbohydrates: "",
          sugar: "",
          fiber: "",
          proteins: "",
          sodium: "",
          calcium: "",
          vitaminA: "",
          vitaminC: "",
          iron: "",
          potassium: ""
        };
      case "sleep":
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1); // Set yesterday's date
        const yesterdayFormatted = yesterday.toISOString().split('T')[0];
        return {
          sleepDate: yesterdayFormatted,
          sleepHours: "",
          sleepMinutes: "",
          wakeDate: today,
          wakeHours: "",
          wakeMinutes: ""
        };
      case "measurement":
        return {
          dateCreated: new Date().toISOString().split('T')[0],
          measurementName: "",
          measurementValue: "",
        };
      default:
        return {};
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.formHandlerContainer}>
        <View style={styles.optionPicker}>
          <TouchableOpacity style={styles.pickerTitleContainer} onPress={handleToggleOptions}>
            <Text style={styles.pickerTitleText}>{currentForm[0]}</Text>{showOptions ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}
          </TouchableOpacity>
          {showOptions && (
            <View>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => changeCurrentForm(["Add an activity", "activity"])}>
                <Text style={styles.pickerOptionText}>Add an activity</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => changeCurrentForm(["Add a meal", "meal"])}>
                <Text style={styles.pickerOptionText}>Add a meal</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => changeCurrentForm(["Add a sleep record", "sleep"])}>
                <Text style={styles.pickerOptionText}>Add a sleep record</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => changeCurrentForm(["Add a measurement", "measurement"])}>
                <Text style={styles.pickerOptionText}>Add a measurement</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <TouchableOpacity onPress={handleSave} >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {currentForm[1] === "activity" && (
          <ActivityEntryForm formData={formData} onFormChange={handleFormChange} formType={currentForm} />
        )}
        {currentForm[1] === "meal" && (
          <MealEntryForm formData={formData} onFormChange={handleFormChange} formType={currentForm} />
        )}
        {currentForm[1] === "sleep" && (
          <SleepEntryForm formData={formData} onFormChange={handleFormChange} formType={currentForm} />
        )}
        {currentForm[1] === "measurement" && (
          <MeasurementEntryForm formData={formData} onFormChange={handleFormChange} formType={currentForm} />
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
    color: Colors.accent1,
    borderRadius: 48,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  optionPicker: {
    minWidth: 200,
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 16,
  },
  pickerTitleContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerTitleText: {
    fontFamily: 'Nunito-Bold',
  },
  pickerOptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  pickerOptionText: {
    fontFamily: 'Nunito-Regular',
  },
});