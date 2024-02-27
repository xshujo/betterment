// This component displays the health information recorded by the user for a given category //

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LogActivityEntry from "./LogActivityEntry";

export default function LogEntry({ category, activityCount, mealCount, mealType, mealName, mealCalories }) {
  return (
    <View style={styles.container}>
      {/* May change if sort: all */}
      <Text style={styles.categoryText}>{category}</Text>

      {category === 'activity' && (
        <>
          <Text style={styles.countText}>Exercise count: {activityCount}</Text>
          <View style={styles.activityEntryContainer}>
            <LogActivityEntry activityName="Treadmill" activityDuration={20} />
            <LogActivityEntry activityName="Running" activityDuration={30} />
          </View>
        </>
      )}
      {category === 'nutrition' && (
        <>
          <Text style={styles.countText}>Meal count: {mealCount}</Text>

          <View>

            {mealName && (<Text>{mealName}</Text>)}
            {mealCalories && (<Text>{mealCalories} cal</Text>)}
            {/* {activityDuration && (<Text>{activityDuration} minutes</Text>)} */}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
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
  activityEntryContainer: {
    gap: 6,
  }
});