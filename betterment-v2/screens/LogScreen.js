// This component is a screen that displays the user's health entries //

import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LogEntry from "../components/LogEntry";

export default function LogScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.dayText}>Sunday</Text>
      <Text style={styles.dateText}>Feb 25th, 2024</Text>
      <View>{/* Sorters */}</View>
      <LogEntry entryId="activity_20240225000" category="activity" activityCount={2} />
      <LogEntry entryId="nutrition_20240225000" category="nutrition" mealCount={1} mealType="Breakfast" mealName="Apple" mealCalories={80} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow', // Temp; set the background color directly in App
    padding: 24,
    alignItems: 'stretch',
    gap: 16,
  },
  dayText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});