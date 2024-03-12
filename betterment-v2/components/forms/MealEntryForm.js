import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Calendar } from 'react-native-calendars';

import { Colors } from "../../constants/Colors";

export default function MealEntryForm() {
  const [showCalendar, setShowCalendar] = useState(false);

  function toggleShowCalendar() {
    setShowCalendar(!showCalendar);
  }

  return (
    <>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Name</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Name of the meal or food item" />
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
        <Text style={styles.h3}>Meal type</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.p}>Temp</Text>
        </View>
      </View>

      <View style={styles.nutritionInfoContainer}>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Calories</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={4} />
            <Text style={styles.p}> cal</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Fats</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={2} />
            <Text style={styles.p}> g</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Saturated fats</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={3} />
            <Text style={styles.p}> g</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Trans fats</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={3} />
            <Text style={styles.p}> g</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Cholesterol</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={3} />
            <Text style={styles.p}> mg</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Carbohydrates</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={3} />
            <Text style={styles.p}> g</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Sugar</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={2} />
            <Text style={styles.p}> g</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Fiber</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={2} />
            <Text style={styles.p}> g</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Proteins</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={3} />
            <Text style={styles.p}> g</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Sodium</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={4} />
            <Text style={styles.p}> mg</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Calcium</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={4} />
            <Text style={styles.p}> mg</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Vitamin A</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={3} />
            <Text style={styles.p}> mcg</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Vitamin C</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={4} />
            <Text style={styles.p}> mg</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Iron</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={3} />
            <Text style={styles.p}> mg</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Potassium</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Value" inputMode="numeric" maxLength={4} />
            <Text style={styles.p}> mg</Text>
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
  nutritionInfoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },
  nutritionInfoItem: {
    width: 140,
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