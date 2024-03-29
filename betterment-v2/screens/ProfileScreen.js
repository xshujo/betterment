// This component is a screen that displays the user's informations and allows them to set their goals //

import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/core';

import { loadGoals, loadSettings, saveGoals } from '../utils/storage';
import { Colors } from '../constants/Colors';
import Input from '../components/Input';

export default function ProfileScreen() {
  const [showNutritionGoals, setShowNutritionGoals] = useState(false);
  const [showMeasurementGoals, setShowMeasurementGoals] = useState(false);
  const [units, setUnits] = useState({
    weight: "lbs",
    height: "cm",
    measurement: "cm"
  });
  const [userGoals, setUserGoals] = useState(null);

  useEffect(() => {
    loadInitialSettings();
    loadUserGoals();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadInitialSettings();
    }, [])
  );

  async function loadInitialSettings() {
    try {
      const settings = await loadSettings();
      if (settings) {
        setUnits({
          weight: settings.units.find(unit => unit.type === "weight").unit,
          height: settings.units.find(unit => unit.type === "height").unit,
          measurement: settings.units.find(unit => unit.type === "measurement").unit,
        });
      }
    } catch (error) {
      console.error("Error loading settings:", error);
    }
  };

  async function loadUserGoals() {
    try {
      const goals = await loadGoals();
      setUserGoals(goals);
    } catch (error) {
      console.error("Error loading goals:", error);
    }
  };

  async function saveUserGoals(goals) {
    try {
      await saveGoals(goals);
      setUserGoals(goals);
    } catch (error) {
      console.error("Error saving goals:", error);
    }
  };

  async function handleGoalChange(goalName, value) {
    try {
      const updatedGoals = { ...userGoals, [goalName]: value };
      await saveUserGoals(updatedGoals);
    } catch (error) {
      console.error("Error handling goal change:", error);
    }
  };


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
          <Input inputName="Height" unit={units.height} charLimit={5} value={userGoals?.height} onChange={(value) => handleGoalChange('height', value)} />
          <Input inputName="Weight" unit={units.weight} charLimit={5} value={userGoals?.weight} onChange={(value) => handleGoalChange('weight', value)} />
        </View>

        <Text style={styles.h1}>My goals</Text>
        <Text style={styles.h2}>Activity {"(daily)"}</Text>
        <View style={styles.categoryContainer}>
          <Input inputName="Duration" unit="min" charLimit={3} value={userGoals?.activityDuration} onChange={(value) => handleGoalChange('activityDuration', value)} />
        </View>

        <Text style={styles.h2}>Nutrition {"(daily)"}</Text>
        <View style={styles.categoryContainer}>
          <Input inputName="Calories" unit="cal" charLimit={4} value={userGoals?.calories} onChange={(value) => handleGoalChange('calories', value)} />
          <Input inputName="Fats" unit="g" charLimit={3} value={userGoals?.fats} onChange={(value) => handleGoalChange('fats', value)} />
          <Input inputName="Carbohydrates" unit="g" charLimit={3} value={userGoals?.carbohydrates} onChange={(value) => handleGoalChange('carbohydrates', value)} />
          <Input inputName="Proteins" unit="g" charLimit={3} value={userGoals?.proteins} onChange={(value) => handleGoalChange('proteins', value)} />
        </View>
        <TouchableOpacity onPress={handleToggleNutritionGoals}>
          <Text style={styles.showMoreText}>Show {showNutritionGoals ? "less" : "more"} nutrition goals {showNutritionGoals ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}</Text>
        </TouchableOpacity>
        {showNutritionGoals && (
          <View style={styles.categoryContainer}>
            <Input inputName="Saturated fat" unit="g" charLimit={3} value={userGoals?.saturatedFat} onChange={(value) => handleGoalChange('saturatedFat', value)} />
            <Input inputName="Trans fat" unit="g" charLimit={3} value={userGoals?.transFat} onChange={(value) => handleGoalChange('transFat', value)} />
            <Input inputName="Cholesterol" unit="mg" charLimit={3} value={userGoals?.cholesterol} onChange={(value) => handleGoalChange('cholesterol', value)} />
            <Input inputName="Sugar" unit="g" charLimit={2} value={userGoals?.sugar} onChange={(value) => handleGoalChange('sugar', value)} />
            <Input inputName="Fiber" unit="g" charLimit={2} value={userGoals?.fiber} onChange={(value) => handleGoalChange('fiber', value)} />
            <Input inputName="Sodium" unit="mg" charLimit={4} value={userGoals?.sodium} onChange={(value) => handleGoalChange('sodium', value)} />
            <Input inputName="Calcium" unit="mg" charLimit={4} value={userGoals?.calcium} onChange={(value) => handleGoalChange('calcium', value)} />
            <Input inputName="Vitamin A" unit="mcg" charLimit={3} value={userGoals?.vitaminA} onChange={(value) => handleGoalChange('vitaminA', value)} />
            <Input inputName="Vitamin C" unit="mg" charLimit={4} value={userGoals?.vitaminC} onChange={(value) => handleGoalChange('vitaminC', value)} />
            <Input inputName="Iron" unit="mg" charLimit={3} value={userGoals?.iron} onChange={(value) => handleGoalChange('iron', value)} />
            <Input inputName="Potassium" unit="mg" charLimit={4} value={userGoals?.potassium} onChange={(value) => handleGoalChange('potassium', value)} />
          </View>
        )}

        <Text style={styles.h2}>Sleep</Text>
        <View style={styles.categoryContainer}>
          <Input inputName="Duration" unit="h" charLimit={2} value={userGoals?.sleepDurationHours} onChange={(value) => handleGoalChange('sleepDurationHours', value)} />
          <Input inputName="" unit="min" charLimit={2} value={userGoals?.sleepDurationMinutes} onChange={(value) => handleGoalChange('sleepDurationMinutes', value)} />
        </View>

        <Text style={styles.h2}>Measurements</Text>
        <View style={styles.categoryContainer}>
          <Input inputType="Goal" inputName="Weight" unit={units.weight} charLimit={5} value={userGoals?.targetWeight} onChange={(value) => handleGoalChange('targetWeight', value)} />
        </View>
        <TouchableOpacity onPress={handleToggleMeasurementGoals}>
          <Text style={styles.showMoreText}>Show {showMeasurementGoals ? "less" : "more"} measurement goals {showMeasurementGoals ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}</Text>
        </TouchableOpacity>
        {showMeasurementGoals && (
          <View style={styles.categoryContainer}>
            <Input inputName="Neck" unit={units.measurement} charLimit={3} value={userGoals?.neck} onChange={(value) => handleGoalChange('neck', value)} />
            <Input inputName="Upper arms" unit={units.measurement} charLimit={3} value={userGoals?.upperArms} onChange={(value) => handleGoalChange('upperArms', value)} />
            <Input inputName="Forearms" unit={units.measurement} charLimit={3} value={userGoals?.forearms} onChange={(value) => handleGoalChange('forearms', value)} />
            <Input inputName="Bust" unit={units.measurement} charLimit={3} value={userGoals?.bust} onChange={(value) => handleGoalChange('bust', value)} />
            <Input inputName="Band" unit={units.measurement} charLimit={3} value={userGoals?.band} onChange={(value) => handleGoalChange('band', value)} />
            <Input inputName="Waist" unit={units.measurement} charLimit={3} value={userGoals?.waist} onChange={(value) => handleGoalChange('waist', value)} />
            <Input inputName="Belly" unit={units.measurement} charLimit={3} value={userGoals?.belly} onChange={(value) => handleGoalChange('belly', value)} />
            <Input inputName="Butt" unit={units.measurement} charLimit={3} value={userGoals?.butt} onChange={(value) => handleGoalChange('butt', value)} />
            <Input inputName="Hips" unit={units.measurement} charLimit={3} value={userGoals?.hips} onChange={(value) => handleGoalChange('hips', value)} />
            <Input inputName="Thighs" unit={units.measurement} charLimit={3} value={userGoals?.thighs} onChange={(value) => handleGoalChange('thighs', value)} />
            <Input inputName="Calves" unit={units.measurement} charLimit={3} value={userGoals?.calves} onChange={(value) => handleGoalChange('calves', value)} />
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
  showMoreText: {
    fontFamily: 'Nunito-Regular',
    color: Colors.primary,
  }
});