import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/Colors";

export default function Input({ inputName, unit, charLimit }) {
  const weightUnit = ["kg", "lbs"];
  const heightUnit = ["cm", "ft"];
  const measurementUnit = ["cm, in"];
  const foodUnit = ["cal", "g", "mg"];

  return (
    <View style={styles.categoryItem}>
      <Text style={styles.h3}>{inputName}</Text>
      <View style={styles.goalFlex}>
        <TextInput style={styles.textInput} keyboardType='numeric' placeholder='Value' maxLength={charLimit} />
        <View>
          <Text style={styles.h3}>{unit}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  h3: {
    fontFamily: 'Nunito-Bold'
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: 20,
  },
  categoryItem: {
    gap: 4,
  },
  goalFlex: {
    width: 144,
    backgroundColor: Colors.primaryLight,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  multiInputContainer: {
    width: 144,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    zIndex: 5,
  },
  textInput: {
    width: 72,
    backgroundColor: Colors.accent1,
    fontFamily: 'Nunito-Regular',
    borderColor: Colors.primary,
    borderWidth: 2,
    paddingVertical: 8,
    paddingLeft: 16,
  },
});