// This component is a screen that displays the user's informations and allows them to set their goals //

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Colors } from '../constants/Colors';

import ProfileGoalPicker from '../components/ProfileGoalPicker';
import OptionPicker from '../components/OptionPicker';
import Input from '../components/Input';

export default function ProfileScreen() {
  const weightUnit = ["kg", "lbs"];
  const heightUnit = ["cm", "ft"];
  const measurementUnit = ["cm, in"];
  const foodUnit = ["cal", "g", "mg"];

  function handleWeightUnitSelect(option) {
    console.log("Selected weight unit:", option);
    // Add your logic here
  };

  function handleHeightUnitSelect(option) {
    console.log("Selected weight unit:", option);
    // Add your logic here
  };

  const [currentWeight, setCurrentWeight] = useState({ value: '', unit: 'kg' });
  const [currentHeight, setCurrentHeight] = useState({ value: '', unit: 'cm' });
  const [nutritionGoal, setNutritionGoal] = useState({ value: '', unit: 'g' });
  const [measurementsGoals, setMeasurementsGoals] = useState([]);

  const handleCurrentWeightChange = (value, unit) => {
    setCurrentWeight({ value, unit });
  };

  const handleCurrentHeightChange = (value, unit) => {
    setCurrentHeight({ value, unit });
  };

  const handleNutritionGoalChange = (value, unit) => {
    setNutritionGoal({ value, unit });
  };

  const handleMeasurementsGoalChange = (index, value, unit) => {
    const updatedGoals = [...measurementsGoals];
    updatedGoals[index] = { value, unit };
    setMeasurementsGoals(updatedGoals);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h1}>About me</Text>
        <View style={styles.categoryContainer}>
          <Input inputType="About Me" inputName="Height" charLimit={5} />
          <Input inputType="About Me" inputName="Weight" charLimit={3} />
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



        <View style={styles.goalsContainer}>
          <Text style={styles.h2}>Measurements</Text>
          {measurementsGoals.map((goal, index) => (
            <ProfileGoalPicker
              key={index}
              units={['cm', 'in', 'lbs', 'kg']}
              value={goal.value}
              unit={goal.unit}
              onValueChange={(value, unit) => handleMeasurementsGoalChange(index, value, unit)}
            />
          ))}
          <TouchableOpacity onPress={() => setMeasurementsGoals([...measurementsGoals, { value: '', unit: 'cm' }])}>
            <Text style={styles.addMeasurementGoal}>Add measurement goal +</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent1,
    padding: 24,
    paddingTop: 0,
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
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: 20,
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
  addMeasurementGoal: {
    color: Colors.primary,
  }
});