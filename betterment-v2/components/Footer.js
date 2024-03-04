// This component contains the main navigation buttons //

import React from "react";

import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/Colors";

import HomeIcon from "../assets/images/icon.png";
import LogIcon from "../assets/images/icon.png";
import AddIcon from "../assets/images/icon.png";
import DiaryIcon from "../assets/images/icon.png";
import ProfileIcon from "../assets/images/icon.png";

export default function Footer() {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {/* Home screen button */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigateToScreen('Home')}>
        <Image source={HomeIcon} style={{ width: 16, height: 16 }} />
      </TouchableOpacity>

      {/* Log screen button */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigateToScreen('Log')}>
        <Image source={LogIcon} style={{ width: 16, height: 16 }} />
      </TouchableOpacity>

      {/* Add entry button */}
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={AddIcon} style={{ width: 16, height: 16 }} />
      </TouchableOpacity>

      {/* Diary screen button */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigateToScreen('Diary')}>
        <Image source={DiaryIcon} style={{ width: 16, height: 16 }} />
      </TouchableOpacity>

      {/* Profile screen button */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigateToScreen('Profile')}>
        <Image source={ProfileIcon} style={{ width: 16, height: 16 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles for the container (footer)
  container: {
    minHeight: 72,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // Styles for the icons' container
  iconContainer: {
    padding: 24,
  }
});