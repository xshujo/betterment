// This component is a screen that displays the user's diary entries //

import React from "react";
import { StyleSheet, View } from "react-native";
import Search from "../components/Search";
import DiaryEntryList from "../components/DiaryEntryList";
import { Colors } from "../constants/Colors";

export default function DiaryScreen() {
  return (
    <View style={styles.container}>
      <Search />
      <View>
        <DiaryEntryList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  }
});