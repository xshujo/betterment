// This component is a screen that displays the user's diary entries //

import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import DiaryEntryList from "../components/DiaryEntryList";
import { Dim } from "../constants/Dimensions";
import { Colors } from "../constants/Colors";

export default function DiaryScreen() {
  return (
    <View style={styles.container}>
      <Header screen="Diary" />
      <Search />
      <View>
        <DiaryEntryList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dim.vpWidth,
    height: Dim.vpHeight,
    backgroundColor: Colors.background,
  }
});