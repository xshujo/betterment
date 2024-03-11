import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Calendar } from 'react-native-calendars';

import { Colors } from "../../constants/Colors";

export default function ActivityEntryForm() {
  const [showCalendar, setShowCalendar] = useState(false);

  function toggleShowCalendar() {
    setShowCalendar(!showCalendar);
  }

  return (
    <>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Name</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Name of the activity" />
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Date</Text>
        <TouchableOpacity style={styles.inputContainer} onPress={toggleShowCalendar}>
          <Text style={styles.p}>Mar 9th, 2024</Text>{showCalendar ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}
        </TouchableOpacity>
        {showCalendar && (<View><Calendar /></View>)}
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Duration</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Duration of the activity" keyboardType="numeric" maxLength={3} />
          <Text style={styles.p}> min</Text>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Steps</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Step count if relevant" keyboardType="numeric" maxLength={6} />
          <Text style={styles.p}> steps</Text>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Energy expanded</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Calories burnt" keyboardType="numeric" maxLength={4} />
          <Text style={styles.p}> cal</Text>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>METs</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Metabolic equivalent of task" keyboardType="numeric" maxLength={3} />
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