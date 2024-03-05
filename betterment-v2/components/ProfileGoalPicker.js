import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/Colors";

export default function ProfileGoalPicker({ units, value, unit, onValueChange }) {
  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Enter value"}
          keyboardType="numeric"
          value={value}
          onChangeText={(text) => onValueChange(text, unit)}
        />
        <Picker
          selectedValue={unit}
          style={styles.picker}
          onValueChange={(itemValue) => onValueChange(value, itemValue)}
        >
          {units.map((unit, index) => (
            <Picker.Item key={index} label={unit} value={unit} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  h2: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    paddingLeft: 8,
  },
  input: {
    width: 150,
    fontSize: 16,
    fontFamily: 'Nunito-Medium',
    textAlign: 'right',
    paddingHorizontal: 16,
  },
  pickerContainer: {
    backgroundColor: Colors.primaryLight,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    width: 120,
    fontSize: 16,
  },
});