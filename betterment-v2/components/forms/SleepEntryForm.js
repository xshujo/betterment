import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Calendar } from 'react-native-calendars';

import { Colors } from "../../constants/Colors";

export default function SleepEntryForm({ formData, onFormChange }) {
  const [showSleepCalendar, setShowSleepCalendar] = useState(false);
  const [showWakeCalendar, setShowWakeCalendar] = useState(false);
  const [selectedSleepDate, setSelectedSleepDate] = useState(formData.sleepDate);
  const [selectedWakeDate, setSelectedWakeDate] = useState(formData.wakeDate);

  useEffect(() => {
    // Update sleepDate in form data when selectedSleepDate changes
    onFormChange("sleepDate", selectedSleepDate);
  }, [selectedSleepDate]);

  useEffect(() => {
    // Update wakeDate in form data when selectedWakeDate changes
    onFormChange("wakeDate", selectedWakeDate);
  }, [selectedWakeDate]);

  function toggleShowSleepCalendar() {
    setShowSleepCalendar(!showSleepCalendar);
  }

  function toggleShowWakeCalendar() {
    setShowWakeCalendar(!showWakeCalendar);
  }

  function handleHoursChange(field, value) {
    if (value !== "" && value !== "0") {
      value = parseInt(value).toString();
    }

    if (value === "" || (parseInt(value) >= 0 && parseInt(value) <= 23)) {
      onFormChange(field, value);
    } else {
      onFormChange(field, "23");
    }
  }

  function handleMinutesChange(field, value) {
    if (value !== "" && value !== "0") {
      value = parseInt(value).toString();
    }

    if (value === "" || (parseInt(value) >= 0 && parseInt(value) <= 59)) {
      onFormChange(field, value);
    } else {
      onFormChange(field, "59");
    }
  }

  function formatDate(dateString) {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString('en-US', options);
  }

  function handleSleepDateChange(dateString) {
    setSelectedSleepDate(dateString);

    // Update wakeDate to the next day
    const nextDay = new Date(dateString);
    nextDay.setDate(nextDay.getDate() + 1);
    const nextDayString = nextDay.toISOString().split('T')[0];

    setSelectedWakeDate(nextDayString);
  }

  return (
    <>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Sleep date *</Text>
        <TouchableOpacity style={styles.dateInputContainer} onPress={toggleShowSleepCalendar}>
          <Text style={styles.p}>{formatDate(formData.sleepDate)}</Text>{showSleepCalendar ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}
        </TouchableOpacity>
        {showSleepCalendar && (
          <View>
            <Calendar onDayPress={(day) => {
              handleSleepDateChange(day.dateString);
              onFormChange("sleepDate", day.dateString);
              toggleShowSleepCalendar();
            }}
              markedDates={{ [formData.sleepDate]: { selected: true } }}
              maxDate={new Date().toISOString().split('T')[0]} />
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
          <Text style={styles.p}>{formatDate(formData.wakeDate)}</Text>{showWakeCalendar ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}
        </TouchableOpacity>
        {showWakeCalendar && (
          <View>
            <Calendar onDayPress={(day) => {
              onFormChange("wakeDate", day.dateString);
              toggleShowWakeCalendar();
            }}
              markedDates={{ [formData.wakeDate]: { selected: true } }}
              maxDate={new Date().toISOString().split('T')[0]} />
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
    width: 135,
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