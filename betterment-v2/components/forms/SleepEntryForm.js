import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Calendar } from 'react-native-calendars';

import { Colors } from "../../constants/Colors";

export default function SleepEntryForm() {
  const [showCalendar, setShowCalendar] = useState(false);

  function toggleShowCalendar() {
    setShowCalendar(!showCalendar);
  }

  return (
    <>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Sleep date</Text>
        <TouchableOpacity style={styles.dateInputContainer} onPress={toggleShowCalendar}>
          <Text style={styles.p}>Mar 9th, 2024</Text>{showCalendar ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}
        </TouchableOpacity>
        {showCalendar && (<View><Calendar /></View>)}
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Sleep hour</Text>
        <View style={styles.subFieldContainer}>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput} placeholder="Hours" keyboardType="numeric" maxLength={3} />
            <Text style={styles.p}>h</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput} placeholder="Minutes" keyboardType="numeric" maxLength={3} />
            <Text style={styles.p}>min</Text>
          </View>
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Wake date</Text>
        <TouchableOpacity style={styles.dateInputContainer} onPress={toggleShowCalendar}>
          <Text style={styles.p}>Mar 10th, 2024</Text>{showCalendar ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}
        </TouchableOpacity>
        {showCalendar && (<View><Calendar /></View>)}
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Wake hour</Text>
        <View style={styles.subFieldContainer}>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput} placeholder="Hours" keyboardType="numeric" maxLength={3} />
            <Text style={styles.p}>h</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput} placeholder="Minutes" keyboardType="numeric" maxLength={3} />
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
    fontFamily: 'Nunito-Regular',
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