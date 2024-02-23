// This component displays the name of the current screen //

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dim } from "../constants/Dimensions";
import { Colors } from "../constants/Colors";

export default function Header({ screen }) {
  return (
    <View style={styles.container}>
      <Text style={styles.screenName}>{screen}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dim.vpWidth,
    backgroundColor: Colors.primary,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  screenName: {
    fontSize: 16,
    color: 'white'
  }
});