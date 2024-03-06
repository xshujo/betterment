import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";

export default function OptionPicker({ options, onSelect }) {
  function handleOptionPress(option) {
    onSelect(option);
  };

  return (
    <>
      <TouchableOpacity style={styles.inputContainer}>
        <Text style={styles.inputText}>Unit</Text>
      </TouchableOpacity>
      <View style={styles.optionsContainer}>
        <ScrollView>
          {options.map((option, index) => (
            <TouchableOpacity style={styles.optionTextContainer} key={index} onPress={handleOptionPress(option)}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 72,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontFamily: 'Nunito-Medium',
  },
  optionsContainer: {
    width: 144,
    maxHeight: 150,
    backgroundColor: Colors.accent1,
    borderColor: Colors.accent2,
    borderWidth: 2,
    position: 'absolute',
    top: 51,
    left: 0,
  },
  optionTextContainer: {
    width: '100%',
    backgroundColor: Colors.accent1,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent2
  },
  optionText: {
    fontFamily: 'Nunito-Regular',
    paddingHorizontal: 16,
    paddingVertical: 8,
  }
});