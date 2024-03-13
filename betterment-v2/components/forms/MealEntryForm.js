import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Calendar } from 'react-native-calendars';

import { Colors } from "../../constants/Colors";

export default function MealEntryForm({ formData, onFormChange }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMealTypeOptions, setShowMealTypeOptions] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState(["", ""]);

  function toggleShowCalendar() {
    setShowCalendar(!showCalendar);
  }

  function toggleShowMealTypeOptions() {
    setShowMealTypeOptions(!showMealTypeOptions);
  }

  function handleMealTypeSelection(chosenMealType) {
    setShowMealTypeOptions(false);
    setSelectedMealType(chosenMealType);
    onFormChange("mealType", chosenMealType[0])
  }

  return (
    <>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Name *</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Name of the meal or food item"
            value={formData.name}
            onChangeText={(value) => onFormChange("name", value)} />
        </View>
      </View>
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
              markedDates={{ [formData.dateCreated]: { selected: true } }} />
          </View>
        )}
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.h3}>Meal type *</Text>
        <View style={styles.optionPicker}>
          <TouchableOpacity style={styles.pickerTitleContainer} onPress={toggleShowMealTypeOptions}>
            <Text style={styles.pickerTitleText}>{selectedMealType[0] ? selectedMealType[1] : "Select a meal type"}</Text>{showMealTypeOptions ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}
          </TouchableOpacity>
          {showMealTypeOptions && (
            <View style={{ paddingBottom: 8, }}>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMealTypeSelection(["breakfast", "Breakfast"])}>
                <Text style={styles.pickerOptionText}>Breakfast</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMealTypeSelection(["brunch", "Brunch"])}>
                <Text style={styles.pickerOptionText}>Brunch</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMealTypeSelection(["lunch", "Lunch"])}>
                <Text style={styles.pickerOptionText}>Lunch</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMealTypeSelection(["dinner", "Dinner"])}>
                <Text style={styles.pickerOptionText}>Dinner</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickerOptionContainer} onPress={() => handleMealTypeSelection(["other", "Other / snack"])}>
                <Text style={styles.pickerOptionText}>Other / snack</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <View style={styles.nutritionInfoContainer}>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Calories *</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={4}
              value={formData.calories}
              onChangeText={(value) => onFormChange("calories", value)} />
            <Text style={styles.p}> cal</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Fats</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={2}
              value={formData.fats}
              onChangeText={(value) => onFormChange("fats", value)} />
            <Text style={styles.p}> g</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Saturated fats</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={3}
              value={formData.saturatedFats}
              onChangeText={(value) => onFormChange("saturatedFats", value)} />
            <Text style={styles.p}> g</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Trans fats</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={3}
              value={formData.transFats}
              onChangeText={(value) => onFormChange("transFats", value)} />
            <Text style={styles.p}> g</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Cholesterol</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={3}
              value={formData.cholesterol}
              onChangeText={(value) => onFormChange("cholesterol", value)} />
            <Text style={styles.p}> mg</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Carbohydrates</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={3}
              value={formData.carbohydrates}
              onChangeText={(value) => onFormChange("carbohydrates", value)} />
            <Text style={styles.p}> g</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Sugar</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={2}
              value={formData.sugar}
              onChangeText={(value) => onFormChange("sugar", value)} />
            <Text style={styles.p}> g</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Fiber</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={2}
              value={formData.fiber}
              onChangeText={(value) => onFormChange("fiber", value)} />
            <Text style={styles.p}> g</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Proteins</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={3}
              value={formData.proteins}
              onChangeText={(value) => onFormChange("proteins", value)} />
            <Text style={styles.p}> g</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Sodium</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={4}
              value={formData.sodium}
              onChangeText={(value) => onFormChange("sodium", value)} />
            <Text style={styles.p}> mg</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Calcium</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={4}
              value={formData.calcium}
              onChangeText={(value) => onFormChange("calcium", value)} />
            <Text style={styles.p}> mg</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Vitamin A</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={3}
              value={formData.vitaminA}
              onChangeText={(value) => onFormChange("vitaminA", value)} />
            <Text style={styles.p}> mcg</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Vitamin C</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={4}
              value={formData.vitaminC}
              onChangeText={(value) => onFormChange("vitaminC", value)} />
            <Text style={styles.p}> mg</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Iron</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={3}
              value={formData.iron}
              onChangeText={(value) => onFormChange("iron", value)} />
            <Text style={styles.p}> mg</Text>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.nutritionInfoItem]}>
          <Text style={styles.h3}>Potassium</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Value"
              inputMode="numeric"
              maxLength={4}
              value={formData.potassium}
              onChangeText={(value) => onFormChange("potassium", value)} />
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