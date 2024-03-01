// This component is a screen that displays the user's health entries //

import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LogEntry from "../components/LogEntry";
import { Colors } from "../constants/Colors";

const logData = require('../assets/data/logEntries.json');

export default function LogScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.dayText}>Sunday</Text>
        <Text style={styles.dateText}>Feb 25th, 2024</Text>
      </View>
      <View>{/* Sorters */}</View>

      {logData.map((categoryData) => {
        const { category, entries } = categoryData;

        return (
          <View style={styles.logContainer} key={category}>
            <Text style={styles.categoryText}>{category}</Text>
            {category === 'activity' && (<Text style={styles.countText}>Exercise count: </Text>)}
            {category === 'nutrition' && (<Text style={styles.countText}>Meal count: </Text>)}
            {entries.map((entry) => (
              <LogEntry key={entry.eid} category={category} entry={entry} />
            ))}
          </View>
        );
      })}

      <LogEntry entryId="activity_20240225000" category="activity" activityCount={2} />
      <LogEntry entryId="nutrition_20240225000" category="nutrition" mealCount={1} mealType="Breakfast" mealName="Apple" mealCalories={80} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', // Temp; set the background color directly in App
    padding: 24,
    alignItems: 'stretch',
    gap: 16,
  },
  dateContainer: {
    gap: 12,
  },
  dayText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: 16,
    padding: 16,
    gap: 12
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  countText: {
    fontSize: 14,
    marginTop: 4,
    marginBottom: 8,
  },
});