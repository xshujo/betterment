// This component displays the health information recorded by the user for a given category //

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LogEntry({ category, entry }) {
  if (!entry) {
    return null; // Return null if entry is undefined
  }

  return (
    <>
      {category === 'activity' && (
        <View style={styles.entryContainer}>
          <Text style={styles.activityNameText}>{entry.activityName}</Text>
          <Text>{entry.activityDuration} min</Text>
        </View>
      )}

      {/* Needs revision... */}
      {category === 'nutrition' && (
        <>
          {entry.mealType === 'Breakfast' && (
            <>
              <Text>{entry.mealType}</Text>
              <View style={styles.entryContainer}>
                <Text>{entry.foodItemName}</Text>
                <Text>{entry.foodItemCalories} cal</Text>
              </View>
            </>
          )}
          {entry.mealType === 'Lunch' && (
            <>
              <Text>{entry.mealType}</Text>
              <View style={styles.entryContainer}>
                <Text>{entry.foodItemName}</Text>
                <Text>{entry.foodItemCalories} cal</Text>
              </View>
            </>
          )}
          {entry.mealType === 'Dinner' && (
            <>
              <Text>{entry.mealType}</Text>
              <View style={styles.entryContainer}>
                <Text>{entry.foodItemName}</Text>
                <Text>{entry.foodItemCalories} cal</Text>
              </View>
            </>
          )}
          {entry.mealType === 'Other' && (
            <>
              <Text>{entry.mealType}</Text>
              <View style={styles.entryContainer}>
                <Text>{entry.foodItemName}</Text>
                <Text>{entry.foodItemCalories} cal</Text>
              </View>
            </>
          )}
        </>
      )}

      {category === 'sleep' && (
        <View>
          <Text>Slept at: {entry.sleepAt}</Text>
          <Text>Woke at: {entry.wakeAt}</Text>
          <Text>Sleep duration: { }</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    gap: 12
  },
  categoryText: {

  },
  countText: {

  },
  activityEntryContainer: {
    gap: 6,
  },
  entryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activityNameText: {
    maxWidth: 175,
    fontWeight: 'bold',
  }
});