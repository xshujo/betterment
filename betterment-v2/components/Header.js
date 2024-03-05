// This component displays the name of the current screen //

import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useCurrentScreen } from "../hooks/useCurrentScreen";
import { Colors } from "../constants/Colors";

import GoBackIcon from "../assets/images/icon.png";
import SettingsIcon from "../assets/images/icon.png";

export default function Header() {
  const currentScreen = useCurrentScreen();

  return (
    <View style={styles.container}>

      {/* Go back button */}
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={GoBackIcon} style={{ width: 16, height: 16, }} />
      </TouchableOpacity>

      {/* Screen name */}
      <Text style={styles.screenNameText}>{currentScreen}</Text>

      {/* Settings button */}
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={SettingsIcon} style={{ width: 16, height: 16, }} />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  // Styles for the container (header)
  container: {
    minHeight: 120,
    backgroundColor: Colors.accent1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // Styles for the icons' container
  iconContainer: {
    padding: 32,
  },
  // Styles for the screen name
  screenNameText: {
    fontFamily: 'Nunito-Bold',
  }
});