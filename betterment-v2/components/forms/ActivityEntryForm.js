import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Calendar } from 'react-native-calendars';

import { Colors } from "../../constants/Colors";

export default function ActivityEntryForm({ formData, onFormChange }) {
  const [showCalendar, setShowCalendar] = useState(false);

  function toggleShowCalendar() {
    setShowCalendar(!showCalendar);
  };

  function handleNumericChange(field, value) {
    // Remove leading zeros, except for the case when it's the only digit
    if (value.length > 1 && value[0] === "0" && value[1] !== ".") {
      value = value.slice(1);
    }

    // Remove non-numeric characters except decimal point
    value = value.replace(/[^0-9.]/g, '');

    // Check if the value is a valid number
    if (!isNaN(value) && parseFloat(value) >= 0) {
      onFormChange(field, value);
    } else {
      onFormChange(field, "");
    }
  }

  function formatDate(dateString) {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Name *</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Name of the activity"
            value={formData.name}
            onChangeText={(value) => onFormChange("name", value)}
          />
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Date</Text>
        <TouchableOpacity style={styles.inputContainer} onPress={toggleShowCalendar}>
          <Text style={styles.p}>{formatDate(formData.dateCreated)}</Text>{showCalendar ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}
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
        <Text style={styles.h3}>Duration *</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Duration of the activity"
            inputMode="numeric"
            maxLength={3}
            value={formData.duration}
            onChangeText={(value) => handleNumericChange("duration", value)}
          />
          <Text style={styles.p}> min</Text>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Steps</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Step count if relevant"
            inputMode="numeric"
            maxLength={6}
            value={formData.steps}
            onChangeText={(value) => handleNumericChange("steps", value)}
          />
          <Text style={styles.p}> steps</Text>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Energy expanded</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Calories burnt"
            inputMode="numeric"
            maxLength={4}
            value={formData.energyExpanded}
            onChangeText={(value) => handleNumericChange("energyExpanded", value)}
          />
          <Text style={styles.p}> cal</Text>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>METs</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Metabolic equivalent of task"
            inputMode="numeric"
            maxLength={3}
            value={formData.METs}
            onChangeText={(value) => handleNumericChange("METs", value)}
          />
          <Text style={styles.p}> METs</Text>
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
});