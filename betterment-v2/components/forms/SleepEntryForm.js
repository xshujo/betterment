import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Calendar } from 'react-native-calendars';

import { Colors } from "../../constants/Colors";

export default function SleepEntryForm({ formData, onFormChange }) {
  const [showSleepCalendar, setShowSleepCalendar] = useState(false);
  const [showWakeCalendar, setShowWakeCalendar] = useState(false);

  function toggleShowSleepCalendar() {
    setShowSleepCalendar(!showSleepCalendar);
  }

  function toggleShowWakeCalendar() {
    setShowWakeCalendar(!showWakeCalendar);
  }

  function handleHoursChange(field, value) {
    let fieldValueInt = parseInt(value);
    if (value === "" || (!isNaN(fieldValueInt) && fieldValueInt <= 23)) {
      onFormChange(field, value);
    } else {
      onFormChange(field, "23"); // Automatically set to max value if exceeded
    }
  }

  function handleMinutesChange(field, value) {
    let fieldValueInt = parseInt(value);
    if (value === "" || (!isNaN(fieldValueInt) && fieldValueInt <= 59)) {
      onFormChange(field, value);
    } else {
      onFormChange(field, "59"); // Automatically set to max value if exceeded
    }
  }

  return (
    <>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Sleep date *</Text>
        <TouchableOpacity style={styles.dateInputContainer} onPress={toggleShowSleepCalendar}>
          <Text style={styles.p}>{formData.sleepDate}</Text>{showSleepCalendar ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}
        </TouchableOpacity>
        {showSleepCalendar && (
          <View>
            <Calendar onDayPress={(day) => {
              onFormChange("dateCreated", day.dateString);
              toggleShowSleepCalendar();
            }}
              markedDates={{ [formData.sleepDate]: { selected: true } }} />
          </View>
        )}
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Sleep hour *</Text>
        <View style={styles.subFieldContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Ex: 21"
              inputMode="numeric"
              maxLength={2}
              value={formData.sleepHours}
              onChangeText={(value) => handleHoursChange("sleepHours", value)} />
            <Text style={styles.p}>h</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="30"
              inputMode="numeric"
              maxLength={2}
              value={formData.sleepMinutes}
              onChangeText={(value) => handleMinutesChange("sleepMinutes", value)} />
            <Text style={styles.p}>min</Text>
          </View>
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Wake date *</Text>
        <TouchableOpacity style={styles.dateInputContainer} onPress={toggleShowWakeCalendar}>
          <Text style={styles.p}>{formData.wakeDate}</Text>{showWakeCalendar ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}
        </TouchableOpacity>
        {showWakeCalendar && (
          <View>
            <Calendar onDayPress={(day) => {
              onFormChange("dateCreated", day.dateString);
              toggleShowWakeCalendar();
            }}
              markedDates={{ [formData.wakeDate]: { selected: true } }} />
          </View>
        )}
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Wake hour *</Text>
        <View style={styles.subFieldContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Ex: 6"
              inputMode="numeric"
              maxLength={2}
              value={formData.wakeHours}
              onChangeText={(value) => handleHoursChange("wakeHours", value)} />
            <Text style={styles.p}>h</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="45"
              inputMode="numeric"
              maxLength={2}
              value={formData.wakeMinutes}
              onChangeText={(value) => handleMinutesChange("wakeMinutes", value)} />
            <Text style={styles.p}>min</Text>
          </View>
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
  subFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInputContainer: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInputContainer: {
    width: 140,
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