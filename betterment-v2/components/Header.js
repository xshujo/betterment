// This component displays the name of the current screen //

import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useCurrentScreen } from "../hooks/useCurrentScreen";
import { Colors } from "../constants/Colors";

import { useNavigation, useRoute } from "@react-navigation/core";
import { GoBackIcon, SettingsIcon } from "./SvgIcon";

export default function Header() {
  const currentScreen = useCurrentScreen();

  const navigation = useNavigation();
  const route = useRoute();

  function handleGoBack() {
    navigation.goBack();
  };

  function handleSettings() {
    navigation.navigate('Settings');
  };

  function renderGoBackButton() {
    if (route.name !== 'Home') {
      return (
        <TouchableOpacity style={styles.iconContainer} onPress={handleGoBack}>
          <GoBackIcon />
        </TouchableOpacity>
      );
    } else {
      return <View style={{ width: 80 }} />;
    }
  };

  function renderSettingsButton() {
    if (route.name !== 'Settings') {
      return (
        <TouchableOpacity style={styles.iconContainer} onPress={handleSettings}>
          <SettingsIcon />
        </TouchableOpacity>
      );
    } else {
      return <View style={{ width: 80 }} />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Go back button */}
      {renderGoBackButton()}

      {/* Screen name */}
      <Text style={styles.screenNameText}>{currentScreen}</Text>

      {/* Settings button */}
      {renderSettingsButton()}
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