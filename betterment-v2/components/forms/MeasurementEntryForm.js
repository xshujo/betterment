import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Calendar } from 'react-native-calendars';

import { Colors } from "../../constants/Colors";
import { loadSettings } from "../../utils/storage";
import { useFocusEffect } from "@react-navigation/core";

export default function MeasurementEntryForm({ formData, onFormChange }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMeasurementOptions, setShowMeasurementOptions] = useState(false);
  const [selectedMeasurement, setSelectedMeasurement] = useState(["", ""]);
  const [units, setUnits] = useState({
    weight: "lbs",
    height: "cm",
    measurement: "cm"
  });

  useEffect(() => {
    loadInitialSettings();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadInitialSettings();
    }, [])
  );

  async function loadInitialSettings() {
    try {
      const settings = await loadSettings();
      if (settings) {
        setUnits({
          weight: settings.units.find(unit => unit.type === "weight").unit,
          height: settings.units.find(unit => unit.type === "height").unit,
          measurement: settings.units.find(unit => unit.type === "measurement").unit,
        });
      }
    } catch (error) {
      console.error("Error loading settings:", error);
    }
  };

  function toggleShowCalendar() {
    setShowCalendar(!showCalendar);
  }

  function toggleShowMeasurementOptions() {
    setShowMeasurementOptions(!showMeasurementOptions);
  }

  function handleMeasurementSelection(chosenMeasurement) {
    setShowMeasurementOptions(false);
    setSelectedMeasurement(chosenMeasurement);
    onFormChange("measurementName", chosenMeasurement[0])
  }

  return (
    <>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Date</Text>
        <TouchableOpacity style={styles.inputContainer} onPress={toggleShowCalendar}>
          <Text style={styles.p}>{formData.dateCreated}</Text>{showCalendar ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}
        </TouchableOpacity>
        {showCalendar && (
          <View>
            <Calendar onDayPress={(day) => {
              onFormChange("dateCreated", day.dateString);
              toggleShowCalendar();
            }}
              markedDates={{ [formData.dateCreated]: { selected: true } }}
              maxDate={new Date().toISOString().split('T')[0]} />
          </View>
        )}
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Measurement name *</Text>
        <View style={styles.optionPicker}>
          <TouchableOpacity style={styles.pickerTitleContainer} onPress={toggleShowMeasurementOptions}>
            <Text style={styles.pickerTitleText}>{selectedMeasurement[0] ? selectedMeasurement[1] : "Select a measurement"}</Text>{showMeasurementOptions ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}
          </TouchableOpacity>
          {showMeasurementOptions && (
            <View style={{ paddingBottom: 8, }}>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMeasurementSelection(["weight", "Weight"])}>
                <Text style={styles.pickerOptionText}>Weight</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMeasurementSelection(["neck", "Neck"])}>
                <Text style={styles.pickerOptionText}>Neck</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMeasurementSelection(["upperArms", "Upper arms"])}>
                <Text style={styles.pickerOptionText}>Upper arms</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMeasurementSelection(["forearms", "Forearms"])}>
                <Text style={styles.pickerOptionText}>Forearms</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMeasurementSelection(["bust", "Bust"])}>
                <Text style={styles.pickerOptionText}>Bust</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMeasurementSelection(["band", "Band"])}>
                <Text style={styles.pickerOptionText}>Band</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMeasurementSelection(["waist", "Waist"])}>
                <Text style={styles.pickerOptionText}>Waist</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMeasurementSelection(["belly", "Belly"])}>
                <Text style={styles.pickerOptionText}>Belly</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMeasurementSelection(["butt", "Butt"])}>
                <Text style={styles.pickerOptionText}>Butt</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMeasurementSelection(["hips", "Hips"])}>
                <Text style={styles.pickerOptionText}>Hips</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMeasurementSelection(["thighs", "Thighs"])}>
                <Text style={styles.pickerOptionText}>Thighs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMeasurementSelection(["calves", "Calves"])}>
                <Text style={styles.pickerOptionText}>Calves</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Measurement value *</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Value"
            inputMode="numeric"
            maxLength={3}
            value={formData.measurementValue}
            onChangeText={(value) => onFormChange("measurementValue", value)} />
          <Text style={styles.p}>{selectedMeasurement[0] === "weight" ? units.weight : units.measurement}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 24,
  },
  h3: {
    fontFamily: 'Nunito-Bold',
  },
  p: {
    fontFamily: 'Nunito-Bold',
    paddingVertical: 8,
  },
  fieldContainer: {
    gap: 8,
  },
  inputContainer: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    fontFamily: 'Nunito-Regular',
    flex: 1,
  },
  optionPicker: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  pickerTitleContainer: {
    width: '100%',
    paddingVertical: 16,
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