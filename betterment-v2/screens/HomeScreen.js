// This component is the home screen. It displays the user's stats of the day or any chosen day //

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from "../constants/Colors";
import ProgressBar from "../components/ProgressBar";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Top stat */}
      <View style={styles.progressContainer}>
        <View style={styles.progressSubContainer}>
          {/* The progress */}
          <ProgressBar radius={100} strokeWidth={16} progress={0.7} />
          {/* The stat */}
          <View style={styles.currentTextContainer}>
            <Text style={styles.h1}>8750</Text>
            <Text style={styles.h2}>steps</Text>
          </View>
        </View>
        <Text style={styles.h4}>1250 steps remaining</Text>
      </View>
      {/* Stats */}
      <View style={styles.categoriesContainer}>
        <LinearGradient colors={['#FED3D4', '#FED3D4', '#EEFFF3']}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.gradient}>
          <View style={styles.categoryContainer}>
            <Text style={styles.h3}>Activity</Text>
            <Text>Stats</Text>
          </View>
        </LinearGradient>
        <LinearGradient colors={['#FED3D4', '#FED3D4', '#EEFFF3']}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.gradient}>
          <View style={styles.categoryContainer}>
            <Text style={styles.h3}>Calorie intake*</Text>
            <Text>Stats</Text>
          </View>
        </LinearGradient>
        <LinearGradient colors={['#FED3D4', '#FED3D4', '#EEFFF3']}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.gradient}>
          <View style={styles.categoryContainer}>
            <Text style={styles.h3}>Sleep</Text>
            <Text>Stats</Text>
          </View>
        </LinearGradient>
        <LinearGradient colors={['#FED3D4', '#FED3D4', '#EEFFF3']}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.gradient}>
          <View style={styles.categoryContainer}>
            <Text style={styles.h3}>Activity</Text>
            <Text>Stats</Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent1,
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    gap: 24,
  },
  h1: {
    fontFamily: 'Nunito-Black',
    fontSize: 32,
    color: Colors.primary,
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 24,
    color: Colors.primary,
    textAlign: 'center',
  },
  h3: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  h4: {
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
  },
  p: {
    fontFamily: 'Nunito-Regular',
  },
  progressContainer: {
    // width: 120,
    gap: 8,
  },
  progressSubContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  currentTextContainer: {
    position: 'absolute',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  gradient: {
    height: 100,
    borderRadius: 16,
    flexBasis: 128,
    flexGrow: 1,
  },
  categoryContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});