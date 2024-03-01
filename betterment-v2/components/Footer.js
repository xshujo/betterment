// This component contains the main navigation buttons //

import React from "react";

import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Dim } from "../constants/Dimensions";

import HomeIcon from "../assets/images/icon.png";
import LogIcon from "../assets/images/icon.png";
import AddIcon from "../assets/images/icon.png";
import DiaryIcon from "../assets/images/icon.png";
import ProfileIcon from "../assets/images/icon.png";

export default function Footer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={HomeIcon} style={{ width: 16, height: 16 }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={LogIcon} style={{ width: 16, height: 16 }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={AddIcon} style={{ width: 16, height: 16 }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={DiaryIcon} style={{ width: 16, height: 16 }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={ProfileIcon} style={{ width: 16, height: 16 }} />
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
    padding: 24,
  }
});