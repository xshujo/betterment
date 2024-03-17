import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import DiaryEntry from "./DiaryEntry";

export default function DiaryEntryList() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <DiaryEntry date="Feb 22, 2024" content="Here are some thoughts" />
      <DiaryEntry date="Feb 21, 2024" content="Here are some thoughts" />
      <DiaryEntry date="Feb 20, 2024" content="Here are some thoughts" />
      <DiaryEntry date="Feb 20, 2024" content="Here are some thoughts" />
      <DiaryEntry date="Feb 20, 2024" content="Here are some thoughts" />
      <DiaryEntry date="Feb 20, 2024" content="Here are some thoughts" />
      <DiaryEntry date="Feb 20, 2024" content="Here are some thoughts" />
      <DiaryEntry date="Feb 20, 2024" content="Here are some thoughts" />
      <DiaryEntry date="Feb 20, 2024" content="Here are some thoughts" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    gap: 16,
  }
});