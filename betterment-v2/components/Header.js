// This component displays the name of the current screen //

import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dim } from "../constants/Dimensions";
import { Colors } from "../constants/Colors";

import GoBackIcon from "../assets/images/icon.png";
import SettingsIcon from "../assets/images/icon.png";

export default function Header({ screen }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={GoBackIcon} style={{ width: 16, height: 16, }} />
      </TouchableOpacity>
      <Text>{screen}</Text>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={SettingsIcon} style={{ width: 16, height: 16, }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 72,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconContainer: {
    padding: 24
  }
});