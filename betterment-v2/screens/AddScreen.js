import React from "react";
import { ScrollView, View } from "react-native";
import ActivityEntryForm from "../components/forms/ActivityEntryForm";

export default function AddScreen() {
  return (
    <View>
      <ScrollView>
        <ActivityEntryForm />
      </ScrollView>
    </View>
  );
}