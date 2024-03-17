// This component is a custom input for values with measuring units. It is curremtly used for setting goals in the Profile screen //
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { Colors } from "../constants/Colors";

export default function Input({ inputName, unit, charLimit, type, onChange, value }) {
  async function handleInputChange(text) {
    console.log("Input value:", text);
    onChange(text);
  };

  return (
    <View style={styles.categoryItem}>
      <Text style={styles.h3}>{inputName}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          keyboardType='numeric'
          placeholder='Value'
          maxLength={charLimit}
          value={value}
          onChangeText={handleInputChange}
        />
        <Text style={styles.unitText}>{unit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  h3: {
    fontFamily: 'Nunito-Bold'
  },
  categoryItem: {
    gap: 4,
  },
  inputContainer: {
    width: 140,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  textInput: {
    fontFamily: 'Nunito-Regular',
    flex: 1,
  },
  unitText: {
    fontFamily: 'Nunito-Bold',
    paddingVertical: 8,
  }
});