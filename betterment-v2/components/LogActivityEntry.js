// This component displays the information of an acivity entry //

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LogActivityEntry({ activityName, activityDuration }) {
  return (
    <View style={styles.container}>
      {activityName && (<Text style={styles.activityNameText}>{activityName}</Text>)}
      {activityDuration && (<Text>{activityDuration} min</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  activityNameText: {
    maxWidth: 175,
    fontWeight: 'bold',
  }
});