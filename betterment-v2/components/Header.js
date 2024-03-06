// This component displays the name of the current screen //

import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useCurrentScreen } from "../hooks/useCurrentScreen";
import { Colors } from "../constants/Colors";

import GoBackIcon from "../assets/images/icon.png";
import SettingsIcon from "../assets/images/icon.png";
import { useNavigation, useRoute } from "@react-navigation/core";

export default function Header() {
  const currentScreen = useCurrentScreen();

  const navigation = useNavigation(); // Initialize navigation
  const route = useRoute();

  const handleGoBack = () => {
    navigation.navigate('Home'); // Navigate to the home screen
  };

  const renderGoBackButton = () => {
    if (route.name !== 'Home') { // Check if the current screen is not the home screen
      return (
        <TouchableOpacity style={styles.iconContainer} onPress={handleGoBack}>
          <Image source={GoBackIcon} style={{ width: 16, height: 16, }} />
        </TouchableOpacity>
      );
    } else {
      return <View style={{ width: 80 }} />; // Render an empty View component if on the home screen
    }
  };

  return (
    <View style={styles.container}>
      {renderGoBackButton()}{/* Render the "Go back" button */}

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