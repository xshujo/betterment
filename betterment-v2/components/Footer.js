// This component contains the main navigation buttons //

import React from "react";

import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useCurrentScreen } from "../hooks/useCurrentScreen";
import { Colors } from "../constants/Colors";
import { AddIcon, DiaryIcon, HomeIcon, LogIcon, ProfileIcon } from "./SvgIcon";

export default function Footer() {
  const navigation = useNavigation();
  const currentScreen = useCurrentScreen();

  function navigateToScreen(screenName) {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {/* Home screen button */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigateToScreen('Home')}>
        <HomeIcon fill={currentScreen === 'Home' || !currentScreen ? Colors.primary : Colors.accent2} />
      </TouchableOpacity>

      {/* Diary screen button */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigateToScreen('Diary')}>
        <DiaryIcon fill={currentScreen === 'Diary' ? Colors.primary : Colors.accent2} />
      </TouchableOpacity>

      {/* Add entry button */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigateToScreen('Add')}>
        <AddIcon />
      </TouchableOpacity>

      {/* Log screen button */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigateToScreen('Log')}>
        <LogIcon fill={currentScreen === 'Log' ? Colors.primary : Colors.accent2} />
      </TouchableOpacity>

      {/* Profile screen button */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigateToScreen('Profile')}>
        <ProfileIcon fill={currentScreen === 'Profile' ? Colors.primary : Colors.accent2} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    backgroundColor: Colors.accent1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 20,
  }
});