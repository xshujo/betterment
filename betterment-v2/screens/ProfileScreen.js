// This component is a screen that displays the user's informations and allows them to set their goals //

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors } from '../constants/Colors';

import Input from '../components/Input';

export default function ProfileScreen() {
  const [showNutritionGoals, setShowNutritionGoals] = useState(false);
  const [showMeasurementGoals, setShowMeasurementGoals] = useState(false);

  function handleToggleNutritionGoals() {
    setShowNutritionGoals(!showNutritionGoals);
  }

  function handleToggleMeasurementGoals() {
    setShowMeasurementGoals(!showMeasurementGoals);
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h1}>About me</Text>
        <View style={styles.categoryContainer}>
          <Input inputType="About Me" inputName="Height" charLimit={5} />
          <Input inputType="About Me" inputName="Weight" charLimit={5} />
        </View>

        <Text style={styles.h1}>My goals</Text>
        <Text style={styles.h2}>Activity</Text>
        <View style={styles.categoryContainer}>
          <Input inputType="Goal" inputName="Duration" unit="min" charLimit={3} />
        </View>

        <Text style={styles.h2}>Nutrition</Text>
        <View style={styles.categoryContainer}>
          <Input inputType="Goal" inputName="Calories" unit="cal" charLimit={4} />
          <Input inputType="Goal" inputName="Fats" unit="g" charLimit={3} />
          <Input inputType="Goal" inputName="Carbohydrates" unit="g" charLimit={3} />
          <Input inputType="Goal" inputName="Proteins" unit="g" charLimit={3} />
        </View>
        <TouchableOpacity onPress={handleToggleNutritionGoals}>
          <Text style={styles.showMoreText}>Show {showNutritionGoals ? "less" : "more"} nutrition goals {showNutritionGoals ? <Text style={styles.arrow}>&#x25B2;</Text> : <Text style={styles.arrow}>&#x25BC;</Text>}</Text>
        </TouchableOpacity>
        {showNutritionGoals && (
          <View style={styles.categoryContainer}>
            <Input inputType="Goal" inputName="Saturated fat" unit="g" charLimit={2} />
            <Input inputType="Goal" inputName="Trans fat" unit="g" charLimit={3} />
            <Input inputType="Goal" inputName="Cholesterol" unit="mg" charLimit={3} />
            <Input inputType="Goal" inputName="Sugar" unit="g" charLimit={2} />
            <Input inputType="Goal" inputName="Fiber" unit="g" charLimit={2} />
            <Input inputType="Goal" inputName="Sodium" unit="mg" charLimit={4} />
            <Input inputType="Goal" inputName="Calcium" unit="mg" charLimit={4} />
            <Input inputType="Goal" inputName="Potassium" unit="mg" charLimit={4} />
            <Input inputType="Goal" inputName="Iron" unit="mg" charLimit={3} />
            <Input inputType="Goal" inputName="Vitamin C" unit="mg" charLimit={4} />
            <Input inputType="Goal" inputName="Vitamin A" unit="mcg" charLimit={3} />
          </View>
        )}

        <Text style={styles.h2}>Sleep</Text>
        <View style={styles.categoryContainer}>
          <Input inputType="Goal" inputName="Duration" unit="h" charLimit={2} />
          <Input inputType="Goal" inputName="" unit="min" charLimit={2} />
        </View>

        <Text style={styles.h2}>Measurements</Text>
        <View style={styles.categoryContainer}>
          <Input inputType="About Me" inputName="Weight" charLimit={5} />
        </View>
        <TouchableOpacity onPress={handleToggleMeasurementGoals}>
          <Text style={styles.showMoreText}>Show {showMeasurementGoals ? "less" : "more"} measurement goals {showMeasurementGoals ? <Text style={styles.arrow}>&#x25B2;</Text> : <Text style={styles.arrow}>&#x25BC;</Text>}</Text>
        </TouchableOpacity>
        {showMeasurementGoals && (
          <View style={styles.categoryContainer}>
            <Input inputType="Goal" inputName="Neck" unit="cm" charLimit={3} />
            <Input inputType="Goal" inputName="Upper arms" unit="cm" charLimit={3} />
            <Input inputType="Goal" inputName="Forearms" unit="cm" charLimit={3} />
            <Input inputType="Goal" inputName="Bust" unit="cm" charLimit={3} />
            <Input inputType="Goal" inputName="Band" unit="cm" charLimit={3} />
            <Input inputType="Goal" inputName="Waist" unit="cm" charLimit={3} />
            <Input inputType="Goal" inputName="Belly" unit="cm" charLimit={3} />
            <Input inputType="Goal" inputName="Butt" unit="cm" charLimit={3} />
            <Input inputType="Goal" inputName="Hips" unit="cm" charLimit={3} />
            <Input inputType="Goal" inputName="Thighs" unit="cm" charLimit={3} />
            <Input inputType="Goal" inputName="Calves" unit="cm" charLimit={3} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent1,
    paddingHorizontal: 24,
    paddingBottom: 48,
    gap: 16,
  },
  h1: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 24,
    marginTop: 16,
  },
  h2: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
  h3: {
    fontFamily: 'Nunito-Bold'
  },
  p: {
    fontFamily: 'Nunito-Regular',
  },
  arrow: {
    fontSize: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: 20,
  },
  categoryContainerDisplay: {
    display: 'none',
  },
  categoryItem: {
    gap: 4,
  },
  goalFlex: {
    width: 144,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  multiInputContainer: {
    width: 144,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    zIndex: 5,
  },
  textInput: {
    width: 72,
    backgroundColor: Colors.accent1,
    fontFamily: 'Nunito-Regular',
    borderColor: Colors.primary,
    borderWidth: 2,
    paddingVertical: 8,
    paddingLeft: 16,
  },
  goalsContainer: {
    gap: 8,
  },
  showMoreText: {
    color: Colors.primary,
  }
});