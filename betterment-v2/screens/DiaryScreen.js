// This component is a screen that displays the user's diary entries //

import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../constants/Colors";
import Search from "../components/Search";
import DiaryEntryList from "../components/DiaryEntryList";

export default function DiaryScreen() {
  return (
    <View style={styles.container}>
      {/* <Search /> */}
      {/* <View> */}
      {/* <DiaryEntryList /> */}
      <Text style={styles.tempText}>This page will eventually contain your future mood/thought entries and, hopefully, a cycle tracker for the ladies.</Text>
      <Text style={styles.tempText}>x</Text>
      <Text style={styles.tempText}>Cette page contiendra éventuellement vos futures entrées d'humeur/pensées et, espérons-le, un suivi de cycle pour les dames.</Text>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent1,
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  tempText: {
    fontFamily: 'Nunito-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
});