// This component displays the name of the current screen //

import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from "../constants/Colors";

import GoBackIcon from "../assets/images/icon.png";
import SettingsIcon from "../assets/images/icon.png";
import { useCurrentScreen } from "../hooks/useCurrentScreen";

export default function Header() {
  const currentScreen = useCurrentScreen();
  return (
    // Gradient; Might remove
    <LinearGradient colors={['#FFFFFF', '#F7B2B9']}
      start={[0, 1]}
      end={[0, 0]}>

      {/* Container */}
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

    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  // Styles for the container (header)
  container: {
    minHeight: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // Styles for the icons' container
  iconContainer: {
    padding: 24,
  },
  // Styles for the screen name
  screenNameText: {
    color: Colors.accent3,
    fontFamily: 'Nunito-Bold',
  }
});