// This component displays the health information recorded by the user for a given category //

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LogEntry({ category, entry }) {
  if (!entry) {
    return null;
  }

  // Formatting minutes of sleep entries
  let formattedMinutes = [entry.sleepMinutes, entry.wakeMinutes].map((min) => (min <= 9 ? "0" + min : min));

  // Convert sleep and wake timestamps to Date objects
  const sleepTime = new Date(`${entry.sleepDate}T${entry.sleepHours}:${entry.sleepMinutes}:00`);
  const wakeTime = new Date(`${entry.wakeDate}T${entry.wakeHours}:${entry.wakeMinutes}:00`);

  // Calculate sleep duration in milliseconds
  const sleepDurationMs = wakeTime - sleepTime;

  // Convert sleep duration to hours and minutes
  const hoursDuration = Math.floor(sleepDurationMs / (1000 * 60 * 60));
  const minutesDuration = Math.floor((sleepDurationMs / (1000 * 60)) % 60);

  return (
    <>
      {/* Structure for Activity entries */}
      {category === 'activity' && (
        <View style={styles.entryContainer}>
          <Text style={styles.activityNameText}>{entry.name}</Text>
          <Text style={styles.p}>{entry.duration} min</Text>
        </View>
      )}

      {/* Structure for Nutrition entries */}
      {/* Needs revision... */}
      {category === 'meal' && (
        <>
          {/* <Text style={styles.boldText}>{entry.mealType}</Text> */}
          <View style={styles.entryContainer}>
            <Text style={styles.p}>{entry.name}</Text>
            <Text style={styles.p}>{entry.calories} cal</Text>
          </View>
        </>
      )}

      {/* Structure for Sleep entries */}
      {category === 'sleep' && (
        <View style={styles.sleepContainer}>
          <View style={styles.entryContainer}><Text style={styles.boldText}>Slept at</Text><Text style={styles.p}>{entry.sleepHours}h{formattedMinutes[0]}</Text></View>
          <View style={styles.entryContainer}><Text style={styles.boldText}>Woke at</Text><Text style={styles.p}>{entry.wakeHours}h{formattedMinutes[1]}</Text></View>
          <Text style={styles.p}><Text>Sleep duration: </Text>{hoursDuration}h {minutesDuration}min</Text>
        </View>
      )}

      {/* Structure for Measurements entries */}
      {category === 'measurement' && (
        <View>
          <View style={styles.entryContainer}>
            <Text style={styles.boldText}>{entry.measurementName}</Text>
            <Text style={styles.p}>{entry.measurementValue} {entry.measurementName === "weight" ? "lbs" : "cm"}</Text>{/* Settings... */}
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  p: {
    fontFamily: 'Nunito-Regular',
  },
  entryContainer: {
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boldText: {
    fontFamily: 'Nunito-Bold',
    textTransform: 'capitalize',
  },
  activityNameText: {
    maxWidth: 175,
    fontFamily: 'Nunito-Bold',
  },
  sleepContainer: {
    gap: 4,
  },
});