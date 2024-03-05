// This component is the home screen. It displays the user's stats of the day or any chosen day //

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressBar from "../components/ProgressBar";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Top stat */}
      <View style={styles.progressContainer}>
        <View>
          {/* The progress */}
          <ProgressBar radius={50} strokeWidth={10} progress={0.7} />
          {/* The stat */}
          <View>
            <Text>8750</Text>
            <Text>steps</Text>
          </View>
        </View>

        <Text>1250 steps remaining</Text>
      </View>
      {/* Stats */}
      <View style={styles.categoriesContainer}>
        <View style={styles.categoryContainer}>
          <Text>Activity</Text>
          <Text>Stats</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text>Activity</Text>
          <Text>Stats</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text>Activity</Text>
          <Text>Stats</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text>Activity</Text>
          <Text>Stats</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    // alignContent: 'stretch',
    gap: 16,
  },
  progressContainer: {
    backgroundColor: 'yellow',
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  categoriesContainer: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // alignItems: 'stretch',
    gap: 16,
  },
  categoryContainer: {
    backgroundColor: 'white',
    padding: 16,
    flexBasis: 150,
    justifyContent: 'center',
    alignItems: 'center',
  }
});