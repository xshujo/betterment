import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/Colors";

export default function ProfileGoalPicker({ units, value, unit, onValueChange }) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.h2}>{container}</Text> */}
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
    width: 100,
    fontSize: 16,
    fontFamily: 'Nunito-Medium',
    paddingHorizontal: 8,
  },
  pickerContainer: {
    width: 200,
    backgroundColor: Colors.primaryLight,
    // borderWidth: 2,
    borderRadius: 16,
    // borderColor: Colors.accent2,
    flexDirection: 'row',
  },
  picker: {
    width: 100,
    // backgroundColor: 'white',
  },
});