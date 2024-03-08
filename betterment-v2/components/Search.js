// This component is a search bar for the Log and Diary screens //

import React from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import SearchIcon from "../assets/images/icon.png";
import SortIcon from "../assets/images/icon.png";
import { Colors } from "../constants/Colors";

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={SearchIcon} />
        </TouchableOpacity>
        <TextInput style={styles.textInput} placeholder="Search notes" />
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={SortIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent1,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  subContainer: {
    // backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 16,
  },
  textInput: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
  },
});