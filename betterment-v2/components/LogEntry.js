// This component displays the health information recorded by the user for a given category //

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LogEntry({ category, entry }) {
  if (!entry) {
    return null;
  }

  // Sleep/Wake hours formating
  const dateSleepAt = new Date(entry.sleepAt);
  const dateWakeAt = new Date(entry.wakeAt);

  const hoursSleepAt = dateSleepAt.getHours().toString().padStart(2, '0');
  const minutesSleepAt = dateSleepAt.getMinutes().toString().padStart(2, '0');
  const hoursWakeAt = dateWakeAt.getHours().toString().padStart(2, '0');
  const minutesWakeAt = dateWakeAt.getMinutes().toString().padStart(2, '0');

  const formattedSleepTime = `${hoursSleepAt}h${minutesSleepAt}`;
  const formattedWakeTime = `${hoursWakeAt}h${minutesWakeAt}`;

  // Sleep duration calculation
  const sleepDurationMinutes = (dateWakeAt - dateSleepAt) / (1000 * 60); // Convert milliseconds to minutes

  const hoursDuration = Math.floor(sleepDurationMinutes / 60);
  const minutesDuration = Math.round(sleepDurationMinutes % 60);

  // Sleep duration formating
  let formattedDuration = `${hoursDuration} hours`;
  if (minutesDuration > 0) {
    if (minutesDuration <= 9) {
      formattedDuration += ` 0${minutesDuration} minutes`;
    } else {
      formattedDuration += ` ${minutesDuration} minutes`;
    }
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
              <Text style={styles.boldText}>{entry.mealType}</Text>
              <View style={styles.entryContainer}>
                <Text>{entry.foodItemName}</Text>
                <Text>{entry.foodItemCalories} cal</Text>
              </View>
            </>
          )}
          {entry.mealType === 'Lunch' && (
            <>
              <Text style={styles.boldText}>{entry.mealType}</Text>
              <View style={styles.entryContainer}>
                <Text>{entry.foodItemName}</Text>
                <Text>{entry.foodItemCalories} cal</Text>
              </View>
            </>
          )}
          {entry.mealType === 'Dinner' && (
            <>
              <Text style={styles.boldText}>{entry.mealType}</Text>
              <View style={styles.entryContainer}>
                <Text>{entry.foodItemName}</Text>
                <Text>{entry.foodItemCalories} cal</Text>
              </View>
            </>
          )}
          {entry.mealType === 'Other' && (
            <>
              <Text style={styles.boldText}>{entry.mealType}</Text>
              <View style={styles.entryContainer}>
                <Text>{entry.foodItemName}</Text>
                <Text>{entry.foodItemCalories} cal</Text>
              </View>
            </>
          )}
        </>
      )}

      {category === 'sleep' && (
        <View style={styles.sleepContainer}>
          <View style={styles.entryContainer}><Text style={styles.boldText}>Slept at</Text><Text>{formattedSleepTime}</Text></View>
          <View style={styles.entryContainer}><Text style={styles.boldText}>Woke at</Text><Text>{formattedWakeTime}</Text></View>
          <Text><Text>Sleep duration: </Text>{formattedDuration}</Text>
        </View>
      )}

      {category === 'measurements' && (
        <View>
          <View style={styles.entryContainer}>
            <Text style={styles.boldText}>{entry.measurementName}</Text><Text>{entry.measurementValue} {entry.measurementUnit}</Text>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  entryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boldText: {
    fontWeight: 'bold'
  },
  activityNameText: {
    maxWidth: 175,
    fontWeight: 'bold',
  },
  sleepContainer: {
    gap: 4,
  },
});