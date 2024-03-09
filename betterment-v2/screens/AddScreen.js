import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ActivityEntryForm from "../components/forms/ActivityEntryForm";
import OptionPicker from "../components/OptionPicker";

export default function AddScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <OptionPicker /> */}
        <ActivityEntryForm />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
  },
});