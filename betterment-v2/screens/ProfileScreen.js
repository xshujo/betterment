// This component is a screen that displays the user's informations and allows them to set their goals //

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors } from '../constants/Colors';

import ProfileGoalPicker from '../components/ProfileGoalPicker';

export default function ProfileScreen() {
  const [currentWeight, setCurrentWeight] = useState({ value: '', unit: 'kg' });
  const [currentHeight, setCurrentHeight] = useState({ value: '', unit: 'cm' }); // Needs formating for inches
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
        <View style={styles.goalsContainer}>
          <Text style={styles.h2}>Weight</Text>
          <ProfileGoalPicker
            units={['kg', 'lbs']}
            value={currentWeight.value}
            unit={currentWeight.unit}
            onValueChange={handleCurrentWeightChange}
          />
        </View>
        <View style={styles.goalsContainer}>
          <Text style={styles.h2}>Height</Text>
          <ProfileGoalPicker
            units={['cm', 'in']}
            value={currentHeight.value}
            unit={currentHeight.unit}
            onValueChange={handleCurrentHeightChange}
          />
        </View>

        <Text style={styles.h1}>My goals</Text>
        <View style={styles.goalsContainer}>
          <Text style={styles.h2}>Nutrition</Text>
          <ProfileGoalPicker
            units={['g', 'mg', 'cal']}
            value={nutritionGoal.value}
            unit={nutritionGoal.unit}
            onValueChange={handleNutritionGoalChange}
          />
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
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    textAlign: 'center',
    paddingLeft: 8,
  },
  goalsContainer: {
    gap: 8,
  },
  addMeasurementGoal: {
    color: Colors.primary,
  }
});